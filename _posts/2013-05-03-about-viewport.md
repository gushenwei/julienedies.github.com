---
layout: post
title: "关于viewport"
description: ""
category: 翻译
tags: [viewport, mobile]
---
{% include JB/setup %}

<p>英语原文：<a href="http://www.quirksmode.org/mobile/viewports.html">www.quirksmode.org/mobile/viewports.html</a></p>

<code>
	meta name="viewport" content="width=drive-width,target-densitydpi=device-dpi, user-scalable=no" 
</code>

<h2>两个viewport的问题之一</h2>
<p>在这个短篇里,我将阐释viewport和其它各种重要的元素例如<code>&lt;html&gt;</code>,window,screen的width如何被设置.</p>
<p>这章主要涉及桌面浏览器,而且它的主要目的是搭建一个平台用于类似mobile browsers的相关讨论.大部分的web开发者已经非常了解桌面浏览器开发的相关概念.在移动浏览器上我们会发现相同的概念,但是更复杂.因此预先的一个论述会更好的帮助每个人了解mobile browsers.</p>
<section>
<h3>概念：物理像素和css像素(device pixels and css pixels)</h3>
<p>你需要知道的第一个概念是css像素,它不同于物理像素.</p>
<p>物理像素是我们一直以来认识的像素,它决定了分辨率,无论你使用的是哪个设备.并且可以使用<code>screen.width/height</code>获取</p>
<p>如果你设定某个元素<code>width:128px</code>,并且你的屏幕为1024px宽(最大化你的浏览器窗口),那么这个元素会适配为屏幕的1/8.(大致如此,现在让我们忽略某些细节).</p>
<p>如果用户缩放屏幕，那么这个计算结果将会改变.假设用户缩放到200%,那么这个128px宽的元素将会适配为屏幕的1/4.</p>
<p>在现代浏览器里,缩放实现无关像素拉伸.即是说,该元素的宽不会从128px变为256px;相反实际的像素宽变为原先的两倍.形式上,该元素的宽仍为128px,虽然它实际上占据了256物理像素宽的空间.</p>
<p>换句话说,缩放到200%标志着1个css pixel扩展到一个物理像素的4倍大.(两倍宽,两倍高,总计为4倍).</p>
<p>一些图片会清楚的阐述上述概念,这里有4个100%缩放级别的像素,它们刚好重叠物理像素.</p>
<p><img src="/assets/img/viewport/csspixels_100.gif" /></p>
<p>现在让我们缩小,css像素开始收缩,意味着一个物理像素重叠于一些css像素.</p>
<p><img src="/assets/img/viewport/csspixels_out.gif" /></p>
<p>如果我们放大,相反,css像素开始扩展,一个css像素重叠于一些物理像素.</p>
<p><img src="/assets/img/viewport/csspixels_in.gif" /></p>
<p>这里的观点是你只需要关注css像素,它支配你的样式如何渲染.</p>
<p>物理像素基本对开发者无用;不是对最终用户,用户可能会缩放页面直到他能舒适的浏览.开发者也不用太过关心缩放级别,浏览器会自动确定页面css布局收缩或扩展.</p>
<h4>100% zoom.</h4>
<p>开始时候的示例,我假设缩放级别为100%;现在是时候稍微严格的定义了.</p>
<p><strong>在100%缩放级别,1个css像素精确等于一个物理像素.</strong></p>
<p>100%缩放的概念在下面的阐述中非常有用,但是你不用在日常工作中担心它.桌面开发中,你通常会在100%缩放级别测试你的站点.但即使用户缩放页面,css像素魔法仍会确保你的页面布局保持相同的比例.</p>
</section>

<section>
<h3>Screen size</h3>
<div class="floater">
<h5 id="link4">screen.width/height</h5>
<dl class="data">
<dt>Meaning</dt><dd>Total size of the user’s screen.</dd>
<dt>Measured in</dt><dd>Device pixels</dd>
<dt>Browser errors</dt><dd>IE8 measures it in CSS pixels, in both IE7 and IE8 mode.</dd>
</dl>
</div>
<p>让我们看一些实际开发中的宽高计算.我们将以<code>screen.width</code>和<code>screen.height</code>开始.它们分别计算用户屏幕的总宽和总高.这些尺寸以物理像素计算,因为它们永远不会改变;它们是屏幕的特征而不是浏览器的特征.</p>
<p><img src="/assets/img/viewport/desktop_screen.jpg" /></p>
<p>好了,我们可以使用这些信息做什么呢?</p>
<p>恩,基本上没什么事.用户屏幕的尺寸对我们并不重要.除非你想计算它们用在一个web统计数据库中.</p>
</section>

<section>
<h3>Window size</h3>
<div class="floater">
<h5 id="link6">window.innerWidth/Height</h5>
<dl class="data">
<dt>Meaning</dt><dd>Total size of the browser window, including scrollbars.</dd>
<dt>Measured in</dt><dd>CSS pixels</dd>
<dt>Browser errors</dt><dd>Not supported by IE.</dd>
<dd>Opera measures it in device pixels.</dd>
</dl>
</div>
<p>相反,你想知道浏览器窗口的内部尺寸,它精确的告诉你,对于css布局,当前有多少可用空间.你可以通过<code>window.innerWidth</code>和<code>window.innerHeight</code>获取到相关值.</p>
<p><img src="/assets/img/viewport/desktop_inner.jpg" /></p>
<p>很明显,window的内部宽是以css像素计算的.</p>
</section>
