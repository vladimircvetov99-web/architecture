const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list'); 

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
} );


const swiper = new Swiper('.projects__slider', {
 slidesPerView: 1,
 spaceBetween: 20,
  loop: true,

 breakpoints: {
        
        640: {
          slidesPerView: 2,          
        },
        1024: {
          slidesPerView: 3,          
        },
      },
   
      // Navigation arrows   
  navigation: {
    nextEl: '.projects__arow-next',
    prevEl: '.projects__arow-prev',
  },


});