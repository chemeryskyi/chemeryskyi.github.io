$('.full-img').on('click', function() { var img_src = $(this).attr('src');
    $('body').append('<div class="popup popup-full-img"><div class="popup-full-img-box"><div class="popup-close-full"></div><div class="img-box"><img src="big/' + img_src + '" class="img-big"></div></div></div>');
    $('.popup-close-full').on('click', function(event) { event.preventDefault();
        $('.popup-full-img').fadeOut();
        $(".popup-full-img").remove(); }); if ($('.popup-full-img').length) { $(document).mouseup(function(e) { var div = $(".popup-full-img-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup-full-img').fadeOut();
                $(".popup-full-img").remove(); } }); } else { $(document).mouseup(function(e) { var div = $(".popup-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup').fadeOut();
                $(".popup-img").remove(); } }); }; });
$('.example-button').on('click', function() {
    var slider = $(this).parent().siblings('.example-img').children().attr('data-src');
    if ($(this).data('photo') == 1) { $('body').append('<div class="popup popup-img"><div class="popup-box"><div class="popup-close popup-img-close"></div><h2 class="popup-header">Описание проекта</h2><div class="popup-img-box"><div class="popup-img-min"><a data-fancybox="gallery2" href="' + slider + '1.jpg" style="display:inline"><img src="' + slider + '1.jpg"></a></div></div><form action="mail.php" method="post" class="popup-img-form" data-type="tc" data-form="cons-form"><input type="tel" placeholder="+7 (___) ___-__-__" name="phone"><button class="button popup-img-button send-button">Бесплатная консультация</button><label><input class="checkbox" type="checkbox" name="polyticy" checked><span class="checkbox-custom"></span><span class="label">Я согласен на обработку персональных данных</span></label></form></div></div>'); } else { $('body').append('<div class="popup popup-img"><div class="popup-box"><div class="popup-close popup-img-close"></div><h2 class="popup-header">Описание проекта</h2><div class="popup-img-box"><div class="popup-img-min"><a data-fancybox="gallery2" href="' + slider + '1.jpg" style="display:inline"><img src="' + slider + '1.jpg"></a><a data-fancybox="gallery2" style="display:inline" href="' + slider + '2.jpg"><img src="' + slider + '2.jpg" ></a></div></div><form action="mail.php" method="post" class="popup-img-form" data-type="tc" data-form="cons-form"><input type="tel" placeholder="+7 (___) ___-__-__" name="phone"><button class="button popup-img-button send-button">Бесплатная консультация</button><label><input class="checkbox" type="checkbox" name="polyticy" checked><span class="checkbox-custom"></span><span class="label">Я согласен на обработку персональных данных</span></label></form></div></div>'); } $().fancybox({ selector: '[data-fancybox="gallery2"]', loop: true });
    $('.popup-img').fadeIn();
    $("input[type=tel]").mask("+7 (999) 999-99-99");
    $('.send-button').on('click', function(e) {
        e.preventDefault();
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var tel = $(this).siblings("input[type=tel]").val();
        var form = $(this).parent(),
            form_type = form.attr('data-form'),
            check = $(this).siblings("label").children('input[type=checkbox]').prop("checked"),
            email = $(this).siblings("input[name=email]").val(),
            email_ok = 0,
            tel_ok = 0;
        check_ok = 0;
        if (check) { check_ok = 1;
            $(this).siblings("label").css('color', '#b9b9b9') } else { check_ok = 0;
            $(this).siblings("label").css('color', 'red') };
        if (pattern.test(email)) { $(this).siblings("input[name=email]").css({ 'border-color': 'none', 'border-color': '#ffea00' });
            email_ok = 1; } else { $(this).siblings("input[name=email]").css('border-color', 'red'); };
        if (tel.length == 0) { $(this).siblings("input[type=tel]").css('border-color', 'red'); } else if (tel == '+7 (___) ___-__-__') { $(this).siblings("input[type=tel]").css('border-color', 'red') } else if (tel.indexOf('_') + 1) { $(this).siblings("input[type=tel]").css('border-color', 'red') } else { $(this).siblings("input[type=tel]").css({ 'border-color': 'none', 'border-color': '#ffea00' });
            tel_ok = 1; }
        if (tel_ok != 0 && check_ok != 0) {
            msg = form.serialize()
            $.ajax({ type: 'POST', url: 'mail.php', data: msg, success: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                    form[0].reset(); }, error: function(data) {} });
        };
    });
    $('.full-img-slider').on('click', function() { var img_src = $(this).attr('src'),
            img_src_s = $(this).siblings('img').attr('src'); var img = new Image();
        img.onload = function() { var koef = this.width / this.height,
                koef_n = 8 / 6; if (koef < koef_n) { $('.img-big').attr('class', 'full-img-slider-window') }; };
        img.src = "big/" + img_src_s;
        $('body').append('<div class="popup popup-full-img popup-full-img-vs-slider"><div class="popup-full-img-box"><div class="popup-close-full"></div><div class="popup-full-img-slider"><div class="img-box"><img src="big/' + img_src + '" class="img-big img-big_o"></div><div class="img-box"><img src="big/' + img_src_s + '" class="img-big img-big_s"></div></div></div></div>');
        $('.popup-full-img-vs-slider').fadeIn(function() { $(".popup-full-img-slider").slick({ infinite: false, dots: false, arrows: true, slidesToShow: 1, slidesToScroll: 1, prevArrow: '<div class="example-prevArrow mid"></div>', nextArrow: '<div class="example-nextArrow mid"></div>' }); });
        $('.popup-close-full').on('click', function(event) { event.preventDefault();
            $('.popup-full-img').fadeOut();
            $(".popup-full-img").remove(); }); if ($('.popup-full-img').length) { $(document).mouseup(function(e) { var div = $(".popup-full-img-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup-full-img').fadeOut();
                    $(".popup-full-img").remove(); } }); } else { $(document).mouseup(function(e) { var div = $(".popup-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup').fadeOut();
                    $(".popup-img").remove(); } }); }; });
    $('.popup-img-close').on('click', function(event) { event.preventDefault();
        $('.popup-img').fadeOut();
        $(".popup-img").remove(); });
});
$("input[type=tel]").mask("+7 (999) 999-99-99");

