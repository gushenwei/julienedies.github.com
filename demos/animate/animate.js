
;(function(window){
		
		/* 参照jQuery库结构 */
		var _$ax = function(selector) {
		    return new _ax(selector);
		};
		
		/*定义动画对象*/
	    var _ax = function(selector) {
		    this.dom = window.document.getElementById(selector.replace(/^\#/, ''));
		    this.timer = {};
		    this.queue = [];
		    this.call = null;
		    this.recss = {};
		};
		
        /**
         * 设置动画效果
         * 主要是动画属性设定
         * @name    _ax.prototype.add
         * @param   {Object}  封装各种动画属性
         * @return  {Object}  封装好的dom对象及动画属性
         */	
		_ax.prototype.add = function(set) {
			if(!set) return this;
			var that = this,
		    animation = set.animation,
		    duration = set.duration,
		    from = parseInt(set.from),
		    to = parseInt(set.to),
		    delay = set.delay,
		    cssprop = set.cssprop,
		    numframes = set.numframes;

		    this.recss[cssprop] = (this.dom.currentStyle && this.dom.currentStyle[cssprop]) || (window.getComputedStyle && window.getComputedStyle(this.dom, null)[cssprop]);
			
		    var ani = (function() {
		        return function() {
		            var frame = 0,
		            time = 0,
		            timeperframe = duration / numframes;

		            that.dom.style[cssprop] = animation(from);

		            function display() {
		                if (frame >= numframes) {
		                    that.dom.style[cssprop] = animation(to);
		                    clearInterval(that.timer[cssprop]);
		                    delete that.timer[cssprop];
		                    if (that.call) {
		                        that.call();
		                        delete that.call;
		                    }
		                    for (var j in that.timer) {
		                        break;
		                    }
		                    if (!j) that.re();
		                    return;
		                }

		                var v = from + (to - from) / numframes * frame;
		                that.dom.style[cssprop] = animation(v);

		                frame++;
		                time += timeperframe;
		            }

		            if (delay) {
		                setTimeout(function() {
		                    that.timer[cssprop] = setInterval(display, timeperframe);
		                },delay);
		            } else {
		                that.timer[cssprop] = setInterval(display, timeperframe);
		            }
		        };

		    })(cssprop, from, to, animation, numframes, duration, delay);

		    this.queue.push(ani);
		    return this;
		};
		
		
        /**
         * 恢复动画对象的原有样式
         * 主要用于内部调用
         * @name    _ax.prototype.re
         */			
		_ax.prototype.re = function() {
		    for (var i in this.recss) {
		        //this.dom.style[i] = this.recss[i];
		    }
		};
		
        /**
         * 停止动画
         * 主要用于内部调用
         * @name    _ax.prototype.stop
         */			
		_ax.prototype.stop = function() {
			for(var i in this.timer){
				clearInterval(this.timer[i]);
                delete this.timer[i];
			}
		};
		
        /**
         * 开始动画
         * 可以添加动画执行完毕回调函数
         * @name    _ax.prototype.run
         * @param   {Fuction}  动画结束后的回调函数
         * @return  
         */			
		_ax.prototype.run = function(call) {
		    this.call = call;
		    var length = this.queue.length;
		    if(length == 0 && this.call){
		    	this.call();
		    }else{
			    for (var i = 0; i < length; i++) { 
					(this.queue[i])();
			    }		    	
		    }
		};
		
		/*设置对外接口*/
		window.ax =  _$ax;
		
})(window);