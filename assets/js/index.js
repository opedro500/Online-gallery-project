var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});