---
layout: page
permalink: /talks/
title: talks
description: Overview of the invited talks, guest lectures, panels, and juries I did or will do.
nav: true
nav_order: 3
---

{% assign talks = site.data.talks | sort: "date" | reverse %}

<div class="talks-summary">
  <strong>{{ talks | size }}</strong> talks, guest lectures, panels &amp; juries, newest first
</div>

<div class="talks-timeline">
{% for talk in talks %}
  <div class="talk">
    <div class="talk-date">{{ talk.date | date: "%b %Y" }}</div>
    <div class="talk-body">
      <div class="talk-title">
        {% if talk.url %}<a href="{{ talk.url }}" target="_blank" rel="noopener">{{ talk.title }}</a>{% else %}{{ talk.title }}{% endif %}
        <span class="talk-type talk-type-{{ talk.type | slugify }}">{{ talk.type }}</span>
      </div>
      <div class="talk-venue">
        {% if talk.venue_url %}<a href="{{ talk.venue_url }}" target="_blank" rel="noopener">{{ talk.venue }}</a>{% else %}{{ talk.venue }}{% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>
