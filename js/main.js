function prettyLog(o) { console.log("%c " + o, "color: green; font-weight: bold;") } $(".popup-open").on("click", function() {
    var o = $(this).attr("data-src"),
        t = $(this).attr("data-adaptive");
    "true" == t ? ($(".open-phone").attr("style", "display:block"), $(".open-ipad").attr("style", "display:block")) : ($(".open-phone").attr("style", "display:none"), $(".open-ipad").attr("style", "display:none")), $(".monitor").attr("src", o), $(".popup").fadeIn().addClass("popup-up")
}), $(".review-open").on("click", function() { $(".who-review").toggleClass("review-active"), $(".review-open").toggleClass("review-active") }), $(".open-phone").on("click", function() { $(".monitor").toggleClass("phone") }), $(".open-ipad").on("click", function() { $(".monitor").toggleClass("ipad") }), $(".open-desctop").on("click", function() { $(".monitor").removeClass("ipad"), $(".monitor").removeClass("phone") }), $(".popup-close").on("click", function() { $(".popup").fadeOut(), $(".monitor").removeClass("ipad"), $(".monitor").removeClass("phone") }), $("a[href]").bind("click", function(o) { var t = $(this); return $("html, body").stop().animate({ scrollTop: $(t.attr("href")).offset().top }, 500), o.preventDefault(), !1 }), document.addEventListener("DOMContentLoaded", function() { new Typed("#typed", { stringsElement: "#typed-strings", typeSpeed: 50, backSpeed: 20, startDelay: 1e3, loop: !1, loopCount: 1 / 0, onComplete: function(o) { prettyLog("onComplete " + o) }, preStringTyped: function(o, t) { prettyLog("preStringTyped " + o + " " + t) }, onStringTyped: function(o, t) { prettyLog("onStringTyped " + o + " " + t) }, onLastStringBackspaced: function(o) { prettyLog("onLastStringBackspaced " + o) }, onTypingPaused: function(o, t) { prettyLog("onTypingPaused " + o + " " + t) }, onTypingResumed: function(o, t) { prettyLog("onTypingResumed " + o + " " + t) }, onReset: function(o) { prettyLog("onReset " + o) }, onStop: function(o, t) { prettyLog("onStop " + o + " " + t) }, onStart: function(o, t) { prettyLog("onStart " + o + " " + t) }, onDestroy: function(o) { prettyLog("onDestroy " + o) } }) });

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





var example = [
		{
        img: 'intelectdialog.jpg',
        src: '/intelectdialog'
    },
	{
        img: 'remont.jpg',
        src: '/remont'
    },
    {
        img: 'parillkin.jpg',
        src: '/parillkin'
    },
	{
        img: 'tochmark.jpg',
        src: '/tochmark'
    },
    
    {
        img: 'stairs.jpg',
        src: '/stairs'
    },
     {
        img: 'snek.jpg',
        src: '/PapaSnack'
    },

    {
        img: '3dkrep.ru.jpg',
        src: '/3dkrep.ru'
    },
    {
        img: '3dpoll.ru.jpg',
        src: '/3dpoll.ru'
    },
    {
        img: 'seminar.jpg',
        src: 'http://crystalit.biz/seminar/'
    },
    {
        img: 'numbers.jpg',
        src: 'http://matori.woof-woof.ru'
    },
     {
        img: 'bathmate2.jpg',
        src: '/bathmate2'
    },
    {
        img: 'bathmate.jpg',
        src: '/bathmate'
    },
    {
        img: '1c.jpg',
        src: 'http://1c-complex.ru/'
    },
    {
        img: 'makeup.jpg',
        src: 'http://идеальный-макияж.рф'
    }, {
        img: 'eldery.jpg',
        src: 'http://pansionat-serdze.ru/'
    },
    // {
    //     img: 'polygraf.jpg',
    //     src: 'http://невинномысская-типография.рф/'
    // },
    {
        img: 'stroy-doms.jpg',
        src: '/stroy/'
    }, {
        img: 'tm.jpg',
        src: '/TM'
    },
    {
        img: 'transform.jpg',
        src: 'opt_img/'
    }
    // ,
    // {
    //     img: 'lovs.jpg',
    //     src: '/lovs'
    // }
]


function createExamles() {
    let container = $('.example .content')

    for (var i = 0; i < example.length; i++) {
        container.append(' <div class="example-item"> <div class="example-item-box"> <img src="img/' + example[i].img + '" alt="Пример работы woof-woof.ru"> <div class="example-item-mask"> <a href="' + example[i].src + '" class="button" target="_blank">Открыть сайт</a> </div></div></div>')
    }

}


createExamles()


