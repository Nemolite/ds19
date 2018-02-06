$(document).ready(function(){
  $('.main-slider').slick({
    autoplay:true,
    autoplaySpeed:3000
      
  });

});

// меню

$(document).ready(function(){
   
   $("#navs2").click(function(){$("#navs2-inner").toggle(1000)});
    $("#navs4").click(function(){$("#navs4-inner").toggle(1000)});
    $("#navs8").click(function(){$("#navs8-inner").toggle(1000)});
   

});

// фенсибокс

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});