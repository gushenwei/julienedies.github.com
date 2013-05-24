---
layout: post
title: "[翻译]自动化javaScript开发"
description: "自动化javascript开发"
category: 英语&amp;翻译
tags: [automating, js, translated]
brushs: [Xml]
---
{% include JB/setup %}

<p><small>很纠结，到底要不要译下去。之前以为是讲gruntjs的，看下去才知道是讲Ant的。。。恩，决定译下去，还是很有参考价值的。。。</small></p>

原文链接：<a href="http://creynders.wordpress.com/2012/03/14/automating-javascript-builds/" >http://creynders.wordpress.com/2012/03/14/automating-javascript-builds/</a>

<p>这是我以前一篇讲述如何使用ant和其它一些工具自动化javacsript开发文章的更新，毕竟, 我的大部分项目已经改用 <a href="http://gruntjs.com">gruntjs</a>。它比Ant使用更简单，因为它基于javascript并且很容易整合我的大部分构建工具。当然，相较Ant而言，它有一些限制，譬如 你不能从grunt调用shell命令（除非有一个grunt任务）。</p>

<p>我也写了一个gruntjs 插件去运行jasmine: <a href="http://creynders.wordpress.com/2012/04/13/a-plugin-for-grunt-to-run-jasmine-specs-grunt-jasmine-task/">grunt-jasmine-task</a>。</p>
<p><strong>忘掉Ant，使用gruntjs替换</strong>。</p>

<p>下面是我原始的文章，可以作为参考。但是我担心已经过时了，毕竟好久没用Ant了。</p>
<h2>What?</h2>

<p>即使对于很小的项目，创建一个自动化构建进程也是有益的。有一些步骤是每次发布应用都要重复的，自动化这些步骤不只是节省时间而且省却我们忽略某些步骤的担心。</p>
<p><span id="more-262"></span></p>

<p>在这里我们不会谈论企业级的持续集成，只是自动化一些验证js并且确保它们准备好发布的工作。</p>
<p>最低限度我要确保我的js应用需要：</p>

<ul>
<li>使用 <a title="JSLint" href="http://www.jslint.com/" target="_blank">JSLint</a>/<a title="JSHint" href="http://www.jshint.com/" target="_blank">JSHint</a>进行语法检查。</li>
<li>使用<a title="Jasmine" href="http://pivotal.github.com/jasmine/" target="_blank">Jasmine</a> or <a title="QUnit" href="http://docs.jquery.com/QUnit" target="_blank">QUnit</a>进行单元测试或行为测试。</li>
<li>使用 <a title="JSDoc toolkit" href="http://code.google.com/p/jsdoc-toolkit/" target="_blank">JSdoc</a> API 生成文档。</li>
<li><a title="Minification" href="http://en.wikipedia.org/wiki/Minification_(programming)" target="_blank">minified</a> 使用 <a title="YUI compressor" href="http://developer.yahoo.com/yui/compressor/" target="_blank">YUI compressor</a>.</li>
<li><a href="http://www.mattsnider.com/using-ant-to-consolidate-css-and-javascript/" target="_blank">consolidated</a> with <a title="Apache Ant" href="http://ant.apache.org/" target="_blank">Apache Ant</a>.</li>
</ul>

<p>这就是我们要做的，我们会自动化上面的步骤。 为了完成这些，我们需要以某种方式创建一个动作列表并且让计算机有条件的和连续性的去执行它们。有大量的可能的脚本语言和构建工具可供我们使用，但是为了保持简单和使用方便，我使用 <a title="Apache Ant" href="http://ant.apache.org/" target="_blank">Apache Ant</a>.</p>
<h2>示例源码</h2>
<p><a href="https://github.com/creynders/Build-JS-example" target="_blank">下载github上的示例源码</a></p>

