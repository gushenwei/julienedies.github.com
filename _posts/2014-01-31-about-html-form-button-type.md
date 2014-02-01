---
layout: post
title: "为什么button按钮会触发表单submit事件?"
description: "button按钮触发submit事件"
category: 
tags: [html]
---
{% include JB/setup %}

这两天开发一个chrome插件，遇到一个奇怪的问题。

form表单里的button按钮点击之后总是会触发form submit事件。

但它不是提交按钮哎。why？

折腾了半天，总算找到原因，原来button按钮在IE中默认类型为button；而在其它符合w3c规范的浏览器中，默认类型就是submit。你知道，我不用IE已经很久了。所以我遇到了这个问题。


事情就是这样...同学们，切记明确声明button按钮的类型：type="button"。如果你不想凭空多出一些submit按钮的话...
