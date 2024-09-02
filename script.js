var swiper = new Swiper(".mySwiper", {
    slidesPerview: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:30,
    grabCursor:true,
    navigation: {
        nextE1:'.swiper-buttom-next',
        prevE1:'.swiper-buttom-prev'
    },
    breakpoints : {
        991: {
            slidesPerview: 3
        }
    }
    
})