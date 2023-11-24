import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
const slider = document.querySelector('.swiper');
const sliderFeedback = document.querySelector('.feedback-swiper')
Swiper.use([Navigation, Pagination, Autoplay ]);

// head swiper slider

const swiper = new Swiper(slider, {
    slidesPerView: 1, 
    spaceBetween: 10,
    allowTouchMove: false,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3500
    }
});

// feedback swiper slider

const swiperFeedback = new Swiper(sliderFeedback, {
    slidesPerView: 1, 
    spaceBetween: 10,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
