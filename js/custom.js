$(document).ready(function(){

	$(".js-sidebar-toggle").click(function(){
		$(".js-sidebar").toggleClass("active");
	});

});


$(window).bind("load resize", function() {
	sizingheight();
});

function sizingheight(){
}