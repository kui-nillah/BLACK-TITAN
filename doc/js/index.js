$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-2').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-2 i').toggleClass("active");
    });
});