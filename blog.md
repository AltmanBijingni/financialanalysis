---
layout: page
title: Blog
permalink: /blog/
---

{% assign posts = site.posts | sort: "date" | reverse %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%B %-d, %Y" }}
{% else %}
No posts yet.
{% endfor %}
