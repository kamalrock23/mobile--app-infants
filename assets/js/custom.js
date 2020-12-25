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

$('.fullheight__body').scroll(function() {    
    var scroll = $('.fullheight__body').scrollTop();
    if (scroll >= 54) {
        $(".fullheight__header").addClass("page-scrolled");
	}
	else {
		$(".fullheight__header").removeClass("page-scrolled");
	}
}); //missing );