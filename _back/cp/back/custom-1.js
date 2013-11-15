//
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
var upMargin;
var downMargin;
var singleDigit;
var loca;
var col;

for ( var t in q) {

	details1 = [];
	details2 = [];
	upMargin = [];
	downMargin = [];
	singleDigit = [];

	item = q[t];

	// console.log(item);

	// 数组转字符，再转为数组;
	item = $.trim(item.join(' ')).split(/\s+/);

	//console.log(item);

	$.each(item, function(i, val) {
		
		singleDigit[i] = val.slice(val.length-1)*1;
		
		val = val * 1;
		item[i] = val;
		details1[i] = locaMap[val];
		details2[i] = colMap[val][0];
		upMargin[i] = colMap[val][1];
		downMargin[i] = colMap[val][2];
		
	});

	item.sort(function(a, b) {
		return a - b;
	});

	// console.log(item);

	$.each(item, function(index, val) {
		item[index] = val < 10 ? '0' + val : val;
	});


	loca = countLocation(details1);
	col = countCol(details2);
	
	upMargin.sort(function(a, b) {
		return a - b;
	});
	downMargin.sort(function(a, b) {
		return a - b;
	});	
	singleDigit.sort(function(a, b) {
		return a - b;
	});	
	
	//过滤
	//if(loca[1] == 2) continue;
	//if(loca[1] != 1) continue;
	if(filter(loca,col,upMargin,downMargin,singleDigit)) continue;
	
	
	
	// 顺序提取篮球
	blue = blues.shift();
	blues.push(blue);

	// 随机提取篮球
	//blue = blues[Math.round(Math.random() * (blues.length - 1))];	
	

	$(
			'<li><p class="ref ref_"><span>'
					+ item.join(' ')
					+ (blue ? ' : ' + blue : ' ')
					+ ' '
					+ '</span> &nbsp;&nbsp; <input type="checkbox" name="op" /></p>'
					+ '<div class="details">'
					
					+ '<p class="ref ref0">'
					+ loca.join('  ')
					+ '</p>'
	
					+ '<p class="ref ref1">'
					+ colNumberRef[colNumberRef.length-1].join('  ') 
					+ ' <br /> '
					+ col.join(' ') 
					+ '</p>'
					
					+ '<p class="ref ref2">'
					+ upMarginRef[upMarginRef.length-1].join('  ') 
					+ ' <br />  '
					+ upMargin.join(' ')
					+ '</p>'
					
					+ '<p class="ref ref3">'					
					+ downMarginRef[downMarginRef.length-1].join('  ') 
					+ ' <br /> '
					+ downMargin.join(' ')
					+ '</p>' 
					
					+ '<p class="ref ref4">'
					+ singleDigitRef[singleDigitRef.length-1].join('  ') 
					+ ' <br />  '					
					+ singleDigit.join('  ')
					+ '</p>'
					
					+ '</div></li>').appendTo($list);

}

///////////////////////////////////////

$info.html($list.find('li').length);



