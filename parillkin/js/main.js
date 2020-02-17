/*

  Masked Input plugin for jQuery

  Copyright (c) 2007-2013 Josh Bush (digitalbush.com)

  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)

  Version: 1.3.1

*/
(function(e) {
    function t() { var e = document.createElement("input"),
            t = "onpaste"; return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input" } var n, a = t() + ".mask",
        r = navigator.userAgent,
        i = /iphone/i.test(r),
        o = /android/i.test(r);
    e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }, e.fn.extend({ caret: function(e, t) { var n; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() { this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()) })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), { begin: e, end: t }) }, unmask: function() { return this.trigger("unmask") }, mask: function(t, r) { var c, l, s, u, f, h; return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function(e, t) { "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null) }), this.trigger("unmask").each(function() {
                function c(e) { for (; h > ++e && !s[e];); return e }

                function d(e) { for (; --e >= 0 && !s[e];); return e }

                function m(e, t) { var n, a; if (!(0 > e)) { for (n = e, a = c(t); h > n; n++)
                            if (s[n]) { if (!(h > a && s[n].test(R[a]))) break;
                                R[n] = R[a], R[a] = r.placeholder, a = c(a) } b(), x.caret(Math.max(f, e)) } }

                function p(e) { var t, n, a, i; for (t = e, n = r.placeholder; h > t; t++)
                        if (s[t]) { if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break;
                            n = i } }

                function g(e) { var t, n, a, r = e.which;
                    8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault()) }

                function v(t) { var n, a, i, l = t.which,
                        u = x.caret();
                    t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault()) }

                function k(e, t) { var n; for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder) }

                function b() { x.val(R.join("")) }

                function y(e) { var t, n, a = x.val(),
                        i = -1; for (t = 0, pos = 0; h > t; t++)
                        if (s[t]) { for (R[t] = r.placeholder; pos++ < a.length;)
                                if (n = a.charAt(pos - 1), s[t].test(n)) { R[t] = n, i = t; break } if (pos > a.length) break } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t); return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f } var x = e(this),
                    R = e.map(t.split(""), function(e) { return "?" != e ? l[e] ? r.placeholder : e : void 0 }),
                    S = x.val();
                x.data(e.mask.dataName, function() { return e.map(R, function(e, t) { return s[t] && e != r.placeholder ? e : null }).join("") }), x.attr("readonly") || x.one("unmask", function() { x.unbind(".mask").removeData(e.mask.dataName) }).bind("focus.mask", function() { clearTimeout(n); var e;
                    S = x.val(), e = y(), n = setTimeout(function() { b(), e == t.length ? x.caret(0, e) : x.caret(e) }, 10) }).bind("blur.mask", function() { y(), x.val() != S && x.change() }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function() { setTimeout(function() { var e = y(!0);
                        x.caret(e), r.completed && e == x.val().length && r.completed.call(x) }, 0) }), y() })) } }) })(jQuery);





$('input[type=tel]').mask('+9 (999) 999 99 99');


$('.parentList').append('<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L5.5 6L7.25 4L9 2"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>')

$('.materials__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
    nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

})


$('.review__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
    nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',
    dots: true,
    adaptiveHeight: true,
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})

$('.materials__arrow').attr('style', 'display: flex;')


$('.plans__gallery--main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.plans__gallery--nav'
});
$('.plans__gallery--nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.plans__gallery--main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
    nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',

});



$('.plans__nav--item').on('click', function(e) {
    e.preventDefault()

    let number = $(this).index(),
        content = $('.plans__content--item').eq(number),
        galleryMain = content.find('.plans__gallery--main'),
        galleryNav = content.find('.plans__gallery--nav');


    if (number === 3) {
        $('.popup__comparison').fadeIn()
    } else {
        $('.plans__nav--item.active').removeClass('active')
        $(this).addClass('active')

        $('.plans__content--item.active').removeClass('active')

        content.addClass('active')

        $('.plans__gallery--main').slick('unslick');
        $('.plans__gallery--nav').slick('unslick');


        $('.plans__gallery--main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.plans__gallery--nav'
        });
        $('.plans__gallery--nav').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.plans__gallery--main',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            infinite: true,
            arrows: false,
            prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
            nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',

        });

    }

})


