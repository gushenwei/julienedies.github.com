// JavaScript Document

function showandhide(h_id,hon_class,hout_class,c_id,totalnumber,activeno) {
    var h_id,hon_id,hout_id,c_id,totalnumber,activeno;
    for (var i=1;i<=totalnumber;i++) {
        document.getElementById(c_id+i).style.display='none';
        document.getElementById(h_id+i).className=hout_class;
    }
    document.getElementById(c_id+activeno).style.display='block';
    document.getElementById(h_id+activeno).className=hon_class;
}

var tips; 
var theTop = 40;
var old = theTop;
function initFloatTips() 
{ 
	tips = document.getElementById('divQQbox');
	moveTips();
}

function moveTips()
{
	 	  var tt=50; 
		  if (window.innerHeight) 
		  {
			  pos = window.pageYOffset  
		  }else if (document.documentElement && document.documentElement.scrollTop) {
			 pos = document.documentElement.scrollTop  
		  }else if (document.body) {
		    pos = document.body.scrollTop;  
		  }
		  
		  pos=pos-tips.offsetTop+theTop; 
		  pos=tips.offsetTop+pos/10; 
		  if (pos < theTop){
			 pos = theTop;
		  }
		  if (pos != old) { 
			 tips.style.top = pos+"px";
			 tt=10;  //alert(tips.style.top);  
		  }
		  old = pos;
		  setTimeout(moveTips,tt);
}
initFloatTips();
	if(typeof(HTMLElement)!="undefined")    //给firefox定义contains()方法，ie下不起作用
		{  
		  HTMLElement.prototype.contains=function (obj)  
		  {  
			  while(obj!=null&&typeof(obj.tagName)!="undefind"){ //通过循环对比来判断是不是obj的父元素
	   　　 　if(obj==this) return true;  
	   　　　	　obj=obj.parentNode;
	   　　	  }  
			  return false;  
		  }
	}

function show()
{
	document.getElementById("meumid").style.display="none"
	document.getElementById("contentid").style.display="block"
}
	function hideMsgBox(theEvent){
	  if (theEvent){
		var browser=navigator.userAgent;
		if (browser.indexOf("Firefox")>0){  //如果是Firefox
		    if (document.getElementById("contentid").contains(theEvent.relatedTarget)) {  //如果是子元素
				return
			}
		}
		if (browser.indexOf("MSIE")>0 || browser.indexOf("Presto")>=0){  //如果是IE
	        if (document.getElementById('contentid').contains(event.toElement)) {  //如果是子元素
			    return;  //结束函式
		    }
		}
	  }
	  document.getElementById("meumid").style.display = "block";
	  document.getElementById("contentid").style.display = "none";
 	}
 //定义跨浏览器事件绑定函数
 function addEvent(elem,evtType,func){
	 if(elem.addEventListener){
	 	elem.addEventListener(evtType,func,false);
	 } else if(elem.attachEvent){
		elem.attachEvent("on"+evtType,func); 
	 } else{
		elem["on"+evtType]=func; 
	 }
 }
//开始绑定函数

 var meumid =document.getElementById("meumid");
 addEvent(meumid,"mouseover",show); 
 var contentid =document.getElementById("contentid");
 addEvent(contentid,"mouseout",function(evt){hideMsgBox(evt)});
 
 var kf1 =document.getElementById("qq-1");
 addEvent(kf1,"focus",function(){this.blur()});
 addEvent(kf1,"mouseover",function(){showandhide('qq-','qqkfbt','qqkfbt','K',5,1)});

 var kf1 =document.getElementById("qq-2");
 addEvent(kf1,"focus",function(){this.blur()});
 addEvent(kf1,"mouseover",function(){showandhide('qq-','qqkfbt','qqkfbt','K',5,2)});
 
 var kf1 =document.getElementById("qq-3");
 addEvent(kf1,"focus",function(){this.blur()});
 addEvent(kf1,"mouseover",function(){showandhide('qq-','qqkfbt','qqkfbt','K',5,3)});
 
 var kf1 =document.getElementById("qq-4");
 addEvent(kf1,"focus",function(){this.blur()});
 addEvent(kf1,"mouseover",function(){showandhide('qq-','qqkfbt','qqkfbt','K',5,4)});
 
 var kf1 =document.getElementById("qq-5");
 addEvent(kf1,"focus",function(){this.blur()});
 addEvent(kf1,"mouseover",function(){showandhide('qq-','qqkfbt','qqkfbt','K',5,5)});
 
/*$(".qqkfbt").each(function(index){
	$(this).focus(function(){
		this.blur()
	});					   
	$(this).mouseover(function(){
	    showandhide('qq-','qqkfbt','qqkfbt','K',5,index+1);	
	})					   
});*/