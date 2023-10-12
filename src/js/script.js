//console.log('script.js тоже подключен.');

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
const headeContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
const headerButton = document.querySelector('.header__button');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headeContainer.classList.toggle('active');
   headerMenu.classList.toggle('active');
   headerButton.classList.toggle('active');

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




// загрузка items в portfolio

const portfolio = document.querySelector('.portfolio');
const portfolioHeader = document.querySelector('.portfolio__header');

const previousProjectBtn = document.querySelector('.footer-slider__left');
const nextProjectBtn = document.querySelector('.footer-slider__right');
let projectsLength = 0; // Объявим переменную здесь

if (portfolio) {
   loadPortfolioItems();
}

let counter = 0;

//console.log('counter:', counter);

previousProjectBtn.addEventListener('click', () => {
   //console.log('click left');
   if (counter > 0) {
      counter -= 1;
      loadPortfolioItems();
   }
});

nextProjectBtn.addEventListener('click', () => {
   //console.log('click right');
   if (counter < (projectsLength - 1)) {
      counter += 1;
      loadPortfolioItems();
   }
});

async function loadPortfolioItems() {
   const response = await fetch("files/portfolio.json", {
      method: "GET"
   });

   if (response.ok) {
      const responseResult = await response.json();

      //console.log('responseResult:', responseResult.projects[counter]);

      initPortfolio(responseResult.projects[counter]);

      projectsLength = responseResult.projects.length; // Обновляем значение переменной
      //console.log('projectsLength:', projectsLength);

      //console.log('counter:', counter);
   }
   else {
      alert("Error");
   }
}


function initPortfolio(project) {

   buildPortfolioProject(project);

}


function buildPortfolioProject(project) {

   const
      projectTitle = document.querySelector('.content-portfolio__title'),
      projectMainFont = document.querySelector('.item-content__font-title'),
      projectColors = document.querySelector('.item-content__site-colors'),
      projectImage = document.querySelector('.slider-portfolio__preview'),
      projectLink = document.querySelector('.slider-portfolio__view');


   // data setup
   projectTitle.innerText = `${project.title}`;
   projectMainFont.innerText = `${project.font}`;
   projectColors.src = `${project.colors}`;
   projectImage.src = `${project.image}`;
   projectLink.href = `${project.url}`;

}
