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



$('a.plus').on('click', function(){

	$('a.plus').toggleClass("A B");

});

