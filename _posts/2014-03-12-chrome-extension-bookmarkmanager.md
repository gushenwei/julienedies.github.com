---
layout: post
title: "开发一个基于chrome扩展的书签管理器"
description: "一个基于chrome扩展实现的书签管理器"
category: 技术&amp;开发
tags: [chrome-extension]
---
{% include JB/setup %}

第二个chrome扩展，一个书签管理器；

chrome浏览器用的很顺手，但是书签管理器却不得不让人诟病；

好吧，自己动手丰衣足食；

之前已经做了一个chrome扩展，已经掌握大致框架；这个扩展做起来顺利多了。

记录一下遇到的一个问题：

1：循环中如果有回调函数，并且循环条件依赖回调函数，可能需要另外处理；

时间总是很紧张，有时间的话，这个扩展的实现可以详细记录一下，主要是关于扩展的架构，我觉得还是有点意思的...



<p><a href="https://github.com/Julienedies/chrome-extension-bookmarkManager">github地址</a>..</p>

