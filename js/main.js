$(document).ready(function() {
 
  var owl = $("#first-carousel, #second-carousel");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 4],
        
      ],
      navigation : true
 
  });

  $("#secondary-nav").stick_in_parent();
 
});

