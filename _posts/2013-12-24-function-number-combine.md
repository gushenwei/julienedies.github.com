---
layout: post
title: "实现一个数字组合函数"
description: ""
category: 
tags: [code,js]
brushs: [jscript]
---
{% include JB/setup %}

<p></p>

<pre>
举个例子：
function combine(a, b){
/*
具体代码
*/
};
希望的效果：
var r = combine([1,2,3],[0],[9]);
JSON.stringify(r) == "[[1,0,9],[2,0,9],[3,0,9]]";
</pre>


<pre class="brush: jscript;">

/*
 * 
 */
function combine(){
	var  args = Array.prototype.slice.call(arguments, 0);
	
	var arr1;
	var arr2;
	var arr3;	
	
	function func(arr1,arr2){
		var arr3 = [];
		var item1,item2,item1c;
		
		if(arr1.length == 0) return arr2;
		if(arr2.length == 0) return arr1;
		
		for(var i in arr1){
			item1 = arr1[i];
			item1 = item1.constructor === Array ? item1 : [item1];
			
			for(var j in arr2){
				item1c = item1.slice();
				item2 = arr2[j];
				item1c = item1c.concat(item2);
				arr3.push(item1c);
			}
			
		}
		
		return arr3;
		
	}
	
	if(args.length == 1) {
		//console.log(args);
		return args[0];
	}
	if(args.length > 1){
		arr1 = args.shift();
		arr2 = args.shift();
		arr3 = func(arr1,arr2);
		args.unshift(arr3);
		return combine.apply(null,args);
	}
}

//调用
var r = combine([1,2,3],[0],[9]);
JSON.stringify(r) == "[[1,0,9],[2,0,9],[3,0,9]]";
</pre>