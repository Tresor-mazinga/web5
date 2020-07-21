/**----- FIRST SLIDER----- */

$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});//=============================================
// NAVBAR TOGGLE BUTTON
$('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
})
//STICKY NAVBAR LESS PADDING
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 690) {
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }
    else {
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
    }
})
//SMOOTH SCROLL
$('.nav-item a, .header-link, #zgman').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 25
    }, 3000);
});

// Isotope 
$(document).ready(function () {
    // We create a $btns variable and select all our buttons with css selectors
    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {
        // select the buttons and removed the active class
        $('.project-area .button-group button').removeClass('active');

        e.target.classList.add('active');

        //to get the data-filter value, we are going to create a variable
        let selector = $(e.target).attr('data-filter');

        $('.project-area .grid').isotope({

            filter: selector
        });
        return false;
    })

});
//===== CARD ANIMATION JS===========//
$(document).ready(function () {

    $('.col-lg-3, .col-md-4, .col-lg-4').hover(
        function () {
            $(this).animate({
                marginTop: "-=2%",
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }


    );

});

