jQuery(document).ready(function($) {
    
	
    var banner = $('.tour-gallery').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true,
        pager: false,
        auto: true,
        mode: 'slide',
        pause:5000,
    });
    var height1 = 32;
        height2 = 326;
        height3 = 72;
        height4= 357;
        height = height1 + height2 + height3 + height4 + 50;
    var windowsize = $(window).width();
    if (windowsize > 767) {
        (function($) {
            $.lockfixed(".boxFix",{offset: {top: 80, bottom: height}});
        })(jQuery);
    }

    $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();

            // Show/hide menu on scroll
            //if (scrollDistance >= 850) {
            //      $('nav').fadeIn("fast");
            //} else {
            //      $('nav').fadeOut("fast");
            //}
        
            // Assign active class to nav links while scolling
            $('.block-detail-tour').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.boxDesign2 li.active').removeClass('active');
                            $('.boxDesign2 li').eq(i).addClass('active');
                    }
            });
    }).scroll();

    var tourTrongNuoc = $('.tours-slider').lightSlider({
        item:4,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        slideMargin:5,
        pager: false,
        controls: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]

    });  











   
});


