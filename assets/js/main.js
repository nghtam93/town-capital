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
            arrows: true,
            fade: false,
            asNavFor: '.js-intro-slider-for',
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            prevArrow: '<span class="icon-arrow-top slick-prev slick-arrow"></span>',
            nextArrow: '<span class="icon-arrow-bottom slick-next slick-arrow"></span>',
        });
        $('.js-intro-slider-for').slick({
          // autoplay: true,
          // autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.js-intro-slider-nav',
          fade: true,
          arrows: false,
          dots: false,
        });



        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

        var $counters = $(".counter");

        /* Start counting, do this on DOM ready or with Waypoints. */
        $counters.each(function (ignore, counter) {
            var waypoint = new Waypoint( {
                element: $(this),
                handler: function() {
                    counterUp(counter, {
                        duration: 3000,
                        delay: 10
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view',
            } );
        });



    }

});


