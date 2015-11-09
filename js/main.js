$(document).ready(function() {
 
  var owl = $("#first-carousel, #second-carousel");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [700, 3],
        [900, 4],
        [1100, 5],
        
      ],
      navigation: true,
      pagination : true

 
  });

  $("#secondary-nav").stick_in_parent();
 
});


//Make Saved Artwork disappear

// $('span.plus, span.minus').click(function(){
// 	if (top.location.pathname === '/piece.html')
// 	{
// 	    $(this).toggleClass("plus minus");
// 	}

// 	else {

// 	$(this).parent().parent().hide();

// }
	
// });




//Menu Toggle

$('.nav-toggle').click(function(){
  $('.mobile-header-nav').slideToggle();
});


$('#secondary-nav-mobile-toggle').click(function(){
  $('#secondary-nav-mobile').slideToggle();
});




//Active State for Menu

var url = window.location.href;

// Will only work if string in href matches with location
$('.header-nav a[href="'+ url +'"]').addClass('nav-active');

// Will also work for relative and absolute hrefs
$('.header-nav a').filter(function() {
    return this.href == url;
}).addClass('nav-active');



// For toggling plus/minus classes




$('span.plus, span.minus').click(function(){
    $(this).toggleClass("plus minus");
  
});