$(document).mouseup(function(e) { var div = $(".popup-box"); if (!div.is(e.target) && div.has(e.target).length === 0) { $('.popup-polyticy, .popup-call,.popup-yourProj, .popup-price, .popup-review').fadeOut(); } });
$('.popup-close').on('click', function() { $('.popup-polyticy, .popup-call,.popup-yourProj, .popup-price, .popup-review').fadeOut(); });
$('.main-button, .how-button').on('click', function(event) { event.preventDefault();
    $('.popup-call').fadeIn(); });
$('.yourProj-button').on('click', function(event) { event.preventDefault();
    $('.popup-yourProj').fadeIn(); });
$('.price-button').on('click', function(event) { event.preventDefault();
    $('.popup-price').fadeIn(); });
$('.footer-mid span').on('click', function(event) { event.preventDefault();
    $('.popup-polyticy').fadeIn(); });
! function(i) { var o, n;
    i(".title_block").on("click", function() { o = i(this).parents(".accordion_item"), n = o.find(".info"), o.hasClass("active_block") ? (o.removeClass("active_block"), n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(), o.siblings(".active_block").removeClass("active_block").children(".info").stop(!0, !0).slideUp()) }) }(jQuery);
var rellax = new Rellax('.rellax');
$('.main-nav-burger').on('click', function() { $('.main-nav').toggleClass('main-nav-active');
    $('.main-nav-burger').toggleClass('main-nav-burger-active'); });
