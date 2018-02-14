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


$(document).ready(function(){
   
   $("#welcome-right").click(function(){$("#info-txt").toggle(1000)});
   
});

// фенсибокс

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

// hover

$(document).ready(function(){
  $("#med1").hover(

 function() {
   $( "#med1-txt").fadeIn( 500 );
  }, function() {
   $( "#med1-txt" ).fadeOut( 500 );
  }

);

}); 


$(document).ready(function(){
  $("#med2").hover(

 function() {
   $( "#med2-txt").fadeIn( 500 );
  }, function() {
   $( "#med2-txt" ).fadeOut( 500 );
  }

);

}); 

$(document).ready(function(){
  $("#med3").hover(

 function() {
   $( "#med3-txt").fadeIn( 500 );
  }, function() {
   $( "#med3-txt" ).fadeOut( 500 );
  }

);

}); 

