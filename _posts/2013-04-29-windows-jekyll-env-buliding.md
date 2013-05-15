---
layout: post
title: "在windows上快速建立jekyll环境"
description: ""
category: 技术&amp;开发
tags: [jekyll, tool]
brushs: [Bash, Php]
---
{% include JB/setup %}

很多程序员朋友都通过github的 github Pages功能写blog。

如果没有在本地建立Jekyll环境，预览调试会很麻烦；

如果大家想在本地windows或Mac建立jekyll环境，可以使用<a href="http://railsinstaller.org/">railsinstaller</a>快速建立。

安装railsinstaller后，就可以在命令行使用 gem（ruby的包管理系统）；再通过gem安装jekyll。

<pre class="brush: bash">
	$ gem install jekyll
</pre>

安装完成Jekyll后，切换到自己的blog根目录,运行以下命令后，就可以通过<a href="http://localhost:4000">localhost:4000</a>预览自己的blog了：

<pre class="brush: bash">
	$ cd USERNAME.github.com 
	$ jekyll --server
</pre>

另外不建议使用jekyll自带的语法高亮工具：pygments；因为依赖于python，而在windows/Mac上配置python非常麻烦，非常浪费时间。

而且有很多基于js的语法高亮工具可以选择，而且给了你更多的控制。

我使用的是syntaxhighlighter，并且在jekyll中将其抽取成一个可以重复动态使用的部分：

<pre class="brush: php">

\{\% comment \%\}&lt;!--
The syntaxhighlighter include is a listing helper for syntaxhighlighter.
Usage:
  1) assign the 'brushs' variable to a valid array of brushs.
  2) include JB/syntaxhighlighter
  example:
    &lt;div&gt;
  	  \{\% assign brushs = page.brushs \%\}  
  	  \{\% include JB/syntaxhighlighter \%\}
  	&lt;/div&gt;
  
--&gt;\{\% endcomment \%\}

\{\% if brushs \%\}
  
  &lt;link href="/assets/js/library/syntaxhighlighter_3.0.83/styles/shCore.css" rel="stylesheet" type="text/css" /&gt;
  &lt;link href="/assets/js/library/syntaxhighlighter_3.0.83/styles/shThemeRDark.css" rel="stylesheet" type="text/css" /&gt;
  &lt;script type="text/javascript" src="/assets/js/library/syntaxhighlighter_3.0.83/scripts/shCore.js"&gt;&lt;/script&gt;
    \{\% for brush in brushs \%\} 
    	&lt;script type="text/javascript" src="/assets/js/library/syntaxhighlighter_3.0.83/scripts/shBrush\{\{ brush \}\}.js"&gt;&lt;/script&gt;
    \{\% endfor \%\}
  &lt;script type="text/javascript"&gt;
	SyntaxHighlighter.all();
  &lt;/script&gt;
  
 \{\% endif \%\}
 
</pre>