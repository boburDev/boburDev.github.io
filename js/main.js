  AOS.init({
  	once: true,
  	delay: 500,
  });
  let scroll = new SmoothScroll('a[href*="#"]');

  let openNavButtonElement = document.querySelector('.navbar-toggler')
  let navListElement = document.querySelector('.navbar_list')


var onNavListClick = function (evt) {
	if(evt.target.matches('.navbar_list')){
		closeModal();
	}
};

var addClass = function() {
	navListElement.classList.add('navbar--open');

	openNavButtonElement.addEventListener('click', onCloseNavListClick);
	navListElement.addEventListener('click',onNavListClick);
};
var removeClass = function() {
	navListElement.classList.remove('navbar--open');

	openNavButtonElement.removeEventListener('click', onCloseNavListClick);
	navListElement.remoteEventListener('click',onNavListClick);
}

var onOpenNavListButtonClick = function () {
	addClass();
}
var onCloseNavListClick = function () {
	removeClass();
}

openNavButtonElement.addEventListener('click', onOpenNavListButtonClick);