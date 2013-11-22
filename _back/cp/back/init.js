//		
function groupListWrap(groupList) {
	var patch = window.patch;
	var item;

	for ( var k in groupList) {
		item = groupList[k];
		if (patch && patch.length) {
			item = item.concat(patch);
		}
		
		item.sort(function(a, b) {
			return a - b;
		});

		groupList[k] = item;
	}

	cc(groupList);
	return groupList;
}

//
function groupChangeCall(e, groupItem) {

	$('#list')
			.html(
					'<span style="position:fixed;top:40%;left:50%;margin:25px auto;display:inline-block;text-align:center;" name="_loading_"><svg width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 150 150" to="360 150 150" begin="0s" dur="1s" fill="freeze" repeatCount="indefinite" /></path></svg></span>');

	if (typeof groupItem == 'string') {
		groupItem = groupItem.split(' ');
	}
	var countList = count(groupItem);

	var args = [];

	for ( var i in countList) {
		item = countList[i];
		item = group(classifyList[i], item);
		args.push(item);
	}

	// cc(args);

	q = (combine.apply(null, args));

	setTimeout(function() {
		init(q);
	}, 500);

}

//
function init(q) {
	//
	var $box = $('#box');
	var $info = $('#info');
	var $list = $('#list');

	// ////////////////////////////////////////////////////

	$list.empty();

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

		// console.log(item);

		$.each(item, function(i, val) {

			singleDigit[i] = val.slice(val.length - 1) * 1;

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

		// 过滤
		// if(loca[1] == 2) continue;
		// if(loca[1] != 1) continue;
		if (filter(loca, col, upMargin, downMargin, singleDigit))
			continue;

		// 顺序提取篮球
		blue = blues.shift();
		blues.push(blue);

		// 随机提取篮球
		// blue = blues[Math.round(Math.random() * (blues.length - 1))];

		$(
				'<li><p class="ref ref_"><span>'
						+ item.join(' ')
						+ (blue ? ' : ' + blue : ' ')
						+ ' '
						+ '</span> &nbsp;&nbsp; <input type="checkbox" name="op" /></p>'
						+ '<div class="details">'

						+ '<p class="ref ref0">' + loca.join('  ') + '</p>'

						+ '<p class="ref ref1">'
						+ colNumberRef[colNumberRef.length - 1].join('  ')
						+ ' <br /> ' + col.join(' ') + '</p>'

						+ '<p class="ref ref2">'
						+ upMarginRef[upMarginRef.length - 1].join('  ')
						+ ' <br />  ' + upMargin.join(' ') + '</p>'

						+ '<p class="ref ref3">'
						+ downMarginRef[downMarginRef.length - 1].join('  ')
						+ ' <br /> ' + downMargin.join(' ') + '</p>'

						+ '<p class="ref ref4">'
						+ singleDigitRef[singleDigitRef.length - 1].join('  ')
						+ ' <br />  ' + singleDigit.join('  ') + '</p>'

						+ '</div></li>').appendTo($list);

	}

	// /////////////////////////////////////

	$info.html($list.find('li').length);
}



////////////////////////////////////////////////////////////////////////////////////
//事件委托
////////////////////////////////////////////////////////////////////////////////////
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
	})
	
	//
	.delegate('#del','click',function() {
		$('input[name="op"]:checked').each(function() {
			$(this).closest('li').remove();
		});
		$('#info').html($('#list').find('li').length);
	})

	//
	.delegate('#choice','toggle',function() {
		$('input[name="op"]').hide();
	}, function() {
		$('input[name="op"]').show();
	})

	//
	.delegate('#show','toggle',function() {
		$('.details').hide();
	}, function() {
		$('.details').show();
	})

	//
	.delegate('#list li', 'click', function() {
		var $th = $(this);
		var input = $th.find('input[name="op"]');

		if (input.attr('checked')) {
			input.attr('checked', false);
		} else {
			input.attr('checked', true);
		}

	})

	//
	.delegate('#list li', 'mouseover', function() {
		var $th = $(this);
		$th.addClass('bg');
		//$th.find('.details').css('visibility', 'visible');
	})

	.delegate('#list li', 'mouseout', function() {
		var $th = $(this);
		$th.removeClass('bg');
		//$th.find('.details').css('visibility', 'hidden');
	});	
	
});

////////////////////////////////////////////////////////////////////////////////////
//init
////////////////////////////////////////////////////////////////////////////////////

$(window).bind('group.change', groupChangeCall);


groupListWrap(groupList);



$(template('groupListTemp',{list:groupList})).appendTo($('body'));





