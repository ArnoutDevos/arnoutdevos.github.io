require 'feedjira'
require 'httparty'
require 'jekyll'
require 'json'
require 'nokogiri'
require 'time'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      if site.config['external_sources'] != nil
        site.config['external_sources'].each do |src|
          puts "Fetching external posts from #{src['name']}:"
          if src['rss_url']
            fetch_from_rss(site, src)
          elsif src['posts']
            fetch_from_urls(site, src)
          end
        end
      end
    end

    def fetch_from_rss(site, src)
      xml = HTTParty.get(src['rss_url']).body
      return if xml.nil?
      feed = Feedjira.parse(xml)
      process_entries(site, src, feed.entries)
    end

    def process_entries(site, src, entries)
      entries.each do |e|
        puts "...fetching #{e.url}"
        summary = e.summary.to_s.strip
        thumbnail = nil
        if e.content
          html = Nokogiri::HTML(e.content)
          # feeds like Medium's carry no summary: derive one from the first paragraph of text
          if summary.empty?
            # skip bylines/captions: take the first paragraph of real length
            paras = html.css('p').map { |n| n.text.strip }.reject(&:empty?)
            text = (paras.find { |t| t.length >= 80 && !t.start_with?('by ') } || paras.first).to_s
            text = text[0, 280].sub(/\s+\S*\z/, '') + '…' if text.length > 280
            summary = text
          end
          # first image in the post doubles as its thumbnail on the blog index
          thumbnail = html.at('img')&.attr('src')
        end
        create_document(site, src['name'], e.url, {
          title: e.title,
          content: e.content,
          summary: summary,
          published: e.published,
          thumbnail: thumbnail
        })
      end
    end

    def create_document(site, source_name, url, content)
      # check if title is composed only of whitespace or foreign characters
      if content[:title].gsub(/[^\w]/, '').strip.empty?
        # use the source name and last url segment as fallback
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}"
      else
        # parse title from the post or use the source name and last url segment as fallback
        slug = content[:title].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}" if slug.empty?
      end

      path = site.in_source_dir("_posts/#{slug}.md")
      doc = Jekyll::Document.new(
        path, { :site => site, :collection => site.collections['posts'] }
      )
      doc.data['external_source'] = source_name
      doc.data['title'] = content[:title]
      doc.data['feed_content'] = content[:content]
      doc.data['description'] = content[:summary]
      doc.data['date'] = content[:published]
      doc.data['thumbnail'] = content[:thumbnail] if content[:thumbnail]
      doc.data['redirect'] = url
      site.collections['posts'].docs << doc
    end

    def fetch_from_urls(site, src)
      src['posts'].each do |post|
        puts "...fetching #{post['url']}"
        content = fetch_content_from_url(post['url'])
        # per-post overrides from _config.yml take precedence over scraped values
        content[:title] = post['title'] if post['title']
        content[:summary] = post['description'] if post['description']
        content[:thumbnail] = post['thumbnail'] if post['thumbnail']
        if post['published_date']
          content[:published] = parse_published_date(post['published_date'])
        elsif content[:published].nil?
          raise "No published_date given for #{post['url']} and none could be scraped"
        end
        create_document(site, src['name'], post['url'], content)
      end
    end

    def parse_published_date(published_date)
      case published_date
      when String
        Time.parse(published_date).utc
      when Date
        published_date.to_time.utc
      else
        raise "Invalid date format for #{published_date}"
      end
    end

    def fetch_content_from_url(url)
      response = HTTParty.get(url, headers: { 'User-Agent' => 'Mozilla/5.0' })
      unless response.code == 200
        puts "...warning: #{url} returned HTTP #{response.code}, relying on _config.yml overrides"
        return { title: '', content: '', summary: '', published: nil, thumbnail: nil }
      end
      parsed_html = Nokogiri::HTML(response.body)

      title = parsed_html.at('head title')&.text&.strip || ''
      description = parsed_html.at('head meta[name="description"]')&.attr('content') || ''
      body_content = parsed_html.at('body')&.inner_html || ''
      published = nil
      # social preview image, if the page declares one
      thumbnail = parsed_html.at('meta[property="og:image"]')&.attr('content')

      # Prefer schema.org JSON-LD when present (LinkedIn, most news sites):
      # its headline/articleBody are cleaner than <title>/<meta description>.
      parsed_html.css('script[type="application/ld+json"]').each do |script|
        data = JSON.parse(script.text) rescue next
        data = data.find { |d| d.is_a?(Hash) && d['articleBody'] } if data.is_a?(Array)
        next unless data.is_a?(Hash) && (data['articleBody'] || data['headline'])
        body = data['articleBody'].to_s.strip
        title = data['headline'].to_s.strip if data['headline'] && !data['headline'].to_s.strip.empty?
        # social posts have no separate summary: use the first paragraph, capped
        unless body.empty?
          description = body.split(/\n+/).first.to_s
          description = description[0, 280].sub(/\s+\S*\z/, '') + '…' if description.length > 280
        end
        body_content = body.gsub("\n", '<br>') unless body.empty?
        published = (Time.parse(data['datePublished']).utc rescue nil) if data['datePublished']
        break
      end

      {
        title: title,
        content: body_content,
        summary: description,
        published: published,
        thumbnail: thumbnail
      }
    end

  end
end
