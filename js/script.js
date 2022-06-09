$(document).ready(function () {
    $(".show-popup-infak").click(function () {
        $(".wrapper-popup").addClass("show");
    });

    $(".close-popup, .backdrop").click(function () {
        $(".wrapper-popup").removeClass("show");
    });

    $(".hamburger").click(function () {
        $(".top-menu").css("right", "0");
    });

    $(".close").click(function () {
        $(".top-menu").css("right", "-100vw");
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".swiper-kegiatan", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});
