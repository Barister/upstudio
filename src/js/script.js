console.log('script.js тоже подключен.');

// scroll-background

const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

function toggleHeaderClass() {
   if (window.scrollY > 0) {
      header.classList.add('scroll');
      logo.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
      logo.classList.remove('scroll');
   }
}

window.addEventListener('scroll', toggleHeaderClass);


// burger activation

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body'); // Получаем элемент <body>

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');

   // Добавляем или убираем класс, чтобы заблокировать/разблокировать скролл
   body.classList.toggle('scroll-lock');
});

// Событие при нажатии на ссылку в меню
headerMenu.addEventListener('click', (event) => {
   // Проверяем, является ли клик на ссылку
   if (event.target.tagName === 'A') {
      // Сворачиваем бургер и меню
      burger.classList.remove('active');
      headerMenu.classList.remove('active');
      body.classList.remove('scroll-lock');
   }
});



//  переменные размеры для шрифта в зависимости от размера родительского элемента

const bodyHeroItemArray = document.querySelectorAll('.body-hero__item');

// bodyHeroItemArray.forEach(element => {

// });

// document.addEventListener('')

console.log(bodyHeroItemArray);