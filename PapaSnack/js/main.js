$("a[href]").bind("click", function(e) {

    var anchor = $(this);

    $('html, body').stop().animate({

        scrollTop: $(anchor.attr('href')).offset().top - 0

    }, 1500);

    e.preventDefault();

    return false;

});







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





$('.select').on('click', function() {

    let select = $(this),

        list = select.find('.select__list'),

        active = select.find('.select__active'),

        input = select.find('input'),

        form = select.parents('form');

    select.toggleClass('active');



    if (select.hasClass('active')) {

        list.slideDown();

    } else {

        list.slideUp()

    }



    list.find('li').on('click', function(event) {

        event.preventDefault();

        let text = $(this).text()

        active.text(text)

        input.val(text)

        form.find('.select.hide').each(function(index, el) {

            $(el).removeClass('hide')

        });

    });



    $(document).mouseup(function(e) { // событие клика по веб-документу

        var div = select; // тут указываем ID элемента

        if (!div.is(e.target) // если клик был не по нашему блоку

            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам

            select.removeClass('active');

            // ist.slideDown();

            select.find('.select__list').slideUp()



        }

    });

})





$('.sendBtn').on('click', function(e) {

    e.preventDefault()

    let form = $(this).parents('form');



    form.find('input').each(function(index, el) {

        testInput($(el))

    });



    form.find('.select').each(function(index, el) {

        let select_input = $(el).find('input'),

            select = $(el);



        if (select.length > 0) {

            if (select_input.val().length < 1) {

                select.addClass('error')

            } else {

                select.removeClass('error')

            }

        }

    });



    if (form.find('.error').length > 0) {

        let error = form.find('.error');

        error.each(function(index, el) {

            animeteError($(el))

        });

    } else {

        let msg = form.serialize();
        let name = form.find('input[name=name]').val()+' '+form.find('input[name=lastname]').val(),
            phone = form.find('input[name=phone]').val(),
            email = form.find('input[name=email]').val(),
            comment = '',
            dob = form.find('input[name=dob]').val(),
            money = form.find('input[name=howMuch]').val(),
            employees = form.find('input[name=employees]').val(),
            position = form.find('input[name=position]').val(),
            company = form.find('input[name=company]').val();


            
            if(form.find('input[name=comment]').length>0){
                comment = form.find('input[name=comment]').val();
            } else {
               comment = dob
            }
    

        // $.ajax({

        //     type: 'POST',

        //     url: 'allmail.php',

        //     data: msg,

        //     success: function(data) {
            sendUnisender(email,name,phone,'16526701')

                WBK.sendCrmLead(35448, {
                    'name': name,
                    'phone': phone,
                    'email': email,
                    'comment': comment,
                    'inbox_type_id': 371949,
                    'pipeline_id': 0000,
                    'values_custom': [
                        { 
                            input_id: '130407', 
                            value: money
                        },
                        { 
                            input_id: '130371', 
                            value: employees 
                        },
                        { 
                            input_id: '130197', 
                            value: position
                        },
                        { 
                            input_id: '130194', 
                            value: company
                        }
                    ]
                });

                $('.popup').fadeOut();

                form[0].reset();

                $('.popup__thanks').fadeIn().delay(1600).fadeOut();

        //     },

        //     error: function(data) {



        //     }

        // });

    }

})



$('.free__btn').on('click', function(e) {

    e.preventDefault()

    let form = $(this).parents('form');



    form.find('input').each(function(index, el) {

        testInput($(el))

    });



    if (form.find('.error').length > 0) {

        let error = form.find('.error');

        error.each(function(index, el) {

            animeteError($(el))

        });

    } else {

        // let msg = form.serialize();

        // $.ajax({

        //     type: 'POST',

        //     url: 'mail.php',

        //     data: msg,

        //     success: function(data) {
                let email = form.find('input[type=email]').val();
                sendUnisender(email,'','','16557701')
                $('.popup__try').find('input[type=email]').val(email)

                $('.popup__try').fadeIn()



        //     },

        //     error: function(data) {



        //     }

        // });

    }



})



function testInput(arr) {

    let type = arr.attr('type'),

        pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;



    switch (type) {

        case 'tel':

            if (arr.val().length == 0 ||

                arr.val() == '+38 (___) ___-__-__' ||

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
            let name = arr.attr('name');
            if (name !== 'dob' && arrVal === "") {

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





$('.popup__close').on('click', function(e) {

    e.preventDefault()

    $(this).parents('.popup').fadeOut();

})



$('.footer__btn').on('click', function(e) {

    e.preventDefault()

    $('.popup__call').fadeIn()

})





$('.header__burger').on('click', function(e) {

    e.preventDefault()

    $(this).toggleClass('active');

    $('.header__nav').toggleClass('active');

})





$('.main__btn').on('click', function(e) {

    e.preventDefault()

    $('.popup__try').fadeIn()

})


function sendUnisender(email,name,phone,list){
    let key = '69uafmgyzkdrfyce8ahdq358j96whdpcuqps5fea',
        tag = 'papasnack.ru',
        double_optin = '3';  
            // Если 0, то мы считаем, что контакт только высказал желание подписаться, но ещё не подтвердил подписку. В этом случае контакту будет отправлено письмо-приглашение подписаться. Текст письма будет взят из свойств первого списка из list_ids. Кстати, текст можно поменять с помощью метода updateOptInEmail или через веб-интерфейс.
            //Если 3, то также считается, что у Вас согласие контакта уже есть, контакт добавляется со статусом «новый».
            //Если 4, то система выполняет проверку на наличие контакта в ваших списках. Если контакт уже есть в ваших списках со статусом «новый» или «активен», то адрес просто будет добавлен в указанный вами список. Если же контакт отсутствует в ваших списках или его статус отличен от «новый» или «активен», то ему будет отправлено письмо-приглашение подписаться. Текст этого письма можно настроить для каждого списка с помощью метода  updateOptInEmail или через веб-интерфейс.
            $.ajax({

            type: 'GET',

            url: 'https://api.unisender.com/ru/api/subscribe?format=json&api_key='+key+'&list_ids='+list+'&fields[email]='+email+'&fields[Name]='+name+'&fields[phone]='+phone+'&tags='+tag+'&double_optin='+double_optin+'&overwrite=1',

            success: function(data) {
            
                console.log(data)
                
            },

            error: function(data) {



            }

        });
}

