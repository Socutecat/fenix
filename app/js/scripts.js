// const link = document.querySelector ('.auth-link');
// console.log(link);

// const otherLink = document.querySelectorAll ('.auth-block-link-other');
// console.log(otherLink);

// link.addEventListener('click', () => {
// 	otherLink.forEach ((link)=> {
// 		link.classList.toggle('active')
// 	})
// })

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
