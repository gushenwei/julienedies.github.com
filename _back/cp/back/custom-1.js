
var $box = $('#box');
var $info = $('#info');
var $list = $('#list');

// ////////////////////////////////////////////////////

var locaMap = getLocation(opnRedBall);

// console.log(locaMap);

var item;
var blue;
var ri;
var details1;
var details2;
var details3;
var details4;
var loca;
var col;

for ( var t in q) {

	details1 = [];
	details2 = [];
	details3 = [];
	details4 = [];

	item = q[t];

	// console.log(item);

	// 数组转字符，再转为数组;
	item = $.trim(item.join(' ')).split(/\s+/);

	//console.log(item);

	$.each(item, function(index, val) {
		val = val * 1;
		item[index] = val;
		details1[index] = locaMap[val];
		details2[index] = colMap[val][0];
		details3[index] = colMap[val][1];
		details4[index] = colMap[val][2];
	});

	item.sort(function(a, b) {
		return a - b;
	});

	// console.log(item);

	$.each(item, function(index, val) {
		item[index] = val < 10 ? '0' + val : val;
	});

	// 顺序提取篮球
	blue = blues.shift();
	blues.push(blue);

	// 随机提取篮球
	//blue = blues[Math.round(Math.random() * (blues.length - 1))];

	loca = countLocation(details1);
	col = countCol(details2);
	
	details3.sort(function(a, b) {
		return a - b;
	});
	details4.sort(function(a, b) {
		return a - b;
	});	
	
	//过滤
	//if(loca[1] != 1 ) continue;
	//if(filter()) continue;

	$(
			'<li><span>'
					+ item.join(' ')
					+ ' : '
					+ blue
					+ '</span> &nbsp;&nbsp; <input type="checkbox" name="op" />'
					+ '<div class="details">' 
					+ '<p class="ref">'
					+ colRef1.join('  ') 
					+ ' &nbsp; &nbsp;  '
					+ colRef2.join('  ') 
					+ ' &nbsp; &nbsp;  '
					+ colRef3.join('  ') 					
					+ '<p>' 
					+ loca.join('  ')
					+ ' &nbsp; &nbsp;  ' 
					+ col.join(' ') 
					+ ' &nbsp; &nbsp;  '
					+ details3.join(' ') 
					+ ' &nbsp; &nbsp;  '
					+ details4.join(' ')					
					+ '</div></li>').appendTo($list);

}

///////////////////////////////////////

$info.html($list.find('li').length);



