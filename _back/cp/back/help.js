/**
 * 自定义工具函数
 * 
 * 全局变量声明与设置
 */

/*
 * 获取数组最后一个元素
 */
function getArrayLast(arr){
	var last = arr.slice(-1);
	return last[0];
}

/*
 *控制台打印输出
 */
function cc(obj,prefix){
	var prefix = prefix || '';
	if(typeof obj == 'object'){
		console.log(prefix + JSON.stringify(obj));
	}else{
		console.log(prefix + obj);
	}
}

/*
 * 以参数为参照，取得1-60的数字的相对位置;
 * 返回一个映射数组;
 * 或重;(1)
 * 或连;(2)
 * 或延;(3)
 */
function getLocation (arr){
	var result = [];
	var n;
	
	outerloop:
	for(var i = 0; i < 60; i++){
		for(var j in arr){
			n = arr[j]*1;
			if(i == n){
				result[i] = 1;
				continue outerloop; 
			}
		}

		for ( var k in arr) {
			n = arr[k] * 1;
			if (i == n - 1 || i == n + 1) {
				result[i] = 2;
				break;
			} else {
				result[i] = 3;
			}
		}		
		
	}
	
	cc(result,JSON.stringify(arr)+'=>');
	return result;
}

/*
 * 
 */
function countLocation(data) {
	var loca1 = 0, loca2 = 0, loca3 = 0;

	for ( var i in data) {
		var val = data[i];
		if (val == 1) {
			loca1 += 1;
		} else if (val == 2) {
			loca2 += 1;
		} else {
			loca3 += 1;
		}
	}
	
	return [loca1,loca2,loca3];
}


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


/*
 * 对数字进行编组
 */
function group(nu, groupl, result){
	
	var result = result ? result : [];
	var nul = nu.length;
	var outloopl = nul - groupl;
	
	var nuc = nu.slice(0);
	
	var item = nuc.shift();
	item = item.constructor === Array ? item : [item];
	
	
	(function func(item,nuc){
		var itemc;
		var nucc = nuc.slice(0);
		var margin = groupl- item.length
		
		
		if( margin == 0){
			result.push(item);
			return;
		}
		if( margin == 1){
			for(var j in nuc){
				itemc = item.slice(0);
				itemc.push(nuc[j]);
				result.push(itemc);
			}			
		}		
		if( margin > 1){
			itemc = item.slice(0);
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

/*
 * 
 */
function format(arr){
	var result = [];
	var item;
	for(var i in arr){
		item = arr[i];
		item = item.constructor === Array ? item : [item];
		result.push(item.join(' '));
	}
	return result;
}	

/*
 * 
 */
function compare(arr1,arr2,nu1){
	var nu2 = 0;
	var arr3 = [];
	var val;
	for(var i in arr1){
		val = arr1[i]-arr2[i];
		arr3.push(val);
	}
	
	for(i in arr3){
		if(arr3[i] == 0) nu2+=1;
	}
	
	//console.log(nu2-nu1)
	
	if( nu2-nu1 > 0) return true;
	
}

/*
 * 
 */
function classify(index){
	var arr = window.colMap;
	var length = arr.length;
	var result = {};
	var item;
	
	for(var i = 1; i< length; i++){
		item = arr[i];
		key = item[index];
		result[key] = result[key] || [];
		result[key].push(i);
	}
	
	//console.log(JSON.stringify(result));
	
	return result;
}

/*
 * 
 */
function count(arr){
	var length = arr.length;
	var result = {};
	var item;
	
	for(var i = 0; i< length; i++){
		item = arr[i];
		result[item] = result[item] ? result[item]+1 : 1;
	}	
	
	//console.log(JSON.stringify(result));
	
	return result;	
}

/*
 * 
 */
function countCol(arr) {
	var length = arr.length;
	var result = [];
	var obj = count(arr);
	
	for(var i = 0; i < length; i++){
		result[i] = 0;
	}
	
	for(var j in obj){
		result[j*1-1] = obj[j];
	}
	
	return result;
}

////////////////////////////////////////////////////////////////////////////////////
//全局变量设置
////////////////////////////////////////////////////////////////////////////////////
window.filter = function(){};

window.q = [];


window.classifyList = classify(0);
cc(classifyList);

window.locaMap = getLocation(opnRedBall);
window.downMarginLocaMap = getLocation(getArrayLast(downMarginRef));




