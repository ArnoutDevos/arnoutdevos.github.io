---
permalink: /projects/
title: Projects
---
Projects I have worked on, and wrote a blogpost about, are listed below.

{% for post in site.tags.project %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}