$('.catalog__item--btn').on('click',function(){
    let index = $(this).parents('.catalog__item').index()

    $('.plans__nav--item.active').removeClass('active')
    $('.plans__content--item.active').removeClass('active')

    $('.plans__nav--item').eq(index).addClass('active')
    $('.plans__content--item').eq(index).addClass('active')
})

$('.popup__info--comparison').on('click', function(e) {
    e.preventDefault()

    $('.popup__comparison').fadeIn()
})

$('.comparisonOpen').on('click', function(e) {
    e.preventDefault()

    $('.popup__comparison').fadeIn()
})

$('.popup__tubs--navItem').on('click', function(e) {
    e.preventDefault()


    let number = $(this).index(),
        popup = $(this).parents('.popup'),
        content = popup.find('.popup__tubs--contentItem').eq(number);


    popup.find('.popup__tubs--navItem.active').removeClass('active')
    $(this).addClass('active')

    popup.find('.popup__tubs--contentItem.active').removeClass('active')

    content.addClass('active')

})


$('.popup__close').on('click', function(e) {
    e.preventDefault()
    $(this).parents('.popup').fadeOut()
})


$('.examples__item--open').on('click', function(e) {
    e.preventDefault()
    $('.popup__gallery').fadeIn()
})

$('.header__contact--call,.backCall').on('click', function(e) {
    e.preventDefault()
    $('.popup__call').find('input[name="Форма: "]').val('Обратный звонок')
    $('.popup__call').find('.blockHeader').text('ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК')

    $('.popup__call').fadeIn()
})

$('.main__banner--link').on('click', function(e) {
    e.preventDefault()
    $('.popup__call').find('input[name="Форма: "]').val('БАННЫЙ КОМПЛЕКТ в подарок')
    $('.popup__call').find('.blockHeader').text('Получить БАННЫЙ КОМПЛЕКТ в подарок')

    $('.popup__call').fadeIn()
})
// $('.popup__slider--content').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.popup__slider--nav'
// });
// $('.popup__slider--nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.popup__slider--content',
//     dots: false,
//     centerMode: false,
//     focusOnSelect: true,
//     infinite: true,
//     arrows: false,
//     prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
//     nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',

// });

$('.popup__call--btn').on('click', function(e) {
    e.preventDefault()

    let form = $(this).parents('form'),
        popup = $(this).parents('.popup');



    form.find('input').each(function(index, el) {

        testInput($(el))

    });

    if (form.find('.error').length > 0) {

        let error = form.find('.error');

        error.each(function(index, el) {

            animeteError($(el))

        });

    } else {

        let msg = form.serialize();

        $.ajax({

            type: 'POST',

            url: 'maiL.php',

            data: msg,

            success: function(data) {

                popup.fadeOut()
                $('.popup__thanks').fadeIn()

            },

            error: function(data) {



            }

        });

    }
})

$(document).scroll(function(event) {
    if ($(document).scrollTop() > $('.main').height() + 20) {
        $('.header--fixed').addClass('active');
    } else {
        $('.header--fixed').removeClass('active');

    }

});


$('.popup__bath--more').on('click', function() {
    let btn = $(this),
        main = btn.parents('.popup__bath--main'),
        detal = main.siblings('.popup__bath--detalic'),
        info = detal.find('.popup__bath--detalicInfo'),
        img = detal.find('.popup__bath--detalicImg');

    btn.toggleClass('active')

    if (!btn.hasClass('active')) {

        btn.text('Открыть подробную информацию')
        info.slideUp();
        img.slideUp();
    } else {
        btn.text('Скрыть подробную информацию')
        info.slideDown();
        img.slideDown();
        // detal.attr('style','display:flex')

    }


})

