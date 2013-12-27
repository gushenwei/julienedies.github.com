---
layout: post
title: "实现一个数字编组函数"
description: ""
category: 
tags: [code,js]
brushs: [JScript]
---
{% include JB/setup %}
<p>之前有同学在网上提问，希望得到一个函数，用于完成数字编组。我主要是利用js本身的一些功能实现了它。跟平常的思路不一样，所以值得记录一下。</p>
<p>该函数接受两个参数，第一个参数 是一个数组，里面包含需要组合的数字，第二个参数是一个数字，说明按几个数字进行组合。返回一个数组，里面是所有排列组合。</p>

<pre>
举个例子：
function group(a, b){
/*
具体代码
*/
};
希望的效果：
var r = group([1,2,3,4],3);
JSON.stringify(r) == "[[1,2,3],[1,2,4],[1,3,4],[2,3,4]]";
</pre>

<p>原提问：<a href="http://q.cnblogs.com/q/57102/">http://q.cnblogs.com/q/57102/</a></p>

<pre class="brush: jscript;">
/*
 * 对数字进行编组
 */
function group(nu, groupl, result){
	
	var result = result ? result : [];
	var nul = nu.length;
	var outloopl = nul - groupl;
	
	var nuc = nu.slice();
	
	var item = nuc.shift();
	item = item.constructor === Array ? item : [item];
	
	
	(function func(item,nuc){
		var itemc;
		var nucc = nuc.slice();
		var margin = groupl- item.length
		
		
		if( margin == 0){
			result.push(item);
			return;
		}
		if( margin == 1){
			for(var j in nuc){
				itemc = item.slice();
				itemc.push(nuc[j]);
				result.push(itemc);
			}			
		}		
		if( margin > 1){
			itemc = item.slice();
			itemc.push(nucc.shift());
			func(itemc,nucc);

			if(item.length + nucc.length >= groupl){
				func(item,nucc);
			}
			
		}
		
	})(item,nuc);
	

	if(nuc.length >= groupl){
		return group(nuc, groupl, result);
	}else{
		return result;
	}
}


//调用
var r = group([1,2,3,4],3);
JSON.stringify(r) == "[[1,2,3],[1,2,4],[1,3,4],[2,3,4]]";
</pre>