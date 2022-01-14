document.addEventListener('DOMContentLoaded', function() {

   const showSlider = new Swiper('.showcase-carousel', {
      // loop : true,
      speed : 1800,
      centeredSlides : true,
      effect: "coverflow",
      keyboard : true,
      navigation : {
         nextEl : '.showcase-navigation__next',
         prevEl : '.showcase-navigation__prev'
      },
      breakpoints: {
         320: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          }
      },
   });
	
   // скорость проигрывания видео
   document.querySelector('video').playbackRate = 2;

})
