$(document).ready(
  function() {  
    $("html").niceScroll();
  }
);

var nice = false;
$(document).ready(
  function() {  
    nice = $("html").niceScroll();
  }
);

$("html").niceScroll({
		scrollspeed: 50,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});