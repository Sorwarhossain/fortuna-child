(function ($) {
	"use strict";





			setTimeout(function() {
			  $('.placeholder').css('display', 'none');
			  $('#typed').css('display', 'inline');
			  newTyped();

			}, 700);

			function newTyped() {
			  $("#typed").typed({
			    strings: [
			      "Social Media Marketing",
			      "Brand Marketing",
			      "Content Marketing",
			      "Social Media Advertising",
			    ],
			    typeSpeed: 50,
			    backDelay: 1000,
			    loop: true,
			    contentType: 'text', //Can also be set to "html"
			    loopCount: false,
			    callback: function() {
			      foo();
			    },
			    resetCallback: function() {
			      newTyped();
			    }
			  });

			  $(".reset").click(function() {
			    $("#typed").typed('reset');
			  });
			}

			function foo() {
			  console.log("Callback");
			}



})(jQuery);




