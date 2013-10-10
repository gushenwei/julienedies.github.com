
var $box = $('#box');
var $info = $('#info');
var $list = $('#list');

// ////////////////////////////////////////////////////

var locaMap = getLocation(opnRedBall);

// console.log(locaMap);

var item;
var blue;
var ri;
var details;
var details2;
var details3;
var loca;
var col;

for ( var t in q) {

	details = [];
	details2 = [];
	details3 = [];

	item = q[t];

	// console.log(item);

	// 数组转字符，再转为数组;
	item = $.trim(item.join(' ')).split(/\s+/);

	//console.log(item);

	$.each(item, function(index, val) {
		item[index] = val * 1;
		details[index] = locaMap[val * 1];
		details2[index] = colMap[val * 1][0];
		details3[index] = colMap[val * 1][1];
	});

	item.sort(function(a, b) {
		return a - b;
	});

	// console.log(item);

	$.each(item, function(index, val) {
		item[index] = val < 10 ? '0' + val : val;
	});

	// 顺序提取篮球
	// blue = blues.shift();
	// blues.push(blue);

	// 随机提取篮球
	ri = Math.round(Math.random() * (blues.length - 1));

	loca = countLocation(details);
	col = countCol(details2);
	details3.sort(function(a, b) {
		return a - b;
	});

	$(
			'<li><span>'
					+ item.join(' ')
					+ ' : '
					+ blues[ri]
					+ '</span> &nbsp;&nbsp; <input type="checkbox" name="op" />'
					+ '<div class="details">' + '<p class="ref">'
					+ colRef.join('  ') + ' &nbsp; &nbsp;  '
					+ colRef2.join('  ') + '<p>' + loca.join('  ')
					+ ' &nbsp; &nbsp;  ' + col.join(' ') + ' &nbsp; &nbsp;  '
					+ details3.join(' ') + '</div>' + '</li>').appendTo($list);

}

///////////////////////////////////////

$info.html(q.length);



