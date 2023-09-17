var swiper = new Swiper(".swiper", {
    slidesPerView: 10,
    slidesPerGroup:10,
    pagination: {
        el: ".pagination-dots",
        clickable: true,
        renderBullet: function (index, className) {
            if (index < 2) {
                return '<span class="' + className + '"></span>';
            } else if (index === 2) {
                return '<span class="' + className + '">...</span>';
            } else {
                return '';
            }
        },
    },
    loop: true,
    spaceBetween: 10,
    initialSlide: 0,
    freeMode: true,
});