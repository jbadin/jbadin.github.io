$(function () {
    $('.nav-link').click(function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('.nav-item').removeClass('active clickActive');
        $(this).parent().addClass('active clickActive');
        $('html, body').animate({ scrollTop: $(page).offset().top - 70 }, speed); // Go
    });
    $('.navbar-brand').click(function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top - 90 }, speed); // Go
    });
    $(window).scroll(function () {
        console.log('jkj');
        $('body').find('.clickActive').removeClass('active');
    });
});
