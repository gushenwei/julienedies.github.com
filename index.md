---
layout: page
title: 首页
group: navigation
---
{% include JB/setup %}

<h4>我的RSS地址：<a href="/atom.xml">RSS订阅</a></h4>
<br/>
<br/>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date: '%Y-%m-%d' }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

