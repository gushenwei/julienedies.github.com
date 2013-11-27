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
////////////////////////////////////////////////////////////////////////////////////
//事件绑定

$(function(){
	
	$('body')
	
	//
	.delegate('#groupList li','click',function(){
		var $th = $(this);
		$th.siblings().removeClass('bg');
		$th.addClass('bg');
	})
	//
	.delegate('#groupList li .make','click',function(){
		var $th = $(this);
		
		var group = JSON.parse( $th.attr('data-group') );
		
		var q = combineWrap(classifyList,group);
		
		q = redBlueBallModel(q);
		
		$( template('boxTemp',{list:q, id: 'numSelList', embedTemp: 'numSelListItemTemp', info:q.length}) ).prependTo('body');		
	})
	//
	.delegate('#groupList li', 'mouseover', function() {
		var $th = $(this);
		var group = JSON.parse( $th.attr('data-group') );
		var unique = JSON.parse( $th.attr('data-unique') ); 
		var loca = JSON.parse( $th.attr('data-loca') ); 
		
		var list = [{
			group: group,
			unique: unique,
			loca: loca			
		}];
		
		$( template('refListItemTemp',{list: list, className: 'ls'}) ).appendTo('#refList');
	})

	.delegate('#groupList li', 'mouseout', function() {
		$('#refList li.ls:last').remove();
	})		
	.delegate('#groupListBox .showRef','click',function() {
		var refList = $('#refList');
		
		if( refList.length ){
			refList.toggle();
		}else{
			var q = groupRefListModel(window.groupRefList);
			
			$( template('listTemp', {list: q, id: 'refList', embedTemp:'refListItemTemp'}) ).appendTo('#groupListBox');			
		}
	})	
	
	/////////////////////////////////////////////////////////////////////
	//
	.delegate('#numSelListBox .toggle','click',function() {
		var box = $(this).closest('.box');
		//box.find('.locaCount, .colCount, .upMargin, .downMargin, .singleDigit, .locaCountRef, .colCountRef, .upMarginRef, .downMarginRef, .singleDigitRef').toggle();	
		box.find('p.details').toggle();
	})	
	//
	.delegate('#numSelListBox .showRef','click',function() {
		var numSelRefList = $('#numSelRefList');
		
		if( numSelRefList.length ){
			numSelRefList.toggle();
		}else{
			var q = numSelRefListModel();
			$( template('listTemp',{list:q, id:'numSelRefList',  embedTemp: 'numSelRefListItemTemp'}) ).appendTo('#numSelListBox');			
		}
	})		
	//
	.delegate('#numSelList li', 'mouseover', function() {
		if( !$('#numSelRefList:visible').length) return;
		var $th = $(this);
		var list= [];
		var col = $th.attr('data-col');
		var up = $th.attr('data-up');
		var down = $th.attr('data-down');
		var digit = $th.attr('data-digit');
		var upLoca = $th.attr('data-up-loca');
		var downLoca = $th.attr('data-down-loca');
		var digitLoca = $th.attr('data-digit-loca');		
		var obj = {
					col : JSON.parse(col),
					up : JSON.parse(up),
					upLoca : JSON.parse(upLoca),
					down : JSON.parse(down),
					downLoca : JSON.parse(downLoca),
					digit : JSON.parse(digit),
					digitLoca : JSON.parse(digitLoca)					
				};
		
		list.push(obj);
		
		$( template('numSelRefListItemTemp',{list: list, className: 'ls'}) ).appendTo('#numSelRefList');
	})
	//
	.delegate('#numSelList li', 'mouseout', function() {
		$('#numSelRefList li.ls:last').remove();
	})
	
	/////////////////////////////////////////////////////////////////////
	//选中
	.delegate('li[optional=1]', 'click', function() {
		var $th = $(this);
		var input = $th.find('input:checkbox');

		if (input.attr('checked')) {
			input.attr('checked', false);
		} else {
			input.attr('checked', true);
		}
	})
	//删除所选
	.delegate('.del','click',function() {
		var box = $(this).closest('.box');
		box.find('li input:checked').each(function() {
			$(this).closest('li').remove();
		});
		box.find('.info').html(box.find('li[optional=1]').length);
	})
	//反选
	.delegate('.reset','click',function() {
		var box = $(this).closest('.box');
		box.find('li input:checkbox').each(function() {
			var input = $(this);
			if (input.attr('checked')) {
				input.attr('checked', false);
			} else {
				input.attr('checked', true);
			}
		});
	})	
	//关闭box
	.delegate('.close','click',function() {
		var box = $(this).closest('.box');
		if(confirm('确定关闭窗口?!')){
			box.remove();
		}
	});	
	
	
});


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//init
