<p>所有不需要明确安装的工具都包含在代码中。<br />
这只是为了演示的目的。 I have a central location where I drop all jars/js files/whatever and link to those locations from the ant build file, but I wanted to save you the trouble of having to download all the various bits and pieces to get you up and running ASAP.</p>
<p>在下面的工具列表，<strong>所有需要安装的应用都有前缀(*)</strong>， 即使你只想下载示例源码，<strong>你仍需要下载安装这些包</strong>。</p>
<h3>目录结构</h3>
<ul>
<li><code>bin</code> 放置最终的.js文件。</li>
<li><code>docs</code> 用于放置API文档。</li>
<li><code>lib</code> 包含所有用于构建所需的第三方工具和文件。</li>
<li><code>specs</code> 包含所有的单元测试。</li>
<li><code>src</code> 放置.js源文件。</li>
</ul>
<h2>工具</h2>
<p>我们会用到一些tools/applications/libs,关于它们的安装使用已经有很多文章讲述，所以我会直接深入细节。</p>

<h3>(*) Apache Ant</h3>
<blockquote><p>Apache Ant是一个Java库和命令行工具，它用来驱动程序完成build文件中描述的目标。</p></blockquote>

<p>我们使用<a href="http://ant.apache.org/" target="_blank">Apache Ant</a>自动化进程和列出需要如何，何时完成的任务。细节在下面。</p>
<p><a href="http://ant.apache.org/bindownload.cgi" target="_blank">Download Apache Ant</a></p>

<h3>JSHint</h3>
<p><a href="http://www.jshint.com/" target="_blank">JSHint</a>针对JavaScript的代码质量工具，基于<a href="http://www.jslint.com/" target="_blank">JSLint</a>。我更喜欢JSHint因为一个简单的原因：JSLint强制你把所有的变量声明放到functions头部。 <a href="http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/" target="_blank">That's just silly</a>.</p>
<blockquote><p>JSHint是一个社区主导，检查JavaScript代码错误和潜在问题 并加强团队编码环境的工具。</p></blockquote>
<p>它提供了一个用于代码检查的web接口，但是我们直接使用JSHint包在本地构建过程中进行代码检查。</p>
<p><a href="https://github.com/jshint/jshint/archives/master" target="_blank">Download JSHint</a></p>
<p>我们唯一需要的只是<code>jshint.js</code>文件，因此你想的话可以 <a href="https://raw.github.com/jshint/jshint/master/jshint.js" target="_blank">直接下载</a>。</p>
<p>不需要安装，只要把它放到lib目录即可。</p>

<h3>JSDoc Toolkit</h3>
<blockquote><p>JsDoc Toolkit是一个用JavaScript编写的应用 ，用于自动化根据模板格式从JavaScript源码注释生成文档。支持的格式包括 multi-page HTML (or XML, JSON, or any other text-based) 。</p></blockquote>
<p><a href="http://code.google.com/p/jsdoc-toolkit/downloads/list" target="_blank">Download JSDoc Toolkit</a></p>
<p>不需要安装，只要把它放到lib目录即可。</p>

<h3>YUI compressor</h3>
<blockquote><p>JavaScript和CSS文件压缩的目的是保持代码运行质量的同时尽可能减小文件字节数。 YUI Compressor是一个被设计用来提供100%安全和比其它工具更高压缩比的JavaScript压缩器。 </p></blockquote>
<p><a href="http://yuilibrary.com/download/yuicompressor/" target="_blank">Download YUI compressor</a></p>
<p>不需要安装，只要把它放到lib目录即可。</p>

<h3>Jasmine</h3>
<blockquote><p>Jasmine是一个测试 JavaScript代码的行为驱动开发框架。</p></blockquote>
<p><a href="http://en.wikipedia.org/wiki/Unit_testing" target="_blank">Unit testing</a>在每种语言中都是必要的，甚至在JavaScript中更为重要。如果你不了解测试，没问题，通过本篇使用<a href="http://en.wikipedia.org/wiki/Behavior_Driven_Development" target="_blank">BDD</a>，足够让你明白如何定义代码行为的预期及运行一些单元测试验证这些预期。如果一个预期成功，则测试通过，否则没有。在Jasmine中这些测试被称为 <em>specs</em>。</p>
<p><a href="http://pivotal.github.com/jasmine/download.html" target="_blank">Download Jasmine</a></p>
<p>不需要安装，只要把它放到lib目录即可。</p>