$('.plans__item--btn').on('click', function() {

    let indexItem = $(this).parents('.plans__item').index(),
        indexParent = $(this).parents('.plans__content--item').index()


    let popup = $('.boxForDetail__type').eq(indexParent).find('.popup__detail').eq(indexItem)



    popup.fadeIn()
    let content = popup.find('.popup__slider--content'),
        nav = popup.find('.popup__slider--nav');

    content.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: nav
    });

    nav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: content,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        prevArrow: '<div class="materials__arrow materials__arrow--prev"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L3 14L15 26" stroke="white" stroke-width="3"/></svg></div>',
        nextArrow: '<div class="materials__arrow materials__arrow--next"><svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="white" stroke-width="3"/></svg></div>',

    });

})

$('.popup__calculator--prev').on('click', function(e) {
    e.preventDefault()
    let index = $(this).parents('.popup__calculator--step').index()


    $('.popup__calculator--step.active').removeClass('active')
    $('.popup__calculator--navItem.active').removeClass('active')

    $('.popup__calculator--navItem').eq(index - 1).addClass('active')
    $('.popup__calculator--step').eq(index - 1).addClass('active')

})
// квиз-калькулятор


$('.popup__info--btn').on('click', function(e) {
    e.preventDefault()
    let text = $(this).parents('.popup').find('.popup__header.blockHeader').text()

    $('.popup__call').find('input[name="Форма: "]').val('Заказ: ' + text)
    $('.popup__call').find('.blockHeader').text('Заказать')

    $('.popup__call').fadeIn()
})
$('.popup__info--consult').on('click', function(e) {
    e.preventDefault()
    let text = $(this).parents('.popup').find('.popup__header.blockHeader').text()

    $('.popup__call').find('input[name="Форма: "]').val('Консультация: ' + text)
    $('.popup__call').find('.blockHeader').text('Получить консультацию')

    $('.popup__call').fadeIn()
})

$('.calculatorOpen').on('click', function(e) {
    e.preventDefault()
    $('.popup__calculator').fadeIn()

    $('.popup__calculator--step:eq(0)').find('.popup__table--row').each(function(index, el) {
        let btn = $('.popup__calculator--step:eq(0)').find('.popup__table--btn');
        btn.removeClass('hide')
        if ($(el).index() > btn.index()) {
            $(el).addClass('hide')
        }
    });

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $('.popup__box') // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.popup__calculator').fadeOut()
        }
    });

})
$('.popup__table--btn').on('click', function(e) {
    e.preventDefault()
    let table = $(this).parents('.popup__table')


    table.find('.hide').removeClass('hide')
    $(this).addClass('hide')
})


$('.popup__calculator--step:eq(0)').find('.popup__calculator--stepBtn').on('click', function(e) {
    e.preventDefault()
    let index = $(this).parents('.popup__table--col').index(),
        type = $(this).data('type')

    $('.configurationType').text(type)
    $('input[name=type]').val(type)
    $('.popup__bath--type').eq(index).addClass('active')
    nextNav()

})


