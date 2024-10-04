(function (){
  const headerBurgerOpen = document.querySelector('.header__burger');
  const burgerNavigation = document.querySelector('.header__nav');
  const headerBurgerClose = document.querySelector('.header__burger-close');

  headerBurgerOpen.addEventListener('click', event => (
    burgerNavigation.classList.add('active')
  ))

  headerBurgerClose.addEventListener('click', event => (
    burgerNavigation.classList.remove('active')
  ))
})();