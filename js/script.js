$(document).ready(function(){
	
	$(".maineMenu li").click(function(){
		
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
		
		
	});
	
	$(".sveMenu").click(function(){
		
		$(".subMenu").toggleClass("active");
		
	});
	
});