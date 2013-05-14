/**
 *
 * @todo 		基于jQuery的一个工具函数,用于自动生成表单提要并实时同步
 * @param 		string options.summary_title   摘要标题 
 * @param 		string options.summary_items   摘要项定义
 * @param 		string options.wrap       	   摘要插入位置
 * @return
 * @author      zhangxiaojian [haizai1979315@gmail.com]
 * @create  	2011.9.19
 * @modify  	2011.9.23 
 * 
 * 
 * examples ：
 * 
 * jQuery.auto_summary({
 *					summary_title : '下拉列表',
 *					summary_items : [
 *									 {
 *										 name : '用户名',   //摘要项名
 *										 value : '***',    //摘要项默认值
 *										 source : ['#userId','#ad_name','[name=ra]'],//关联的表单控件，jQuery选择符
 *										 format : function(p){return p.join('-')} //自定义回调函数，对值进行格式化显示
 *									 },
 *									 {
 *										 name : '区域',
 *										 value : 'a',
 *										 source : ['[name=ra]']
 *									 },									 
 *									 {
 *										 name : '广告名称',
 *										 value : '-',
 *										 source : ['#ad_name']
 *									 },	
 *									 {
 *										 name : '国家',
 *										 value : '-',
 *										 source : ['[name=ch]'],
 *										 format : function(p){
 *											     var l = p[0].length || 0;
 *												 return '选择' + l + '个国家';
 *											 }
 *									 }									 
 *									 ],
 *					wrap:'#parent'
 *					});
 * 
 */
(function($){
	
	var S_item = function(options){
		var defaults = {
				name : '',
				value : '',
				format : function(arr){return arr.join('')},
				source : [],
				control : [],
				$wrap : null
		};	
		var setting = $.extend(defaults,options);
		$.extend(this,setting);
		for(var i in this.source){
			this.control.push($(this.source[i]));
		}
		this.$summary_item = $('<div class="summary_item"></div>');
		this.$item_name = $('<span class="item_name"></span>').text(this.name);;
		this.$item_value = $('<span class="item_value"></span>');		

		this.$item_value.text(this.format(this.get(this.control)) || this.value);
		
		this.$item_name.appendTo(this.$summary_item);
		this.$item_value.appendTo(this.$summary_item);
		
		this.sync();
	}
	S_item.prototype.sync = function(){
		var that = this;
		setInterval(function(){
						that.$item_value.text(that.format(that.get(that.control)) || that.value);			 
							 },600);
/*		$.each(that.control,function(){
			this.bind('change',function(e){
				that.$item_value.text(that.format(that.get(that.control)) || that.value);
									  });
		})*/
	}
	S_item.prototype.get = function(arr){
		var v = [];
		for(var i in arr){
			var obj = arr[i];
			var type = obj.attr('type') || '';
			if(type == 'text' || type == 'textarea'){
				v.push(obj.val());
			}else if(type == 'radio'){
				v.push(obj.filter(':checked').val()); 
			}else if(type == 'checkbox'){
				var c = [];
				obj.filter(':checked').each(function(){
					c.push(this.value);
				})
				v.push(c); 
			}else{
				v.push(obj.find('option:selected').text());
			}				
		}
		return v;
	}
	
	S_body = function(options){
		var defaults = {
				summary_id : '',
			    summary_title : '',
				summary_items :[], 
				wrap : ''   
		};
		var setting = $.extend(defaults,options);
		$.extend(this,setting);
		this.$wrap = $(this.wrap)
		this.$summary = $('<div id="' + this.summary_id + '" class="summary_view"></div>').appendTo(this.$wrap);
		this.$summary_title = $('<div class="summary_title"></div>').appendTo(this.$summary).text(this.summary_title);
		this.$summary_body = $('<div class="summary_body"></div>').appendTo(this.$summary);
		
		this.init();
	}	

	S_body.prototype.init = function(){
		var arr = this.summary_items;
		for(var i in arr){
			var item = new S_item(arr[i]);
			item.$summary_item.appendTo(this.$summary_body);
		}		
	}	
	
	$.auto_summary = function(options){
		var summary = new S_body(options);
		return summary;
	}
		
})(jQuery);

