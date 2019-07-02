const link = document.querySelector ('.auth-link');
console.log(link);

const otherLink = document.querySelectorAll ('.auth-block-link-other');
console.log(otherLink);

link.addEventListener('click', () => {
	otherLink.forEach ((link)=> {
		link.classList.toggle('active')
	})
})