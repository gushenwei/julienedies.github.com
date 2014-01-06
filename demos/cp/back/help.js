/**
 * 
 * 定义工具函数
 * 
 */

/*
 * 获取数组最后一个元素
 */
function getArrayLast(arr){
	if(!arr) return;
	var last = arr.slice(-1);
	return last[0];
}

/*
 * 判断数组元素是否全是偶数
 */
function isAlloddOrEven( arr ){
	var j = 0;
	
	for(var i in arr){
		j += arr[i] * 1 % 2;
	}
	
	return j==0 || j==6 ? true : false;
}

/*
 * 
 */
function getArrayUnique( arr ){
	var arr = arr.slice();
	return $.unique(arr);
} 

/*
 * 控制台打印输出
 */
function cc(obj,prefix){
	var prefix = prefix || '';
	if(typeof obj == 'object'){
		console.log(prefix +  ' = ' + JSON.stringify(obj) + ';');
	}else{
		console.log(prefix + ' : ' + obj);
	}
}
function cg(obj){
	cc(obj,'debug =>');
}
/*
 * 以参数为参照，取得1-60的数字的相对位置;
 * 返回一个映射数组;
 * 或重;(1)
 * 或连;(2)
 * 或延;(3)
 */
function getLocation_ (referArr,countArr){
	var countArr = countArr || window.colMap;
	var result = {};
	var item;
	
	outerloop:
	for(var i in countArr){
		for(var j in referArr){
			item = referArr[j];
			if(i == item){
				result[i] = 1;
				continue outerloop; 
			}
		}

		for ( var k in referArr) {
			item = referArr[k];
			if (i == item*1 - 1 || i == item*1 + 1) {
				result[i] = 2;
				break;
			} else {
				result[i] = 3;
			}
		}		
		
	}
	
	if(countArr === window.colMap){
		delete result[0];
	}
	
	return result;	
}

