---
layout: page
title: 一切有为法
tagline: Supporting tagline
---
{% include JB/setup %}

<h4>我的RSS地址：<a href="/atom.xml">RSS订阅</a></h4>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

