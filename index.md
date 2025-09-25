
---
layout: default
title: Home
---

<h1>Albums of the Year</h1>
<p>Select a year to view the top 50 albums:</p>
<ul>
{% for year in site.data.years %}
  <li><a href="{{ year }}.html">{{ year }}</a></li>
{% endfor %}
