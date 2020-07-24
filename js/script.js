$(document).ready(function() {
    $('.navbar-nav .nav-item').click(function() {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    });

    console.log('hi 3');

    // $(window).resize(function() {
    var winH = $(window).height(),
        winW = $(".top").innerHeight();
    //navH = $(".navbar").innerHeight();
    $(".main-slider, .rslides li").height(winH);

    //});



});