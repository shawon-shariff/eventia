$(document).ready(function(){
	// loader
     $(window).load(function(){
	    $('.preloader').delay(500).fadeOut(700);
	  });

	// tab-pane
    $('#myTab li:first-child a').tab('show');

    // count down
     $('#getting-started').countdown('2020/12/27', function(event) {

	    $(this).html(event.strftime('<li class="mr-5"><span class=" display-4">%D</span><br><span>Days</span></li><li class="mr-5"><span class=" display-4">%H</span><br><span>Hours</span></li><li class="mr-5"><span class=" display-4">%M</span><br><span>Minutes</span></li><li><span class=" display-4">%S</span><br><span>Seconds</span></li>'));
	  });
 

});
