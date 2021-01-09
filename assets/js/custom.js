$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(window).scroll(function() {
    var nav = $('.navbar');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('scrolled');

    } else {
        nav.removeClass('scrolled');
    }
});