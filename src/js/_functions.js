import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
let personSlide = new Swiper('.person__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.person__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

if (window.innerWidth <= 767) {
    let reviewSlide = new Swiper('.review__slider-container', {
        spaceBetween: 20,
        pagination: {
            el: '.review__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
        },
    });
}

let articleSlide = new Swiper('.article-carousel__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.article-carousel__next',
        prevEl: '.article-carousel__prev',
    },
    pagination: {
        el: '.article-carousel__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        360: {
            centeredSlides: true,
            slidesPerView: 'auto',
        },
    },
});
