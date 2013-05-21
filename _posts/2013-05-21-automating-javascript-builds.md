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

<p>All tools that don&#8217;t need to be explicitly installed are included with the code.<br />
This was done for example purposes only. I have a central location where I drop all jars/js files/whatever and link to those locations from the ant build file, but I wanted to save you the trouble of having to download all the various bits and pieces to get you up and running ASAP.</p>
<p>In the below tools list, <strong>all applications that require installation are prefixed with an asterisk (*)</strong>, so even if you just downloaded the example source, <strong>you&#8217;ll still need to download and install those packages</strong>.</p>
<h3>Directory structure</h3>
<ul>
<li>The <code>bin</code> directory will be the destination directory into which our final .js files will be placed</li>
<li>the <code>docs</code> directory is the destination point for our API documentation</li>
<li><code>lib</code> contains all 3-rd party tools and files needed for building</li>
<li><code>specs</code> contains our unit tests</li>
<li><code>src</code> contains the source .js files</li>
</ul>
<h2>Tools</h2>
<p>We&#8217;ll be using a number of tools/applications/libs to achieve all of this, for each of them there are already a ton of resources on how to install them, so I wont go into detail on that.</p>
<h3>(*) Apache Ant</h3>
<blockquote><p>Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other.</p></blockquote>
<p>We&#8217;ll be using <a href="http://ant.apache.org/" target="_blank">Apache Ant</a> to automate the process and list out what needs to be done, how and when. Details will follow</p>
<p><a href="http://ant.apache.org/bindownload.cgi" target="_blank">Download Apache Ant</a></p>
<h3>JSHint</h3>
<p><a href="http://www.jshint.com/" target="_blank">JSHint</a> is a code quality tool for JavaScript based on <a href="http://www.jslint.com/" target="_blank">JSLint</a>. I prefer JSHint for one simple reason: JSLint enforces you to move all your var declarations to the top of your functions. <a href="http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/" target="_blank">That&#8217;s just silly</a>.</p>
<blockquote><p>JSHint is a community-driven tool to detect errors and potential problems in JavaScript code and to enforce your team&#8217;s coding conventions.</p></blockquote>
<p>It&#8217;s got a webinterface for validation, but we&#8217;ll be using the JSHint lib directly to validate our code locally and during the build process.</p>
<p><a href="https://github.com/jshint/jshint/archives/master" target="_blank">Download JSHint</a></p>
<p>The only thing we&#8217;ll be needing is the <code>jshint.js</code> file, so you can <a href="https://raw.github.com/jshint/jshint/master/jshint.js" target="_blank">download it directly</a> as well if you want.</p>
<p>No installation required, we&#8217;ll just drop it into the lib directory in its entirety.</p>
<h3>JSDoc Toolkit</h3>
<blockquote><p>JsDoc Toolkit is an application, written in JavaScript, for automatically generating template-formatted, multi-page HTML (or XML, JSON, or any other text-based) documentation from commented JavaScript source code.</p></blockquote>
<p><a href="http://code.google.com/p/jsdoc-toolkit/downloads/list" target="_blank">Download JSDoc Toolkit</a></p>
<p>No installation required, we&#8217;ll just drop it into the lib directory in its entirety.</p>
<h3>YUI compressor</h3>
<blockquote><p>The goal of JavaScript and CSS minification is always to preserve the operational qualities of the code while reducing its overall byte footprint. [...] The YUI Compressor is JavaScript minifier designed to be 100% safe and yield a higher compression ratio than most other tools.</p></blockquote>
<p><a href="http://yuilibrary.com/download/yuicompressor/" target="_blank">Download YUI compressor</a></p>
<p>No installation required, we&#8217;ll just drop it into the lib directory in its entirety.</p>
<h3>Jasmine</h3>
<blockquote><p>Jasmine is a behavior-driven development framework for testing your JavaScript code.</p></blockquote>
<p><a href="http://en.wikipedia.org/wiki/Unit_testing" target="_blank">Unit testing</a> is essential in every language, but in JavaScript even more so, IMO. If you&#8217;re not into testing, no problem, it suffices to know for this example that with <a href="http://en.wikipedia.org/wiki/Behavior_Driven_Development" target="_blank">BDD</a> you define how your code is expected to behave and run a number of tests to verify those expectations. A test <em>passes</em> if the expectation is fulfilled and <em>fails</em> if not. In Jasmine these tests are called <em>specs</em>.</p>
<p><a href="http://pivotal.github.com/jasmine/download.html" target="_blank">Download Jasmine</a></p>
<p>No installation required, we&#8217;ll just drop it into the lib directory in its entirety.</p>
<h3>(*) PhantomJS</h3>
<blockquote><p>PhantomJS is a headless WebKit with JavaScript API</p></blockquote>
<p>Simply put: it&#8217;s a browser without a GUI client. Why&#8217;s this necessary? Since we&#8217;re automating this whole process we don&#8217;t want to be running our Jasmine tests in a browser, but from Ant. Unfortunately since the Jasmine specs runner (the file that lists out and calls all the tests) is HTML-only (there&#8217;s a number of alternatives, see below for explanation) we need to be able to parse and run that HTML file. That&#8217;s where <a href="http://www.phantomjs.org/" target="_blank">PhantomJS</a> comes in. It parses and renders the HTML file, waits for it to finish execution and then reads the results and passes them on to Ant.</p>
<p>Also, we&#8217;ll be using PhantomJS for running JSHint and parse it results.</p>
<p>Sidenote: there are alternatives like <a href="http://www.envjs.com/" target="_blank">envjs</a> and <a href="http://zombie.labnotes.org/" target="_blank">zombie</a>, but since I didn&#8217;t like the envjs API and didn&#8217;t want to use <a href="http://nodejs.org/" target="_blank">Node.js</a> for this, I chose PhantomJS. Another alternative was to run a console spec runner and catch the results in <a href="http://www.mozilla.org/rhino/" target="_blank">Rhino</a>, but since I use the HTML spec runner anyway (for manual testing) this seemed the easiest option. Maybe it&#8217;s not.</p>
<p><a href="http://code.google.com/p/phantomjs/downloads/list" target="_blank">Download PhantomJS</a></p>
<h2>Putting it all together</h2>
<p>Let&#8217;s take a look at our example:</p>
<h3>The <code>src</code> files</h3>
<p>Inside our <code>src</code> directory we find 3 .js files: <code>build.example.js, Baz.js, Foo.js</code>. <code>buildexample.js</code> defines the main containing object (ie. &#8220;namespace&#8221;) in which 2 class definitions will be put: <code>Foo</code> and <code>Baz</code>. Both have a single property (<code>bar</code> and <code>qux</code> respectively) and a single method (<code>getBar</code> and <code>getQux</code> respectively).</p>
<p>What we want to achieve is the following:</p>
<ul>
<li>run a QA tool (JSHint) on all of the code in the .js files</li>
<li>run all unit tests</li>
<li>consolidate the 3 seperate .js files into one single .js file</li>
<li>minify that single file into a separate minified .js file</li>
<li>generate API documentation from the inline JSDoc comments in the .js files</li>
<li>use a version number in both the API documentation and in the file names of the consolidated and minified files</li>
</ul>
<p>The build process should be aborted if any of these steps fail.</p>
<h3><code>build.xml</code></h3>
<p>The heart of it all is <code>build.xml</code>. It&#8217;s the Ant build file, that tells Ant what to do and when. I won&#8217;t be delving too deep into Ant build file syntax since, again, there are tons of resources out there. <a href="http://ant.apache.org/manual/index.html" target="_blank">The official documentation</a> for instance is pretty extensive and clear.</p>
<p>In Ant there are 3 concepts we need to know to proceed:</p>
<ol>
<li><strong>Properties</strong>: we can define properties, they&#8217;re like constants, once a property is set it&#8217;s immutable. We&#8217;ll be using properties to make our build process configurable.</li>
<li><strong>Tasks</strong>: tasks are preconfigured actions that can be executed by Ant. They can be used to copy files, run an executable etc.</li>
<li><strong>Targets</strong>: a target is a named container that groups actions or calls other targets.</li>
</ol>
<p>As you can guess the outlined above steps will translate into targets, that will be called in a certain sequence during our build process.</p>
<h3>Version number</h3>
<p>The first thing we&#8217;ll be doing is making sure a version number is defined for our build:</p>
<pre class="brush: xml; first-line: 4; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;version&quot;&gt;
        &lt;loadfile property=&quot;version.old&quot; srcFile=&quot;version.txt&quot; /&gt;
        &lt;input message=&quot;Current version number is ${version.old}. Please enter the new version number:&quot;
            defaultValue=&quot;${version.old}&quot; addproperty=&quot;version&quot;/&gt;
        &lt;echo file=&quot;version.txt&quot; message=&quot;${version}&quot; /&gt;
    &lt;/target&gt;
</pre>
<p>It loads the value from <code>version.txt</code> file in the project root directory, then prompts us to either use that version number again or to enter a new one, which consecutively is written into the .txt file again. This version number can be any string value you want: v0.1, 1.0.0-RC2, etc</p>
<p>let&#8217;s test it out, in terminal:<br />
<code>Creynders-Laptop:dev creynder$ ant version</code><br />
will present us with<br />
<code><br />
Buildfile: /Users/creynder/Dropbox/Work/Projects/CREY - automate JS builds/dev/build.xml<br />
version:<br />
[input] Current version number is 1.0.0. Please enter the new version number: [1.0.0]<br />
</code></p>
<h3>Property declaration</h3>
<p>Only then the other properties will be declared and read from the <code>build.properties</code> file.<br />
It also tries to read a <code>build.user.properties</code> file, which can be used to override some of the settings in <code>build.properties</code>. This user specific configuration file is also ignored by git, so it doesn&#8217;t get accidentally committed to our repo.</p>
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
<h3>Create build directory</h3>
<p>Next we&#8217;ll be creating our <code>build</code> directory in which the temporary work files are to be placed. We won&#8217;t be placing everything directly in the <code>bin</code> directory just to make sure that if the build fails, the <code>bin</code> directory won&#8217;t be containing any &#8220;dirty&#8221;, faulty files.</p>
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
<p>Jasmine tests are run from a .html file, in the example this is <code>specs/index.html</code>. Again we&#8217;ll be using PhantomJS to read and parse the html file and return the results to ant. I wrote <code>phantom-jasmine-runner.js</code> which can be found in the <code>lib</code> directory and was <a href="http://code.google.com/p/phantomjs/wiki/TestFrameworkIntegration" target="_blank">based on the default spec runner from the PhantomJS site</a>.</p>
<p>We&#8217;ll be calling PhantomJS in the same fashion as for JSHint but with different arguments obviously.</p>
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
<p>We&#8217;ll be using the YUI compressor to minify the contents of the consolidated file. <a href="https://github.com/yui/yuicompressor/blob/master/doc/README" target="_blank">Read the official documentation for a full explanation of YUI compressor usage</a>.</p>
<p>It&#8217;s shipped as a .jar, so we&#8217;ll be running java and pass it the path to the yui compressor .jar file.<br />
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
<p>First we&#8217;ll recreate the docs directory. Then we&#8217;ll be generating the docs files. JSDoc toolkit is run through the Mozilla Javascript Engine, Rhino, but fortunately JSDoc toolkit distributions include it out-of-the-box.</p>
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
<p>Finally we&#8217;ll create a grouping target which calls all of the other targets in sequence:</p>
<pre class="brush: xml; first-line: 100; title: ; wrap-lines: false; notranslate" title="">
    &lt;target name=&quot;build&quot; depends=&quot;version, properties, create_build, consolidate, jshint, specs, minify, jsdocs, finish&quot;&gt;
    &lt;/target&gt;
</pre>
<h4>Now run it!</h4>