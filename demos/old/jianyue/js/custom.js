// JavaScript Document

$(document).ready(function(){
	$(".scrollt2").jMarquee({
      visible:4,
      step:1,
      direction:"left"
           });
	$("#featured > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 6000, true);
});