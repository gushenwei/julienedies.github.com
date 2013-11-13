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
var details3;
var details4;
var details5;
var loca;
var col;

for ( var t in q) {

	details1 = [];
	details2 = [];
	details3 = [];
	details4 = [];
	details5 = [];

	item = q[t];

	// console.log(item);

	// 数组转字符，再转为数组;
	item = $.trim(item.join(' ')).split(/\s+/);

	//console.log(item);

	$.each(item, function(i, val) {
		
		details5[i] = val.slice(val.length-1)*1;
		
		val = val * 1;
		item[i] = val;
		details1[i] = locaMap[val];
		details2[i] = colMap[val][0];
		details3[i] = colMap[val][1];
		details4[i] = colMap[val][2];
		
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
	
	details3.sort(function(a, b) {
		return a - b;
	});
	details4.sort(function(a, b) {
		return a - b;
	});	
	details5.sort(function(a, b) {
		return a - b;
	});	
	
	//过滤
	//if(loca[1] == 2) continue;
	//if(loca[1] != 1) continue;
	//if(filter()) continue;
	
	
	
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
					+ colRef1[colRef1.length-1].join('  ') 
					+ ' <br /> '
					+ col.join(' ') 
					+ '</p>'
					
					+ '<p class="ref ref2">'
					+ colRef2[colRef2.length-1].join('  ') 
					+ ' <br />  '
					+ details3.join(' ')
					+ '</p>'
					
					+ '<p class="ref ref3">'					
					+ colRef3[colRef3.length-1].join('  ') 
					+ ' <br /> '
					+ details4.join(' ')
					+ '</p>' 
					
					+ '<p class="ref ref4">'
					+ colRef4[colRef4.length-1].join('  ') 
					+ ' <br />  '					
					+ details5.join('  ')
					+ '</p>'
					
					/*+ loca.join('  ')
					+ ' &nbsp; &nbsp;  ' 
					+ col.join(' ') 
					+ ' &nbsp; &nbsp;  '
					+ details3.join(' ') 
					+ ' &nbsp; &nbsp;  '
					+ details4.join(' ')	*/				
					+ '</div></li>').appendTo($list);

}

///////////////////////////////////////

$info.html($list.find('li').length);



