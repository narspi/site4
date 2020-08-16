let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,
  })

setTimeout(()=> {
  let next = document.querySelector('.swiper-slide-next');
  let accent = next.nextElementSibling;
  accent.classList.add('swiper-slide--accent');
},1000);
  

mySwiper.on('slideChange', ()=> {
  setTimeout(()=> {
    let active = document.querySelector('.swiper-slide-active');
    next = document.querySelector('.swiper-slide-next');
    accent = next.nextElementSibling;
    let back = accent.nextElementSibling;
    accent.classList.add('swiper-slide--accent');
    active.classList.remove('swiper-slide--accent');
    next.classList.remove('swiper-slide--accent');
    back.classList.remove('swiper-slide--accent');
  },100);
});