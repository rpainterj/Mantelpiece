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



$('span.plus, span.minus').click(function(){

	$(this).toggleClass("plus minus");

});



$('.nav-toggle').click(function(){
  $('.mobile-header-nav').slideToggle();
});


$('#secondary-nav-mobile-toggle').click(function(){
  $('#secondary-nav-mobile').slideToggle();
});








