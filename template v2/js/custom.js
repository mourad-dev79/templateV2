/** global $ , alert , console  */

$(function () {

    'use strict'

    $('html').niceScroll();

    // change header height

    $('.header').height($(window).height());

    // scroll to features

    $('.header .arrow i').click(function(){

        $('html,body').animate({

            scrollTop: $('.feautures').offset().top

        }, 1500);
    });

    // show hidden items 

    $('.our-work .show-more').click(function(){
        $(this).fadeOut();
        $('.our-work .hiddenn').fadeIn(1500);
    })

    // check testimonials

    var leftarrow = $('.testim .fa-chevron-left'),
        rightarrow = $('.testim .fa-chevron-right');

    function checkClients() {

        if($('.client:first').hasClass('active')) {

            leftarrow.fadeOut();

        } else {

            leftarrow.fadeIn();
        }

        $('.client:last').hasClass('active') ? rightarrow.fadeOut() : rightarrow.fadeIn();

    }

    checkClients();

    $('.testim i').click(function() {

        if($(this).hasClass('fa-chevron-right')){

            $('.testim .active').fadeOut(100,function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            })
        } else {

            $('.testim .active').fadeOut(100,function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            })
        }


    })

})