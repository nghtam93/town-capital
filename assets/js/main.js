$(document).ready(function(){

    var header_sticky=$("header.-fix")
    if($('body').hasClass( "home" )){
        $(window).scroll(function(){
            $(this).scrollTop()>5?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
        })
    }else{
        header_sticky.addClass("is-active")
    }

    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        if($('body').hasClass('modal-open')){
            $('.menu-mb__btn').removeClass('active')
            $('.nav__mobile').removeClass('active')
            $('body').removeClass('modal-open')
        }else{
            $('.menu-mb__btn').addClass('active')
            $('body').addClass('modal-open')
            $('.nav__mobile').addClass('active')
        }
    });

    //check home
    if($('body').hasClass( "home" )){

        new WOW().init();

        $('.js-intro-slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          asNavFor: '.js-intro-slider-for'
        });
        $('.js-intro-slider-for').slick({
          // autoplay: true,
          // autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.js-intro-slider-nav',
          fade: true,
          arrows: false,
          dots: true,
        });
    }

});


