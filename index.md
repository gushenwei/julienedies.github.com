---
layout: page
title: 首页
---
{% include JB/setup %}

<h5>我的RSS地址：<a href="/atom.xml">RSS订阅</a></h5>
<br/>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date: '%Y-%m-%d' }}</span> &nbsp;&raquo;&nbsp; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