$('.form__what label').on('click', function() {
    let box = $(this).parents('.form__what'),
        index = $(this).index(),
        type = $(this).find('.radio-custom')[0].className.split(' ')[1],
        active = $('.form__what--active'),
        input = $('.contact__type'),
        contry = $('.country');

        input.val('')
    input.slideDown(300)


    switch (type) {
        case 'vk':
            input.attr('placeholder', 'Введите адрес страницы')
            input.attr('type', 'text')
            contry.hide(300)
            input.unmask();
            break;
        case 'telegram':
            input.attr('placeholder', 'Введите номер телефона')
            input.attr('type', 'tel')
            contry.show(300)
            input.mask('(999) 999 99 99');
            break;
        case 'whatsapp':
            input.attr('placeholder', 'Введите номер телефона')
            input.attr('type', 'tel')
            contry.show(300)
            input.mask('(999) 999 99 99');
            break;
        case 'viber':
            input.attr('placeholder', 'Введите номер телефона')
            input.attr('type', 'tel')
            contry.show(300)
            input.mask('(999) 999 99 99');
            break;
        case 'mail':
            input.attr('placeholder', 'Введите e-mail')
            input.attr('type', 'email')
            contry.hide(300)
            input.unmask();
            break;
        default:
            input.attr('placeholder', 'Введите логин skype')
            input.attr('type', 'text')
            contry.hide(300)
            input.unmask();
            break;
    }

    active.removeClass()
    active.addClass('form__what--active')
    active.addClass('active')
    active.addClass(type)
    active.attr('style', 'transform: translateX(' + index + '00%)')
})


$('.select__active').on('click', function() {
    let select = $(this).parents('.select'),
        active = $(this),
        list = select.find('.select__list');

    select.toggleClass('active');
    list.slideToggle(300);

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = select // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            list.slideUp(300);
            select.removeClass('active')
        }
    });

    list.find('li').on('click', function() {
        let text = $(this).text()

        active.text(text);
        list.slideUp(300);
        select.removeClass('active')
    })
})


$('.popup__close').on('click', function() {
    let box = $(this).parents('.popup__box'),
        popup = $(this).parents('.popupNew');

    box.addClass('hide');
    popup.fadeOut()
})


$('.contact__popup--open').on('click', function() {
    $(this).parents('.contact__popup').toggleClass('active');
})

$('.openPopup').on('click', function() {
    let popup = $('.popup__form'),
        box = popup.find('.popup__box')

    popup.fadeIn()
    box.removeClass('hide')



})

$('input.file').change(function(event) {
    let form = $(this).parents('form'),
        file = $(this),
        ileSize = file[0].files[0].size,
        fileName = file[0].files[0].name,
        fileInputName = form.find('.input__file--text');

    fileInputName.text(fileName)

});
$('.sendForm').on('click', function(e) {
    e.preventDefault()
    let form = $(this).parents('form'),
        name = form.find('input.name'),
        file = form.find('input.file'),
        fileBox = file.parents('.input__file'),
        fileInputName = form.find('.input__file--text'),
        unswer = form.find('input[name=unswer]'),
        contact__type = form.find('input.contact__type'),
        
        popup = form.parents('.popupNew');

    testInput(name)
    testInput(contact__type)



    if(form.find('input[name=unswer]:checked').length > 0){
    	$('.form__what').removeClass('error')
    } else {
    	$('.form__what').addClass('error')
    }

    if (file.val() === '') {
        fileBox.addClass('error')
    } else {
        let fileSize = file[0].files[0].size,
            fileName = file[0].files[0].name;
            if (fileSize < 1) {
                fileBox.addClass('error')
            } else {
                fileBox.removeClass('error')
            }

    }

    if (form.find('.error').length > 0) {
        let error = form.find('.error');
        error.each(function(index, el) {
            animeteError($(el))
        });
    } else {
    	if(contact__type.attr('type')==='tel'){
    		let active = form.find('.select__active').text()
    		contact__type.val(active+contact__type.val())
    	}
        form.append('<button class="hidden" style="display: none;">Отправить</button>')
        let hidden = form.find('.hidden');
        hidden.trigger('click')
        hidden.remove()
        popup.fadeOut();
        form[0].reset();
        input.slideUp()
        contry.slideUp()
        // form.submit();
        // let msg = form.serialize();
        // console.log(msg)
        // $.ajax({
        //     type: 'POST',
        //     url: 'sntmail.php',
        //     data: msg,
        //     success: function(data) {
        // $('.popupNew').fadeOut();
        // form[0].reset();
        // $('.popup__thanks').fadeIn().delay(1600).fadeOut();

        // },
        // error: function(data) {

        // }
        // });
    }

})


function testInput(arr) {
    let type = arr.attr('type'),pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    switch (type) {
        case 'tel':
            if (arr.val().length == 0 ||
                arr.val() == '+7 (___) ___-__-__' ||
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
        case 'checkbox':
            if (arr.prop('checked')) { arr.parents('label').removeClass('error') } else { arr.parents('label').addClass('error') };
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