function getLocation (referArr,countArr){
	
	if(!countArr) return getLocation_(referArr);
	if(countArr.constructor === Object) return getLocation_(referArr,countArr);
	
	var result = {};
	var item;
	var val;
	
	outerloop:
	for(var i in countArr){
		
		val = countArr[i];
		
		for(var j in referArr){
			item = referArr[j];
			if(val == item){
				result[val] = 1;
				continue outerloop; 
			}
		}

		for ( var k in referArr) {
			item = referArr[k];
			if (val == item*1 - 1 || val == item*1 + 1) {
				result[val] = 2;
				break;
			} else {
				result[val] = 3;
			}
		}		
		
	}
	
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
function classify_(index){
	var arr = window.colMap;
	var length = arr.length;
	var result = {};
	var item;
	
	for(var i = 1; i< length; i++){
		item = arr[i];
		key = item[index]; 
		key = typeof key !== 'undefined' ? key : (i+'').slice(-1) != 0 ? (i+'').slice(-1) : '0';
		result[key] = result[key] || [];
		result[key].push(i);
	}
	
	return result;
}

function classify(arr){
	var result = {};
	var key;
	
	if(typeof arr === 'number' ){
		return classify_(arr);
	}
		
	for(var i in arr){
		key = arr[i];
		result[key] = result[key] || [];
		result[key].push(i*1);
	}
	
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

function locaCompare(arr1,arr2){
	if(!arr1) return;
	if(arr1.length<=0 || arr2.length<=0) return;
	
	var arr1 = $.unique( arr1.slice() );
	var arr2 = $.unique( arr2.slice() );
	
	var locaMap = getLocation(arr1,arr2);
	
	return countLocation(locaMap);
}

/*
 * 
 */
function groupWrap(groupList, patch) {
	var item;

	for ( var i in groupList) {
		item = groupList[i];
		if (patch && patch.length) {
			item = item.concat(patch);
		}
		
		item.sort(function(a, b) {
			return a - b;
		});

		groupList[i] = item;
	}

	//cc(groupList,'groupList');
	return groupList;
}

/*
 * 
 */
function combineWrap(classifyListMap, groupScheme) {
	var countList = count(groupScheme);

	var args = [];
	var number;
	var item;

	for ( var i in countList) {
		number = countList[i];
		item = group(classifyListMap[i], number);
		args.push(item);
	}

	//cc(args, 'combine args');

	return (combine.apply(null, args));
}


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//检测操作

function numSelFilter( numSelObj ){
	
	var details = numSelObj.details;
	var locaCount = details.loca;
	var colCount = details.col;
	var upMargin = details.up;
	var downMargin = details.down;
	var singleDigit = details.digit;
	
	var i
	var item;
	
	//col check
	if(JSON.stringify(colCount) === '[1,1,1,1,1,1]') return false;
	
	for(i in colCount){
		if( colCount[i] > 3) return false;
	}
	
	if( getArrayUnique(upMargin).length < 3 ) return false;
	if( getArrayUnique(downMargin).length < 4 ) return false;
	if( getArrayUnique(singleDigit).length < 4 ) return false;
	
	//upMargin check
	//if( isAlloddOrEven(upMargin) ) return false;	
	
	//downMargin check
	//if( isAlloddOrEven(downMargin) ) return false;
	
	//singDigit check
	//if( isAlloddOrEven(singleDigit) ) return false;
	
	//custom check
	if( filter(locaCount, colCount, upMargin, downMargin, singleDigit) === false ) return false;
	
	// if chexck ok
	return true;
}





////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//封装操作


//
function redBlueBallModel(arr) {
	var result = [];
	var item;
	var blue;
	var ri;
	var inLoca;
	var inCol;
	var upMargin;
	var downMargin;
	var singleDigit;
	var locaCount;
	var colCount;
	var obj;

	for ( var i in arr) {
		
		obj = {};
		inLoca = [];
		inCol = [];
		upMargin = [];
		downMargin = [];
		singleDigit = [];

		item = arr[i];

		// 数组转字符，再转为数组;
		item = $.trim(item.join(' ')).split(/\s+/);

		$.each(item, function(i, val) {

			singleDigit[i] = val.slice(val.length - 1) * 1;

			val = val * 1;
			item[i] = val;
			inLoca[i] = redBallLocaMap[val];
			inCol[i] = colMap[val][0];
			upMargin[i] = colMap[val][1];
			downMargin[i] = colMap[val][2];

		});

		item.sort(function(a, b) {
			return a - b;
		});

		$.each(item, function(index, val) {
			item[index] = val < 10 ? '0' + val : val;
		});

		locaCount = countLocation(inLoca);
		colCount = countCol(inCol);

		upMargin.sort(function(a, b) {
			return a - b;
		});
		downMargin.sort(function(a, b) {
			return a - b;
		});
		singleDigit.sort(function(a, b) {
			return a - b;
		});

		// 过滤
		if ( filter(locaCount, colCount, upMargin, downMargin, singleDigit) === false )
			continue;

		if(window.blueBallIsRandom){
			// 随机提取篮球
			blue = blues[Math.round(Math.random() * (blues.length - 1))];			
		}else{
			// 顺序提取篮球
			blue = blues.shift();
			blues.push(blue);
		}

		blue = blue ? ':' + blue : '';
		item.push(blue);
		
		var colCountRefLast = getArrayLast(window.colCountRef);
		
		var upMarginRefLast = getArrayLast(upMarginRef);
		
		var downMarginRefLast = getArrayLast(downMarginRef);
		
		var singleDigitRefLast = getArrayLast(singleDigitRef);
		
		var upLoca,downLoca,digitLoca;
		
		upLoca = locaCompare( upMarginRefLast, upMargin);
		downLoca = locaCompare( downMarginRefLast, downMargin);
		digitLoca = locaCompare( singleDigitRefLast, singleDigit);
		
		obj = {
				redBall: item,
				details:{
					loca: locaCount,
					colRef: colCountRefLast,
					col: colCount,
					upRef: upMarginRefLast,
					up: upMargin,
					downRef: downMarginRefLast,
					down: downMargin,
					digitRef: singleDigitRefLast,
					digit: singleDigit					
				},
				data:{
					loca: JSON.stringify(locaCount),
					col : JSON.stringify(colCount),
					up : JSON.stringify(upMargin),
					down : JSON.stringify(downMargin),
					digit : JSON.stringify(singleDigit),
					upLoca : JSON.stringify(upLoca),
					downLoca : JSON.stringify(downLoca),
					digitLoca : JSON.stringify(digitLoca)				
				}
				
		};	
		
		if( numSelFilter(obj) )
			result.push(obj);
				
	}
	
	return result;
}

//
function numSelRefListModel(){
	var colArr = colCountRef.slice();
	var upArr = upMarginRef.slice();
	var downArr = downMarginRef.slice();
	var digitArr = singleDigitRef.slice();
	
	var length = Math.min(colArr.length, upArr.length, downArr.length, digitArr.length, 10);
	var result = [];
	var prev = [];
	var obj;
	var col,up,down,digit;
	var upLoca,downLoca,digitLoca;
	
	for(var i = length; i > 0; i--){
		col = colArr.pop();
		up = upArr.pop();
		down = downArr.pop();
		digit = digitArr.pop();
		
		upLoca = locaCompare( getArrayLast(upArr), up);
		downLoca = locaCompare( getArrayLast(downArr), down);
		digitLoca = locaCompare( getArrayLast(digitArr), digit);
		
		obj = {
				col:col, 
				up: up, 
				upLoca: upLoca,
				down: down, 
				downLoca: downLoca,
				digit: digit,
				digitLoca: digitLoca
			  };
		
		result.unshift(obj);
	}
	
	//cc(result,'refList');
	return result;
	
}

//
function groupListModel(arr){
	var result = [];
	var length = arr.length;
	var prevRef = getArrayLast(window.groupRefList);
	var item;
	var loca;
	var unique;
	
	for(var i = 0; i < length; i++){
		
		item = arr[i];
		
		loca = locaCompare(prevRef,item);
		
		unique = $.unique( item.slice() );
		unique.sort(function(a,b){
			return a-b;
		});
		
		if( window.groupFilter(group,unique,loca) === false ) continue;
		
		result.push({
			group: item,
			data: {
				loca: JSON.stringify(loca),
				unique : JSON.stringify(unique),
				group: JSON.stringify(item)				
			},
			details:{
				group: item,
				loca: loca,
				unique : unique				
			}
		});		
	}
	
	return result;
}
//
function groupRefListModel(arr){
	var arr = arr.slice();
	var length = Math.min(arr.length, 18);
	var result = [];
	var current;
	var unique;
	var obj;
	var loca;
	
	for(var i = length; i > 0; i--){
		current = arr.pop();
		loca = locaCompare(getArrayLast(arr),current);
		
		unique = $.unique( current.slice() );
		unique.sort(function(a,b){
			return a - b;
		});
		
		obj = {
				group: current,
				unique : unique,
				loca: loca
		};
		
		result.unshift(obj);
		
	}
	
	//cc(result,'refList');
	return result;
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////
//回调函数

function groupCall(groupnum,patch,size) {
	
	var size = patch ? size - patch.length : size;

	var q = size ? group(groupnum, size) : false;

	q = q ? groupWrap(q,patch) : groupWrap([patch]);

	q = groupListModel(q);

	$(template('boxTemp', {
		list : q,
		info : q.length,
		id : 'groupList',
		embedTemp : ''
	})).appendTo('body');
}