<h3>(*) PhantomJS</h3>
<blockquote><p>PhantomJS是一个具有JavaScript API但无GUI界面的WebKit。</p></blockquote>
<p>简单来说：它是一个没有GUI界面的浏览器。为什么需要它呢？因为我们打算自动化所有进程，我们不想在一个浏览器中运行Jasmine测试，而是从Ant。很不幸，因为Jasmine specs runner (the file that lists out and calls all the tests)是HTML-only (there's a number of alternatives, see below for explanation) 我们需要能够解析并且运行这个HTML文件。这就是我们需要<a href="http://www.phantomjs.org/" target="_blank">PhantomJS</a>。它解析并且渲染HTML文件，等待它完成执行然后读取结果最后传到Ant。</p>
<p>同样，我们通过PhantomJS运行JSHint并解析结果。</p>
<p>旁注: 也有可供使用的其它选择 譬如<a href="http://www.envjs.com/" target="_blank">envjs</a> and <a href="http://zombie.labnotes.org/" target="_blank">zombie</a>，但是因为我不喜欢envjs API也不想在这里使用<a href="http://nodejs.org/" target="_blank">Node.js</a>，我选择 PhantomJS。console spec runner and catch the results in <a href="http://www.mozilla.org/rhino/" target="_blank">Rhino</a>, but since I use the HTML spec runner anyway (for manual testing) this seemed the easiest option. Maybe it's not.</p>
<p><a href="http://code.google.com/p/phantomjs/downloads/list" target="_blank">Download PhantomJS</a></p>

<h2>Putting it all together</h2>
<p>让我们看看我们的example:</p>
<h3>The <code>src</code> files</h3>
<p>Inside our <code>src</code> directory we find 3 .js files: <code>build.example.js, Baz.js, Foo.js</code>. <code>buildexample.js</code> defines the main containing object (ie. &#8220;namespace&#8221;) in which 2 class definitions will be put: <code>Foo</code> and <code>Baz</code>. Both have a single property (<code>bar</code> and <code>qux</code> respectively) and a single method (<code>getBar</code> and <code>getQux</code> respectively).</p>
<p>我们想要实现下面的目标:</p>
<ul>
<li>对所有的.js文件进行代码检查(by JSHint)。</li>
<li>运行单元测试。</li>
<li>合并三个单个的.js文件到一个合并的 .js文件。</li>
<li>精简.js文件。</li>
<li>从.js文件里的内联JSDoc注释生成API文档。</li>
<li>在API文档和合并压缩的文件里使用一个版本号。</li>
</ul>
<p>如果任一步骤失败，则构建过程应该终止。</p>
<h3><code>build.xml</code></h3>
<p><code>build.xml</code>是最重要的部分。它是Ant构建配置文件，它告诉Ant做什么，什么时候做。我不想深入讲解构建文件的语法，因为已经有很多可供参考的相关资料。<a href="http://ant.apache.org/manual/index.html" target="_blank">官方文档</a>的示例更是清楚明了。</p>
<p>关于Ant有三个概念我们需要知道： </p>
<ol>
<li><strong>属性(properties)</strong>: 我们能够定义属性(properties)，它们就像常量，设置了一个属性后，它就不会改变。我们会使用属性对我们的构建过程进行配置。</li>
<li><strong>任务(tasks)</strong>: 任务(tasks)是预配置能够被Ant执行的动作。它们能被用于copy文件，运行程序等等。</li>
<li><strong>目标(targets)</strong>: 目标是编组动作或调用其它目标的容器。</li>
</ol>
<p>同样你能够绘出上述任务步骤转换到目标(targets)的大致轮廓，在我们的项目构建过程中，它们以一个队列的形式被调用。</p>
<h3>版本号</h3>
<p>我们要做的第一件事是为我们的构建定义一个版本号：</p>
<pre class="brush: xml; first-line: 4; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;version&quot;&gt;
        &lt;loadfile property=&quot;version.old&quot; srcFile=&quot;version.txt&quot; /&gt;
        &lt;input message=&quot;Current version number is ${version.old}. Please enter the new version number:&quot;
            defaultValue=&quot;${version.old}&quot; addproperty=&quot;version&quot;/&gt;
        &lt;echo file=&quot;version.txt&quot; message=&quot;${version}&quot; /&gt;
    &lt;/target&gt;
</pre>
<p>它从项目根目录里的 <code>version.txt</code>文件加载版本号值，然后提示我们是使用旧版本号或者是输入一个新版本号，该版本号会被连续写入<code>version.txt</code>文件。 这个版本号能够使用任何你想要的字符串： v0.1, 1.0.0-RC2, etc</p>
<p>让我们在终端测试一下它：<br />
<code>Creynders-Laptop:dev creynder$ ant version</code><br />
显示如下<br />
<code><br />
Buildfile: /Users/creynder/Dropbox/Work/Projects/CREY - automate JS builds/dev/build.xml<br />
version:<br />
[input] Current version number is 1.0.0. Please enter the new version number: [1.0.0]<br />
</code></p>

<h3>属性声明</h3>
<p>接下来是读取在<code>build.properties</code>文件中声明其它的属性。<br />
它也尝试读取<code>build.user.properties</code>文件。该文件用于重写<code>build.properties</code>文件中的一些属性设置，它被git忽略，因此不会意外提交到我们的仓库。</p>
<pre class="brush: xml; first-line: 12; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;properties&quot;&gt;
        &lt;tstamp&gt;
            &lt;format property=&quot;timestamp&quot; pattern=&quot;yyyyMMddHHmmss&quot;/&gt;
        &lt;/tstamp&gt;
        &lt;!-- allow user-specific overrides --&gt;
        &lt;property file=&quot;build.user.properties&quot;/&gt;
        &lt;property file=&quot;build.properties&quot;/&gt;
    &lt;/target&gt;
</pre>
<h3>创建构建目录</h3>
<p>然后创建<code>build</code>目录用于放置我们临时的工作文件。我们不想直接在目录放置任何东西 directory in which the temporary work files are to be placed. We won't be placing everything directly in the <code>bin</code> directory just to make sure that if the build fails, the <code>bin</code> directory won't be containing any &#8220;dirty&#8221;, faulty files.</p>
<pre class="brush: xml; first-line: 23; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;create_build&quot; depends=&quot;properties&quot;&gt;
        &lt;echo&gt;Creating build...&lt;/echo&gt;
        &lt;delete dir=&quot;${dir.build}&quot; /&gt;
        &lt;mkdir dir=&quot;${dir.build.current}&quot; /&gt;
        &lt;echo&gt;Finished.&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>Consolidation</h3>
<p>On to the consolidation of our .js source files:</p>
<pre class="brush: xml; first-line: 31; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;consolidate&quot; depends=&quot;properties, create_build&quot;&gt;
        &lt;echo&gt;Consolidating...&lt;/echo&gt;
        &lt;copy file=&quot;${dir.src}/${name.base.js}&quot; tofile=&quot;${file.consolidated.js}&quot;/&gt;
        &lt;replace file=&quot;${file.consolidated.js}&quot; token=&quot;%VERSION%&quot; value=&quot;${version}&quot;/&gt;
        &lt;replace file=&quot;${file.consolidated.js}&quot; token=&quot;%TIMESTAMP%&quot; value=&quot;${timestamp}&quot;/&gt;
        &lt;concat id=&quot;srcfiles&quot; destfile=&quot;${file.consolidated.js}&quot; append=&quot;true&quot;&gt;
            &lt;fileset dir=&quot;${dir.src}&quot; includes=&quot;**/*.js&quot; excludes=&quot;${name.base.js}&quot;/&gt;
        &lt;/concat&gt;
        &lt;pathconvert pathsep=&quot;;&quot; property=&quot;files&quot; refid=&quot;srcfiles&quot;/&gt;
        &lt;echo&gt;${files}&lt;/echo&gt;
        &lt;echo&gt;Finished.&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<p>First it copies the base src file, in this case <code>buildexample.js</code>, to the <code>build</code> directory and renames it to <code>buildexample-.js</code><br />
Then it appends all of the other src .js files into our consolidated file.<br />
Lastly it substitutes a few strings in our consolidated file: <code>%VERSION%</code> is replaced with the value from our <code>version</code> property and <code>%TIMESTAMP%</code> with the value of <code>timestamp</code>.</p>
<h3>JSHint</h3>
<p>Now we want to run JSHint on our consolidated code and make sure it adheres to proper syntax and formatting.</p>
<p>This is done through PhantomJS. It accepts as a first parameter a .js file, which tells phantom what to do. PhantomJS has a clean and easy-to-use <a href="http://code.google.com/p/phantomjs/wiki/Interface" target="_blank">API</a>.</p>
<p>I wrote this <code>phantom-jshint-runner.js</code> file which includes the contents of the <code>lib/jshint/jshint.js</code> file and subsequently passes the contents of our consolidated js file to the <code>JSHINT</code> function. In the example source it can be found in the <code>lib</code> directory.<br />
Please take a look at the file itself for an explanation of what happens exactly.</p>
<p>Then in our build.xml we need to call PhantomJS and pass it the required arguments:</p>
<pre class="brush: xml; first-line: 45; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;jshint&quot; depends=&quot;properties, consolidate&quot;&gt;
        &lt;echo&gt;Checking syntax...&lt;/echo&gt;
          &lt;exec executable=&quot;phantomjs&quot; dir=&quot;${basedir}&quot; failonerror=&quot;true&quot; resultproperty=&quot;specs.results&quot;&gt;
              &lt;arg line=&quot;'${file.jshint-runner.js}'&quot; /&gt;
              &lt;arg line=&quot;'${file.jshint.js}'&quot; /&gt;
              &lt;arg line=&quot;'${file.consolidated.js}'&quot; /&gt;
              &lt;arg line=&quot;${timeout.phantom}&quot; /&gt;
          &lt;/exec&gt;
        &lt;echo&gt;Finished&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>Jasmine</h3>
<p>Jasmine tests are run from a .html file, in the example this is <code>specs/index.html</code>. Again we'll be using PhantomJS to read and parse the html file and return the results to ant. I wrote <code>phantom-jasmine-runner.js</code> which can be found in the <code>lib</code> directory and was <a href="http://code.google.com/p/phantomjs/wiki/TestFrameworkIntegration" target="_blank">based on the default spec runner from the PhantomJS site</a>.</p>
<p>We'll be calling PhantomJS in the same fashion as for JSHint but with different arguments obviously.</p>
<pre class="brush: xml; first-line: 57; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;specs&quot; depends=&quot;properties&quot;&gt;
        &lt;echo&gt;Running specs...&lt;/echo&gt;
        &lt;exec executable=&quot;phantomjs&quot; dir=&quot;${basedir}&quot; failonerror=&quot;true&quot; resultproperty=&quot;specs.results&quot;&gt;
            &lt;arg line=&quot;'${file.jasmine-runner.js}'&quot; /&gt;
            &lt;arg line=&quot;'${file.specs-runner.html}'&quot; /&gt;
            &lt;arg line=&quot;${timeout.phantom}&quot; /&gt;
        &lt;/exec&gt;
        &lt;echo&gt;Finished.&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>Minifying</h3>
<p>We'll be using the YUI compressor to minify the contents of the consolidated file. <a href="https://github.com/yui/yuicompressor/blob/master/doc/README" target="_blank">Read the official documentation for a full explanation of YUI compressor usage</a>.</p>
<p>It's shipped as a .jar, so we'll be running java and pass it the path to the yui compressor .jar file.<br />
The command line execution looks like this:</p>
<p><code>java -jar yuicompressor-x.y.z.jar [options] [input file]</code></p>
<p>Which translates to the following ant build xml</p>
<pre class="brush: xml; first-line: 69; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;minify&quot; depends=&quot;properties,create_build, consolidate&quot;&gt;
        &lt;echo&gt;Minifying...&lt;/echo&gt;
        &lt;exec executable=&quot;java&quot; dir=&quot;${basedir}&quot; failonerror=&quot;true&quot;&gt;
            &lt;arg line=&quot;-jar '${file.yui_compressor.jar}'&quot; /&gt;
            &lt;arg line=&quot;--type js&quot; /&gt;
            &lt;arg line=&quot;-o '${file.minified.js}'&quot; /&gt;
            &lt;arg line=&quot;'${file.consolidated.js}'&quot; /&gt;
        &lt;/exec&gt;
        &lt;echo&gt;Finished&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>JSDoc toolkit</h3>
<p>First we'll recreate the docs directory. Then we'll be generating the docs files. JSDoc toolkit is run through the Mozilla Javascript Engine, Rhino, but fortunately JSDoc toolkit distributions include it out-of-the-box.</p>
<p>Commandline:</p>
<p><code>java -jar jsrun.jar app/run.js myscript.js -t=templates/jsdoc</code></p>
<p>Translated to:</p>
<pre class="brush: xml; first-line: 81; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;jsdocs&quot; depends=&quot;properties, consolidate&quot;&gt;
        &lt;echo&gt;recreating docs folder...&lt;/echo&gt;
        &lt;delete dir=&quot;${dir.docs}&quot;/&gt;
        &lt;mkdir dir=&quot;${dir.docs}&quot; /&gt;
        &lt;echo&gt;Generating...&lt;/echo&gt;
        &lt;exec executable=&quot;java&quot; dir=&quot;${basedir}&quot;&gt;
            &lt;arg line=&quot;-jar '${file.jsdoc_toolkit.jar}' '${dir.jsdoc_toolkit}/app/run.js'&quot; /&gt;
            &lt;!-- -d tells JSDoc toolkit where to output the documentation --&gt;
            &lt;arg line=&quot;-d='${dir.docs}'&quot; /&gt;
            &lt;!-- use the default template --&gt;
            &lt;arg line=&quot;-t='${dir.jsdoc_toolkit}/templates/jsdoc'&quot; /&gt;
            &lt;!-- Create an arg element for each file you want to include in the documentation --&gt;
            &lt;arg line=&quot;'${file.consolidated.js}'&quot; /&gt;
        &lt;/exec&gt;
        &lt;echo&gt;Finished&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>Clean up</h3>
<p>If the build process has succeeded we need to move the temporary build files from the <code>build</code> directory to the <code>bin</code>.</p>
<pre class="brush: xml; first-line: 100; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;finish&quot; depends=&quot;properties&quot;&gt;
        &lt;echo&gt;Finishing...&lt;/echo&gt;
        &lt;delete dir=&quot;${dir.bin}&quot; /&gt;
        &lt;mkdir dir=&quot;${dir.bin}&quot; /&gt;
        &lt;move file=&quot;${dir.build.current}&quot; tofile=&quot;${dir.bin}&quot;/&gt;
        &lt;echo&gt;Finished.&lt;/echo&gt;
    &lt;/target&gt;
</pre>
<h3>Group it together</h3>
<p>Finally we'll create a grouping target which calls all of the other targets in sequence:</p>
<pre class="brush: xml; first-line: 100; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;build&quot; depends=&quot;version, properties, create_build, consolidate, jshint, specs, minify, jsdocs, finish&quot;&gt;
    &lt;/target&gt;
</pre>
<h4>Now run it!</h4>