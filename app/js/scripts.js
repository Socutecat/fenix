


/* scroll header */

let lastscrollTop = 0;
navbar = document.getElementById("nav-header");
window.addEventListener('scroll',()=>{
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop > lastscrollTop) {
		navbar.style.top = "-300px";
	} else {
		navbar.style.top = "0";
	}
	lastscrollTop
})




function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items:1,
		nav:true,
		loop:true,
		dots:true,
		autoplay:false,
		responsiveClass:true,
	});
}

function fancybox_init() {
	$('[data-fancybox]').fancybox({
		youtube : {
			controls : 0,
			showinfo : 0
		},
	});
}

$(document).ready(function(){
	carousel_init();
	fancybox_init();
});
