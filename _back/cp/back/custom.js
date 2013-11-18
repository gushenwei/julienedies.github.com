

///////////////////////////////////////////


window.filter = function(){};
	
window.q = [];

//
function cc(obj){
	if(typeof obj == 'object'){
		console.log(JSON.stringify(obj));
	}
	console.log(obj);
}

//
function getLocation (nu){
	var arr = [];
	var n;
	
	outerloop:
	for(var i = 1; i < 34; i++){
		for(var j in nu){
			n = nu[j]*1;
			if(i == n){
				arr[i] = '1';
				continue outerloop; 
			}
		}

		for ( var k in nu) {
			n = nu[k] * 1;
			if (i == n - 1 || i == n + 1) {
				arr[i] = '2';
				break;
			} else {
				arr[i] = '3';
			}
		}		
		
	}
	
	return arr;
}

//
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

//
function countCol(data) {
	var col1 = 0, col2 = 0, col3 = 0, col4 = 0, col5 = 0, col6 = 0;

	for ( var i in data) {
		var val = data[i];
		if (val == 1) {
			col1 += 1;
		} else if (val == 2) {
			col2 += 1;
		} else if (val == 3) {
			col3 += 1;
		} else if (val == 4) {
			col4 += 1;
		} else if (val == 5) {
			col5 += 1;
		} else {
			col6 += 1;
		} 
		
	}
	
	return [col1,col2,col3,col4,col5,col6];
}


//	
function combination(a, b, c, d, e, arr) {
	var v, f, r, w, s;
	var i, j, k, m, n;
	for (i in a) {
		v = [];
		v.push(a[i]);
		for (j in b) {
			f = v.slice();
			f = f.concat(b[j].split(' '));
			//alert(f);
			for (k in c) {
				r = f.slice();
				r.push(c[k]);
				for (m in d) {
					w = r.slice();
					w.push(d[m]);
					for (n in e) {
						s = w.slice();
						s.push(e[n]);
						s.sort(function(a, b) {
							return a * 1 - b * 1
						});
						arr.push(s);
					}
				}
			}
		}
	}

};

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
		console.log(args);
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


//对数字进行编组
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

//
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

//
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

//
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

//
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

//
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

/*
 * ***************************************************************************************
 * ***************************************************************************************
 * ***************************************************************************************
 * ***************************************************************************************
 */

$(function(){
	
	//
	$('body')
	.delegate('#groupList li :checkbox','change',function(){
		$(this).closest('li').remove();
		$('#groupListBoxBtn').text($('#groupList li').length);
	})	
	.delegate('#groupList li','click',function(){
		var $th = $(this);
		$th.siblings().removeClass('bg');
		$th.addClass('bg');
		var arg = $th.attr('data');
		$(window).trigger('group.change', [arg]);
	})
	
	.delegate('#groupListBoxBtn','click',function(){
		var $th = $(this);
		var mark = !$th.attr('data-mark');
		cc(mark);
		if(mark){
			$('#groupList').fadeOut('500');
			$th.attr('data-mark', 1);
		}else{
			 $('#groupList').fadeIn('500');
			 $th.removeAttr('data-mark');
		}
	});
	
	//
	$('#del').click(function() {
		$('input[name="op"]:checked').each(function() {
			$(this).closest('li').remove();
		});
		$('#info').html($('#list').find('li').length);
	});

	//
	$('#choice').toggle(function() {
		$('input[name="op"]').hide();
	}, function() {
		$('input[name="op"]').show();
	});

	//
	$('#show').toggle(function() {
		$('.details').hide();
	}, function() {
		$('.details').show();
	});

	//
	$('#list').delegate('li', 'click', function() {
		var $th = $(this);
		var input = $th.find('input[name="op"]');

		if (input.attr('checked')) {
			input.attr('checked', false);
		} else {
			input.attr('checked', true);
		}

	});

	//
	$('#list').delegate('li', 'mouseover', function() {
		var $th = $(this);
		$th.addClass('bg');
		//$th.find('.details').css('visibility', 'visible');
	});

	$('#list').delegate('li', 'mouseout', function() {
		var $th = $(this);
		$th.removeClass('bg');
		//$th.find('.details').css('visibility', 'hidden');
	});	
});

