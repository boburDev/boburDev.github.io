  AOS.init({
  	once: true,
  	delay: 500,
  });
  
  let scroll = new SmoothScroll('a[href*="#"]');
 
  let openNavButtonElement = document.querySelector('.navbar-toggler')
  let navListElement = document.querySelector('.navbar_list')
 
  let addClass = function() {
  	navListElement.classList.add('navbar--open');
  	openNavButtonElement.addEventListener('click', onCloseNavListClick);
  };
  let removeClass = function() {
  	navListElement.classList.remove('navbar--open');
  	openNavButtonElement.removeEventListener('click', onCloseNavListClick);
  }

  let onOpenNavListButtonClick = function () {
  	addClass();
  }
  let onCloseNavListClick = function () {
  	removeClass();
  }

  openNavButtonElement.addEventListener('click', onOpenNavListButtonClick);
