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
let portfolioBody;


console.log('portfolioBody:', portfolioBody);

// content-portfolio__title = projectTitle
// item-content__subject h5 = projectMainFont
// content-portfolio__item img = projectColors
// slider-portfolio__preview = projectImage
// slider-portfolio__view = projectLink

if (portfolio) {
   loadPortfolioItems();
}

let counter = 0;





console.log('counter:', counter);

// function changePortfolioItem() {
//    if 
// }


async function loadPortfolioItems() {
   const response = await fetch("files/portfolio.json", {
      method: "GET"
   });

   if (response.ok) {
      const responseResult = await response.json();
      console.log('responseResult:', responseResult.projects[counter]);
      initPortfolio(responseResult.projects[counter]);
      let projectsLength = responseResult.projects.length;
      console.log('projectsLength:', projectsLength);

      const previousProjectBtn = document.querySelector('.footer-slider__left');
      const nextProjectBtn = document.querySelector('.footer-slider__right');

      previousProjectBtn.addEventListener('click', () => {
         console.log('click left');
         if (counter > 0) {
            counter -= 1;
            loadPortfolioItems();
         }
      });

      nextProjectBtn.addEventListener('click', () => {
         console.log('click right');
         if (counter < projectsLength - 1) {
            counter += 1;
            loadPortfolioItems();
         }
      });

      console.log('counter:', counter);
   }
   else {
      alert("Error");
   }


}


function initPortfolio(project) {

   buildPortfolioProject(project);

}


function buildPortfolioProject(project) {
   const portfolioProjectTemplate = `
      <div class="portfolio__body body-portfolio">
         <div class="body-portfolio__content content-portfolio">
            <h4 class="content-portfolio__title">${project.title}</h4>
            <div class="content-portfolio__item item-content">
               <div class="item-content__subject">Типографика</div>
               <h5>${project.font}</h5>
               <p>Аа Бб Вв Гг Дд Ee Ёё Жж Зз Ии Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ ъ ы ь Ээ Юю Яя
               </p>
               <p>Аа Бб Вв Гг Дд Ee Ёё Жж Зз Ии Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ ъ ы ь Ээ Юю Яя
               </p>
            </div>
            <div class="content-portfolio__item item-content">
               <div class="item-content__subject">цвета</div>
               <img src="${project.colors}" alt="site colours"></img>
            </div>
         </div>
         <div class="body-porfolio__slider slider-portfolio">
            <div class="slider-portfolio__content">
               <img src="${project.image}" alt="template preview" class="slider-portfolio__preview">
               <a href="${project.url}" class="slider-portfolio__view btn btn--white" target="_blank">Перейти</a>
            </div>
            <div class="slider-portfolio__footer footer-slider">
               <button class="footer-slider__left">
                  <img src="img/portfolio/control.svg" alt="Slider Control">
               </button>
               <button class="footer-slider__button btn btn--white btn--bullet"><span>Заказать
                     сайт</span></button>
               <button class="footer-slider__right">
                  <img src="img/portfolio/control.svg" alt="Slider Control">
               </button>
            </div>
         </div>
      </div>
   `;
   if (portfolioBody) {

      portfolioBody.innerHTML = '';
   }
   portfolioHeader.insertAdjacentHTML('afterend', portfolioProjectTemplate);

   portfolioBody = document.querySelector('.portfolio__body');
}


// document.addEventListener("DOMContentLoaded", () => {

//    const previousProjectBtn = document.querySelector('.footer-slider__left');
//    const nextProjectBtn = document.querySelector('.footer-slider__right');

//    previousProjectBtn.addEventListener('click', () => {

//       console.log('click left');

//       if (counter > 0) {
//          counter -= 1;
//          loadPortfolioItems();
//       }
//    });

//    nextProjectBtn.addEventListener('click', () => {

//       console.log('click right');

//       if (counter < projectsLength) {
//          counter += 1;
//          loadPortfolioItems();
//       }
//    });

// });