$('.popup__calculator--step:eq(1)').find('.popup__calculator--stepBtn').on('click', function(e) {
    e.preventDefault()
    let bath = $(this).parents('.popup__bath'),
        price = bath.find('.popup__bath--price span').html(),
        size = bath.find('.popup__bath--infoItem:eq(1) .popup__bath--infoValue span').html() + ' x ' + bath.find('.popup__bath--infoItem:eq(2) .popup__bath--infoValue span').html(),
        steam = bath.find('.popup__bath--detalicRow:eq(0) .popup__bath--detalicValue').html(),
        washing = bath.find('.popup__bath--detalicRow:eq(1) .popup__bath--detalicValue').html(),
        waiting = bath.find('.popup__bath--detalicRow:eq(2) .popup__bath--detalicValue').html(),
        terrace = bath.find('.popup__bath--detalicRow:eq(3) .popup__bath--detalicValue').html(),
        height = bath.find('.popup__bath--detalicRow:eq(4) .popup__bath--detalicValue').html(),
        img = bath.find('.popup__bath--preview').attr('href');

    $('.priceConfiguration').text(price + ' руб.')
    $('.sizeConfiguration').text(size)
    $('.steamConfiguration').text(steam)
    $('.washingConfiguration').text(washing)
    $('.waitingConfiguration').text(waiting)
    $('.terraceConfiguration').text(terrace)
    $('.heightConfiguration').text(height)



    $('input[name=price]').val(price)
    $('input[name=size]').val(size)
    $('input[name=steam]').val(steam)
    $('input[name=washing]').val(washing)
    $('input[name=waiting]').val(waiting)
    $('input[name=terrace]').val(terrace)
    $('input[name=height]').val(height)


    $('.popup__calculator--resultImg').attr('src', img)

    calcPrice()

    nextNav()

})


$('.popup__calculator--colorItem').on('click', function(e) {
    e.preventDefault()
    let color = $(this).data('color'),
        parentIndex = $(this).parents('.popup__calculator--color').index(),
        colorBlock = $(this).parents('.popup__calculator--colorRow');

    $(this).parents('.popup__calculator--color').removeClass('error')

    colorBlock.find('.popup__calculator--colorItem').addClass('dismiss')
    $(this).removeClass('dismiss')
    switch (parentIndex) {
        case 2:
            $('input[name=wallColor]').val(color)
            break;
        default:
            $('input[name=dopColor]').val(color)
            break;
    }

})

$('.select').on('click', function(e) {
    e.preventDefault()
    let select = $(this),
        list = select.find('.select__list'),
        active = select.find('.select__active'),
        input = select.find('input');

    select.toggleClass('active');
    list.slideToggle()


    list.find('li').on('click', function(e) {
        e.preventDefault()
        let text = $(this).text(),
            dopPrice = $(this).data('dopprice');




        if (dopPrice) {
            active.addClass('bold')
            active.attr('data-price', dopPrice)
            changeDop()
        } else {
            active.removeClass('bold')
            active.attr('data-price', '')
            changeDop()
        }

        active.text(text)
        input.val(text)
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = select // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            select.removeClass('active');
            list.slideUp()
        }
    });

})

$('.select__box').each(function(index, el) {
    let label = $(el).find('.select__label').text(),
        input = $(el).find('input')
    input.val(label)
});

function valueWithotСurrency(arr) {
    arr = $('.' + arr).text()
    arr = arr.split(' ')
    arr.splice(-1, 1)
    arr = arr.join('')


    return arr
}


function changeDop() {

    let dopPrice = 0

    $('.select__active').each(function(index, el) {

        let price = +$(el).attr('data-price')

        if (price) {
            dopPrice = dopPrice + price
        }
    });

    $('input[name=dopPrice]').val(dopPrice)

    $('.dopPrice').text(dopPrice + ' руб.')
    calcPrice()
}

function calcPrice() {
    let priceConfiguration = +valueWithotСurrency('priceConfiguration'),
        dopPrice = +valueWithotСurrency('dopPrice'),
        finalPrice;


    finalPrice = priceConfiguration + dopPrice;
    $('input[name=finalPrice]').val(finalPrice)
    finalPrice = finalPrice.toString()
    finalPrice = finalPrice.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')

    $('.finalPrice').text(finalPrice + ' руб.')

}

function nextNav() {
    let active = $('.popup__calculator--navItem.active'),
        indexNav = active.index(),
        indexStep = $('.popup__calculator--step.active').index();

    active.removeClass('active')


    $('.popup__calculator--step.active').removeClass('active')
    $('.popup__calculator--step').eq(++indexStep).addClass('active')
    $('.popup__calculator--navItem').eq(++indexNav).addClass('active')
}










