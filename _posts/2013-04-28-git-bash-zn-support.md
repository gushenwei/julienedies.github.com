---
layout: post
title: "转载 git bash中文乱码解决"
description: ""
category: git
tags: [git, tool]
---
{% include JB/setup %}

转载自  &nbsp;&nbsp; http://hunter-wxhu-hotmail-com.iteye.com/blog/1097897

first you need set cmd default as 中文编码 

然后可以正常显示中文，当你使用ls命令的时候 

但是还是有乱码，当单元测试输出时候，即使输出已经设置为utf-8编码，然后就解决如下 

for git bash env, you need add into 

"git安装路径 /etc/ bash_profile"

<p>添加一行:</p> 

<p><code>cmd /c "chcp 65001"</code></p> 

<p>这样每次启动就不需要手动输入命令.</p> 

<p>此方法同样适用于cmd.exe,just run <code> chcp 65001</code>.</p>