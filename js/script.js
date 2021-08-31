$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    //THIS IS FOR MENU TOGGLE
    //MENU TAB WILL APPEAR AFTER MINIMIZING
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");

    });
    //THIS IS FOR AFTER CLICK MENU//
    $('.navbar .menu').on('click', event => {
        $(event.currentTarget).toggleClass("active");
    });







    $("#card1 img").hover(function() {


        $(".content1 p").toggleClass("active");

    });
    //    $(".service #one").click(function() {
    //    $(".content1 p").toggleClass("active");
    //  });


    $("#card2 img").hover(function() {
        $(".content2 p").toggleClass("active");
    });

    $("#card3 img").hover(function() {
        $(".content3 p").toggleClass("active");
    });



});