$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });
});


let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: { gradient: ['#a445b2', '#fa4299'] }
};
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.70
});
$(".react .bar").circleProgress({
    value: 0.60
});


$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

// slide-up script
$('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function() {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
// toggle menu/navbar script
$('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// pop up hire me form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



//Typing animation
var typed = new Typed(".typing", {
    strings: ["Web designer", "Developer", "Blogger", "Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Web designer", "Developer", "Blogger", "Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});