$('.sendCalculator').on('click', function(e) {
    e.preventDefault()

    let form = $(this).parents('form'),
        popup = $(this).parents('.popup');



    form.find('input').each(function(index, el) {

        testInput($(el))

    });

    if ($('input[name=wallColor]').val().length < 1) {
        $('.popup__calculator--color:eq(0)').addClass('error')
    } else {
        $('.popup__calculator--color:eq(0)').removeClass('error')
    }
    if ($('input[name=dopColor]').val().length < 1) {
        $('.popup__calculator--color:eq(1)').addClass('error')
    } else {
        $('.popup__calculator--color:eq(1)').removeClass('error')
    }

    if (form.find('.error').length > 0) {

        let error = form.find('.error');

        error.each(function(index, el) {

            animeteError($(el))

        });

    } else {

        let msg = form.serialize();

        $.ajax({

            type: 'POST',

            url: 'maiL.php',

            data: msg,

            success: function(data) {
        popup.fadeOut();
        let min = 1021,
            max = 7152

        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        $('.popup__final .blockHeader span').text('#' + number)

        $('.popup__final').fadeIn()


            },

            error: function(data) {



            }

        });

    }




})



$('.header__burger').on('click', function(e) {
    e.preventDefault()
    let burger = $(this);

    let header = $(this).parents('header');

    if (burger.hasClass('active')) {
        burger.removeClass('active')
        header.find('.header__nav').removeClass('active')
    } else {
        burger.addClass('active')
        header.find('.header__nav').addClass('active')

        // $(document).mouseup(function(e) { // событие клика по веб-документу
        //     var div = header.find('.header__nav') // тут указываем ID элемента
        //     if (!div.is(e.target) // если клик был не по нашему блоку
        //         &&
        //         div.has(e.target).length === 0) { // и не по его дочерним элементам
        //         burger.removeClass('active') // скрываем его
        //         header.find('.header__nav').removeClass('active')
        //     }
        // });
    }

})


if ($(window).width() < 770) {
    var headerHeight = 48
} else {
    var headerHeight = $('.header').innerHeight()
}

$(window).resize(function(event) {
    if ($(window).width() < 770) {
        var headerHeight = 48
    } else {
        var headerHeight = $('.header__fixed').innerHeight()
    }

});

$("a[href]").bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - (headerHeight + 30)
    }, 1500);
    e.preventDefault();
    return false;
});




$('.header__nav').find('a').on('click', function(e) {
    e.preventDefault()
    console.log('hhh')
    $('.header__burger.active').removeClass('active')
    $('.header__nav.active').removeClass('active')
})



function testInput(arr) {

    let type = arr.attr('type'),

        pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;



    switch (type) {

        case 'tel':

            if (arr.val().length == 0 ||

                arr.val().indexOf('_') > 0) {

                arr.addClass('error');

                arr.keyup(function(event) {

                    testInput(arr)

                });

            } else {

                arr.removeClass('error');

            }

            break;

        case 'email':

            if (pattern.test(arr.val())) { arr.removeClass('error') } else { arr.addClass('error') };

            break;

        default:

            let arrVal = $.trim(arr.val());


            if (arrVal === "") {

                arr.addClass('error');

                arr.keyup(function(event) {

                    testInput(arr)

                });

            } else {

                arr.removeClass('error');

            }


            break;

    }

}





function animeteError(arr) {

    arr.addClass('error__animate')

    setTimeout(function() {

        arr.removeClass('error__animate')

    }, 500);

}
































ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.149851, 37.466997],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.149851, 37.466997], {
            hintContent: 'Parillkin',
            balloonContent: 'г. Чехов, ул. Карвата д. 3, корпус 6 (микрорайоне Мирный)'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map.png',
            // Размеры метки.
            iconImageSize: [122, 56],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
});