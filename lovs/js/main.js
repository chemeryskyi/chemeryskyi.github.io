$(document).ready(function($) {
    var slide_to_show = 4,
        sliderPro_width_l, sliderPro_width_r;
    var width = $(window).width();
    $(window).resize(function() {
        width = $(window).width();
    });
    if(width <992 ){slide_to_show=3;};
    if(width <769 ){slide_to_show=2;};
    if(width <481 ){slide_to_show=1;};
    if (width < 480) {
            $(function() {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            var height1 = $(document).height() - $(window).height() - 80;
            var result = $(document).scrollTop();
            if (result > height1)
                if (result < height1) $(".header-contact-content-fix").fadeIn(300);
            if (top < 80) {
                $(".header-contact-content").removeClass("header-contact-content-fix");
            } else {
                $(".header-contact-content").addClass("header-contact-content-fix");
            }
        });
        
    });
        }
    $(".popup-idea .popup-box").on("click", ".popup-idea-nav-item", function() {
        var tabs = $(".popup-idea-nav-item"),
            cont = $(".popup-idea-content-item");
        tabs.removeClass("active");
        cont.removeClass("active");
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });
    $(document).mouseup(function(e) { var div = $(".popup-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup').fadeOut(); } });
    $('.create-gallery-right').sliderPro({ width: 468, height: 322, fade: true, buttons: false, shuffle: true, smallSize: 500, mediumSize: 1000, largeSize: 3000, thumbnailArrows: true, autoplay: false, thumbnailsPosition: 'right', thumbnailWidth: 79, thumbnailHeight: 78 ,breakpoints:{991:{thumbnailsPosition: 'bottom', thumbnailHeight: 0}}});
    $('.create-gallery-left').sliderPro({ width: 468, height: 322, fade: true, buttons: false, shuffle: true, smallSize: 500, mediumSize: 1000, largeSize: 3000, thumbnailArrows: true, autoplay: false, thumbnailsPosition: 'left', thumbnailWidth: 79, thumbnailHeight: 78,breakpoints:{991:{thumbnailsPosition: 'bottom', thumbnailHeight: 0}} });
    $('.create-video-slider').slick({ infinite: true, slidesToShow: slide_to_show, slidesToScroll: slide_to_show, dots: true, prevArrow: '<div class="slider-prevArrow "></div>', nextArrow: '<div class="slider-nextArrow "></div>' });
    $('.feedback-slider').slick({ infinite: false, slidesToShow: slide_to_show, slidesToScroll: slide_to_show, dots: false, prevArrow: '<div class="feedback-slider-page feedback-slider-page-prev">Предыдущая</div>', nextArrow: '<div class="feedback-slider-page feedback-slider-page-next">Следующая</div>' });
        sliderPro_m_width_r=$('.create-gallery-right').css('max-width');
        $('.create-gallery-info-right').css('max-width', sliderPro_m_width_r);
         sliderPro_width_r=$('.create-gallery-right').css('width');
        $('.create-gallery-info-right').css('width', sliderPro_width_r);

        sliderPro_m_width_l=$('.create-gallery-left').css('max-width');
        $('.create-gallery-info-left').css('max-width', sliderPro_m_width_l);
        sliderPro_width_l=$('.create-gallery-left').css('width');
        $('.create-gallery-info-left').css('width', sliderPro_width_l);
         $(window).resize(function() {
        sliderPro_m_width_r=$('.create-gallery-right').css('max-width');
        $('.create-gallery-info-right').css('max-width', sliderPro_m_width_r);
         sliderPro_width_r=$('.create-gallery-right').css('width');
        $('.create-gallery-info-right').css('width', sliderPro_width_r);

        sliderPro_m_width_l=$('.create-gallery-left').css('max-width');
        $('.create-gallery-info-left').css('max-width', sliderPro_m_width_l);
        sliderPro_width_l=$('.create-gallery-left').css('width');
        $('.create-gallery-info-left').css('width', sliderPro_width_l);
    });
    $(function() {
        var now = $('.feedback-slider-page-index-now'),
            max = $('.feedback-slider-page-index-max'),
            now_val = 1,
            max_val = Math.round(($(".feedback-slider img").length / slide_to_show));
        now.text(now_val);
        max.text(max_val);
        $(".feedback-slider").children.length;
        if (now_val == 1) { $('.feedback-slider-page-prev').attr('style', 'opacity: 0.5;'); } $('.feedback-slider-page-next').on('click', function(e) {
            e.preventDefault();
            if (now_val < max_val) {+now_val++; }
            if (now_val == max_val) { $('.feedback-slider-page-next').attr('style', 'opacity: 0.5;'); } $('.feedback-slider-page-prev').attr('style', 'opacity: 1;');
            console.log(now_val);
            now.text(now_val);
        });
        $('.feedback-slider-page-prev').on('click', function() {
            if (now_val > 1) {+now_val--; };
            $('.feedback-slider-page-next').attr('style', 'opacity: 1;');
            if (now_val == 1) { $('.feedback-slider-page-prev').attr('style', 'opacity: 0.5;'); } now.text(now_val);
        });
    });
    $('.popup-order-open').on('click', function() { $('.popup-order').fadeIn(); });
    $('.watch-catalog').on('click', function() {
        if(width>869){
        $('.popup-idea').fadeIn();
        $(' .popup-idea-nav').slick({ infinite: false, slidesToShow: 5, slidesToScroll: 1, prevArrow: '<div class="popup-idea-nav-prevArrow"></div>', nextArrow: '<div class="popup-idea-nav-nextArrow"></div>' });
        } else {
            $('.popup-catalog').fadeIn();
        }
    });

    $("input[type=tel]").mask("+7 (999) 999-99-99");
    $('.popup-call-open').on('click', function() { $('.popup-call').fadeIn(); });
    $('.popup-catalog-open').on('click', function() { $('.popup-catalog').fadeIn(); });
    $('.popup-close').on('click', function() { $('.popup').fadeOut(); });
    $('.fool-left').on('click', function() {
        $('.popup-fool-left').fadeIn();
        $('.popup-fool-left-slider').sliderPro({ width: 770, height: 530, fade: true, arrows: true, buttons: false, shuffle: true, smallSize: 500, mediumSize: 1000, largeSize: 3000, thumbnailArrows: true, autoplay: false, thumbnailsPosition: 'left', thumbnailWidth: 79, thumbnailHeight: 78 });
    });
    $('.fool-right').on('click', function() {
        $('.popup-fool-right').fadeIn();
        $('.popup-fool-right-slider').sliderPro({ width: 770, height: 530, fade: true, arrows: true, buttons: false, shuffle: true, smallSize: 500, mediumSize: 1000, largeSize: 3000, thumbnailArrows: true, autoplay: false, thumbnailsPosition: 'left', thumbnailWidth: 79, thumbnailHeight: 78 });
    });

});