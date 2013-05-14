/**
 * 
 * @todo          jQuery插件，使selec元素可编辑及添加自动提示功能
 * @param         string  selector   jQuery选择符，需要添加功能的 select元素
 * @param         int     item_length  可选，添加功能的select元素需要达到的选项数
 * @return  
 * @author        zhangxiaojian [haizai1979315@gmail.com]
 * @create   	  2011.9.12
 * @modify        2011.9.23
 */
(function($) {
	var S = [],v = null,x = 16, arrow_w = 20, arrow_h = 20, show_items = 10, ltem_h = 24;
	var position = function(select_id,input_id,list_id){
		// 取得select元素位置，尺寸样式
		var $select = $('#'+ select_id),$input = $('#'+ input_id),$list = $('#'+ list_id);
		var w = $select.outerWidth(), h = $select.outerHeight(), offset = $select.offset();
		$input.css({
			'top' : offset.top + 'px',
			'left' : offset.left + 'px',
			'width' : w - 6 - arrow_w + 'px',
			'height' : h - 2 + 'px'				
		});
		$list.css({
			'width' : ($list.outerWidth() < $input.outerWidth() ) ? $input.outerWidth() + 'px' : $list.outerWidth() + x + 'px',				
			'top' : offset.top + h + 2 + 'px',
			'left' : offset.left + 'px'
		});
	}	
	$.S_input = function(selector, item_length) {
		// 取得需要增加文本编辑功能的select元素
		var item_len = item_length ? item_length : 0;
		var $select = $(selector);
		var $options = $select.find('option');
		// 根据option数量，判断是否需要添加编辑功能
		var opt_len = $options.length;
		if (opt_len <= item_len)
			return;

		// 取得select元素位置，尺寸样式
		var w = $select.outerWidth(), h = $select.outerHeight(), offset = $select.offset();		
		$select.css({
			'visibility' : 'hidden'
		});

		// 定义下拉箭头宽高,显示项数量，项高，select选项数组
		var items = [];

		// 读取select选项数组
		$options.each(function(index) {
			if ($(this).val()) {
				items.push([ index, $(this).text(), $(this).val() ]);
			}
		});

		// 用于选项过滤
		function filter(sea) {
			var opt = [];
			for ( var i = 0; i < items.length; i++) {
				if (items[i][1].indexOf(sea) == 0) {
					opt.push(items[i]);
				}
			}
			return opt;
		}

		// 根据过滤数组生成html
		var createList = function(arr) {
			var html = '';
			var len = arr.length;
			for ( var i = 0; i < len; i++) {
				html += '<li style="padding:0 16px 0 5px;white-space:nowrap;"  onmouseover = "this.style.backgroundColor = \'#ddddff\';this.style.color = \'#000\'" onmouseout = "this.style.backgroundColor = \'\';this.style.color = \'#000\' "  data="'
						+ arr[i][0] + '">' + arr[i][1] + '</li>';
			}
			return html;
		}

		// 生成默认列表字符串
		var list_str = createList(items);

		// 生成input元素
		var $input = $('<input type="text" value="' + $options.eq(0).text() + '" />').appendTo(document.body);
			$input.css(
						{ // 文本输入框样式设置
							'position' : 'absolute',
							'padding-right' : arrow_w + 'px',
							'padding-left' : '4px',
							'line-height' : h - 2 + 'px',
							'border' : 'solid 1px #7f9db9',
							'background' : 'url(/images/arrow-down.gif) no-repeat 100% 50% #fff'
						}).keyup(function() {
					var sea;
					if (sea = $.trim($(this).val())) {
						var opt = filter(sea);
						var len = opt.length;
						if (len == 0)
							return;
						/*if (len == 1) {
							var index = opt[0][0];
							$options.eq(index).attr('selected', 'selected');
							$input.val(opt[0][1]);
							$list.hide();
							return;
						}*/
						if (len > show_items) {
							$list.css({
								'height' : show_items * ltem_h + 'px',
								'overflow-y' : 'scroll'
							});
						} else {
							$list.css({
								'height' : 'auto',
								'overflow-y' : 'auto'
							});
						}
						var html = createList(opt);
						$list.html(html);
						$list.show();
					}
				}).click(function() {
					this.select();
					if (opt_len > show_items) {
						$list.css({
							'height' : show_items * ltem_h + 'px',
							'overflow-y' : 'scroll'
						});
					} else {
						$list.css({
							'height' : 'auto',
							'overflow-y' : 'auto'
						});
					}
					$list.html(list_str);
					$list.show();
				}).one('focus', function() {
					$(this).val('');
				}).blur(function() {
					var sea;
					if (sea = $.trim($(this).val())) {
						var opt = filter(sea);
						var len = opt.length;
						if (len == 0){
							//$input.val($options.eq(0).text());
						}
						if(len == 1){
							var index = opt[0][0];
							$options.eq(index).attr('selected', 'selected');
							$select.change();
						}
					}
					var timer = setTimeout(function() {
						$list.hide()
					}, 300);
					$list.scroll(function(){
						clearTimeout(timer);
						$input.focus();
					});					
				});

		// 生成自动提示列表
		var $list = $('<ul></ul>').appendTo(document.body).html(list_str).css(
				{
					'position' : 'absolute'
				});
		$list.css({ // 下拉列表样式设置
			'padding' : '0px 0px 0px 0',
			'line-height' : ltem_h + 'px',
			'margin' : '0 0 0 0',
			'list-style' : 'none',
			'background-color' : '#fff',
			'border' : 'solid 1px #7f9db9',
			'display' : 'none'
		}).click(function(e) {
			var clicked = $(e.target);
			var index = clicked.attr('data');
			$input.val(clicked.text());
			$options.eq(index).attr('selected', 'selected');
			$(this).hide();
		});
		
		var select_id = $select.attr('id');
		var input_id = select_id + '_input',list_id = select_id + '_list';
		$input.attr('id',input_id),
		$list.attr('id',list_id);
		
		position(select_id,input_id,list_id);
		x = 0;
		S.push([select_id,input_id,list_id]);

	}
	
	if(!$.browser['msie']){
		$(window).resize(function(){
			$.each(S,function(){
				position(this[0],this[1],this[2]);
			})
		})
		}else{
			v = window.onresize = function(){
				window.onresize = null;
				for(var i = 0; i < S.length; i++){
					position(S[i][0],S[i][1],S[i][2]);
				}
				setTimeout(function(){window.onresize = v},300);
			}
		}	
	
})(jQuery);

/*jQuery(function() {
	//jQuery.S_input('#userId', 10);
	//jQuery.S_input('#status', 10)
});*/