$('.brus-list-slider, .log-list-slider, .carcass-list-slider').slick({ infinite: true, slidesToShow: 3, slidesToScroll: 1, dots: false, prevArrow: '<div class="example-prevArrow "></div>', nextArrow: '<div class="example-nextArrow "></div>', responsive: [{ breakpoint: 682, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
$('.review-slider').slick({ infinite: false, dots: true, arrows: false, slidesToShow: 3, slidesToScroll: 3, responsive: [{ breakpoint: 682, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 481, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
$('.ready-slider').slick({ slidesToShow: 1, slidesToScroll: 1, fade: true, asNavFor: '.ready-slider-nav', prevArrow: '<div class="ready-prevArrow "></div>', nextArrow: '<div class="ready-nextArrow "></div>' });
$('.ready-slider-nav').slick({ slidesToShow: 6, slidesToScroll: 1, asNavFor: '.ready-slider', prevArrow: '<div class="ready-nav-prevArrow "></div>', nextArrow: '<div class="ready-nav-nextArrow "></div>', focusOnSelect: true, responsive: [{ breakpoint: 576, settings: { slidesToShow: 4, slidesToScroll: 1 } }] });
$(function() { $(window).scroll(function() { var top = $(document).scrollTop(); var main = $('.main').height(); var height1 = $(document).height() - $(window).height() - main; var result = $(document).scrollTop(); if (top < main) { $(".main-header-box").removeClass("main-header-fix"); } else { $(".main-header-box").addClass("main-header-fix"); } }); });
$("a[href]").bind("click", function(e) { var anchor = $(this);
    $('html, body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top }, 1500);
    e.preventDefault(); return false; });

function updater(d, h, m, s) { var baseTime = new Date(2018, 2, 30); var period = 31 * 24 * 60 * 60 * 1000;

    function update() { var cur = new Date(); var diff = period - (cur - baseTime) % period; var millis = diff % 1000;
        diff = Math.floor(diff / 1000); var sec = diff % 60; if (sec < 10) sec = "0" + sec;
        diff = Math.floor(diff / 60); var min = diff % 60; if (min < 10) min = "0" + min;
        diff = Math.floor(diff / 60); var hours = diff % 24; if (hours < 10) hours = "0" + hours; var days = Math.floor(diff / 24);
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = min;
        s.innerHTML = sec;
        setTimeout(update, millis); } setTimeout(update, 0); } updater(document.getElementById("days"), document.getElementById("hours"), document.getElementById("minutes"), document.getElementById("seconds"));
$('.review-full1').on('click', function(event) { event.preventDefault();
    $('.popup-review1').fadeIn(); });
$('.review-full2').on('click', function(event) { event.preventDefault();
    $('.popup-review2').fadeIn(); });
$('.review-full3').on('click', function(event) { event.preventDefault();
    $('.popup-review3').fadeIn(); });
$('.review-full4').on('click', function(event) { event.preventDefault();
    $('.popup-review4').fadeIn(); });
$('.send-button_off').on('click', function(e) {
    e.preventDefault();
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var tel = $(this).siblings("input[type=tel]").val();
    var form = $(this).parent(),
        check = $(this).siblings("label").children('input[type=checkbox]').prop("checked"),
        email = $(this).siblings("input[type=email]").val(),
        form_type = form.attr('data-form'),
        email_ok = 0,
        tel_ok = 0;
    check_ok = 0;
    if (check) { check_ok = 1;
        $(this).siblings("label").css('color', '#b9b9b9') } else { check_ok = 0;
        $(this).siblings("label").css('color', 'red') };
    if (pattern.test(email)) { $(this).siblings("input[type=email]").css({ 'border-color': 'none', 'border-color': '#ffea00' });
        email_ok = 1; } else { $(this).siblings("input[type=email]").css('border-color', 'red'); };
    if (tel.length == 0) { $(this).siblings("input[type=tel]").css('border-color', 'red'); } else if (tel == '+7 (___) ___-__-__') { $(this).siblings("input[type=tel]").css('border-color', 'red') } else if (tel.indexOf('_') + 1) { $(this).siblings("input[type=tel]").css('border-color', 'red') } else { $(this).siblings("input[type=tel]").css({ 'border-color': 'none', 'border-color': '#ffea00' });
        tel_ok = 1; }
    if (form.attr('data-type') == 'tc') {
        if (tel_ok != 0 && check_ok != 0) {
            msg = form.serialize()
            $.ajax({ type: 'POST', url: 'mail.php', data: msg, success: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                    form[0].reset(); }, error: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                    form[0].reset(); } });
        };
    };
    if (form.attr('data-type') == 'tmc') {
        if (tel_ok != 0 && check_ok != 0 && email_ok != 0) {
            msg = form.serialize()
            $.ajax({ type: 'POST', url: 'mail.php', data: msg, success: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                    form[0].reset(); }, error: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                    form[0].reset(); } });
        };
    };
    if (form.attr('data-type') == 'tmfc') { if (tel_ok != 0 && check_ok != 0 && email_ok != 0) { var formData = new FormData(form);
            formData.append('image', $('input[type=file]')[0].files[0]);
            msg = form.serialize();
            $.ajax({ type: 'POST', url: 'mail.php', data: formData, processData: false, contentType: false, success: function(data) { msg = form.serialize();
                    $.ajax({ type: 'POST', url: 'mail.php', data: msg, success: function(data) { yaCounter48308294.reachGoal(form_type);
                            $('.popup').fadeOut();
                            $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                            form[0].reset(); }, error: function(data) { yaCounter48308294.reachGoal(form_type);
                            $('.popup').fadeOut();
                            $('.popup-thanks').fadeIn().delay(1000).fadeOut();
                            form[0].reset(); } }); }, error: function(data) { yaCounter48308294.reachGoal(form_type);
                    $('.popup').fadeOut();
                    form[0].reset(); } }); }; };
});


ymaps.ready(function() { var myMap = new ymaps.Map('map', { center: [55.847688, 37.654021], zoom: 16, controls: [] }, { searchControlProvider: 'yandex#search' }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark = new ymaps.Placemark([55.846308, 37.655394], {}, { iconLayout: 'default#image', iconImageHref: 'img/marker.png', iconImageSize: [46, 54], iconImageOffset: [-15, -54] });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark) });