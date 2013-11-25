/**
 * 
 * 应用初始化
 * 
 * 事件绑定
 * 
 * 数据与视图绑定
 * 
 */





	

////////////////////////////////////////////////////////////////////////////////////
//事件绑定
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
	.delegate('#choice','click',function() {
		$('input[name="op"]').toggle();
	})

	//
	.delegate('#show','click',function() {
		$('.locaCount, .colCount, .upMargin, .downMargin, .singleDigit, .locaCountRef, .colCountRef, .upMarginRef, .downMarginRef, .singleDigitRef').toggle();
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

$(window).bind('group.change', groupChangeCall);


////////////////////////////////////////////////////////////////////////////////////
//init
////////////////////////////////////////////////////////////////////////////////////


window.classifyList = window[window.classifyBy[classifyByIndex]];


groupWrap(groupList);


$(template('groupListTemp',{list:groupList})).appendTo($('body'));





