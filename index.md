---
layout: default
title: Home
---

<div class="navbar">
  <div class="dropdown">
    <button class="dropbtn">Albums of the Year</button>
    <div class="dropdown-content">
      {% for year in (2005..2026) %}
      <a href="/albums/{{ year }}.html">{{ year }}</a>
      {% endfor %}
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">About</button>
    <div class="dropdown-content">
      <a href="/about.html">About Jack</a>
    </div>
  </div>
</div>

<h1>Welcome to Albums of the Year</h1>
<p>Select a year from the menu to view the top 50 albums.</p>
