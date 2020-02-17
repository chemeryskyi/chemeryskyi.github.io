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




  $('.intellect__item').on('click',function(e){
    e.preventDefault()
    $(this).toggleClass('active');
    $(this).find('.intellect__item-list').slideToggle()
  })



//   var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

  $('.video__button').on('click',function(e){
    e.preventDefault()
    $('.video__content').addClass('active');
    startVideo() 
  })

  function onYouTubeIframeAPIReady() { player = new YT.Player('player', { videoId: 'W_ZAwnnVu6g', events: { 'onStateChange': onPlayerStateChange } }); }
var done = false;

function onPlayerStateChange(event) { if (event.data == YT.PlayerState.PLAYING && !done) { setTimeout(stopVideo, 34000); } }

function stopVideo() { player.stopVideo(); }
function startVideo() { player.playVideo(); }


  $('.service__slider').slick({
    dots: true,
    adaptiveHeight: true,
    prevArrow:'<div class="service__arrow --prev"><svg width="71" height="71" viewBox="0 0 71 71"  xmlns="http://www.w3.org/2000/svg"><circle cx="35.5" cy="35.5" r="35"/><path d="M39 25L28 36L39 47" /></svg></div>',
    nextArrow:'<div class="service__arrow --next"><svg width="71" height="71" viewBox="0 0 71 71"  xmlns="http://www.w3.org/2000/svg"><circle cx="35.5" cy="35.5" r="35" /><path d="M39 25L28 36L39 47" /></svg></div>',
  
  })

  $('.conversion__btn').on('click', function(e){
    e.preventDefault()
    let type = $('.service__slide.slick-current').data('name');
    console.log(type)
  })



  $("a[href]").bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top 
    }, 1500);
    e.preventDefault();
    return false;
});


$('.popup__close').on('click', function(e){
    e.preventDefault()
    let box = $(this).parents('.popup__box'),
        popup = $(this).parents('.popup');
    box.removeClass('--active')
    popup.fadeOut() 
})


openPopup($('.openEntrance'), $('.popup__entrance'))
openPopup($('.openTry'), $('.popup__try'))
openPopup($('.openOrder'), $('.popup__order'))
openPopup($('.openBig'), $('.popup__big'))


function openPopup(button, popup){
	button.on('click', function(e){
	  	e.preventDefault()
	  	let box = popup.find('.popup__box')

	  	popup.fadeIn()
		setTimeout(function() {
			popup.attr('style','display:flex');
		}, 300);
		box.addClass('--active')

		if($(this).hasClass('openOrder')){
			let order = $(this).parents('.price__item').find('.price__item-header').text(),
				orderInput = popup.find('input[name=order]');
				orderInput.val(order)
		}

		if($(this).hasClass('integration__btn')){
			let nameInput = popup.find('input[name=formName]'),
				header = popup.find('.popup__header');

			header.text('Добавить CRM')
			nameInput.val(' Добавить свою CRM')
		}

		if($(this).hasClass('doubt__btn')){
			let nameInput = popup.find('input[name=formName]'),
				header = popup.find('.popup__header');

			header.text('Задать вопрос')
			nameInput.val('Задать вопрос')
		}

        if($(this).hasClass('openKnow')){
            let nameInput = popup.find('input[name=formName]'),
                header = popup.find('.popup__header');

            header.text('Узнать как работает')
            nameInput.val('Узнать как работает')
        }
        
		
	  	  	
	  		$(document).mouseup(function (e){
				var div = popup.find('.popup__box'); 
				if (!div.is(e.target) 
				    && div.has(e.target).length === 0) { 
					box.removeClass('--active')
					popup.fadeOut() 
					popup.find('.error').removeClass('error')

				}
			});

	  })
}


$('.redirectBtn').on('click', function(e){
	e.preventDefault()
	let popup = $(this).parents('.popup'),
		input = popup.find('input[name=entrance]:checked')

		if(input.val()){
			$('.radio-custom').removeClass('error')
			window.location = "https://"+input.val()+".intellectdialog.com"
		} else {
			$('.radio-custom').addClass('error')
		}

})


$('.tunnel__tabs-item').on('click', function(e){
	e.preventDefault()
	let index = $(this).index()
	$('.tunnel__tabs-item.--active').removeClass('--active')
	$(this).addClass('--active')
	$('.tunnel__list.--active').removeClass('--active')
	$('.tunnel__list').eq(index).addClass('--active')

})

$('.main__slider').slick({
	arrows: false,
	autoplay: true
})


$('.sendForm').on('click', function(e){
	e.preventDefault()
	let form = $(this).parents('form'),
        popup = $(this).parents('.popup'),
        textarea =  form.find('textarea');



    form.find('input').each(function(index, el) {

        testInput($(el))
    });

    if(textarea.length){
    	if(textarea.val().length==0){
    		textarea.addClass('error')
    	} else {
    		textarea.removeClass('error')
    	}
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

            url: 'mail.php',

            data: msg,

            success: function(data) {
        			popup.fadeOut();
                    form[0].reset();

                    let thanks = $('.popup__thanks');


                    thanks.fadeIn()
                    thanks.find('.popup__box').addClass('--active');


                    setTimeout(function() {
                        thanks.attr('style','display:flex');
                    }, 300);
                


                setTimeout(function() {
                    thanks.find('.popup__box').removeClass('--active')
                    thanks.fadeOut()
                }, 1500);
        			console.log('send')



            },

            error: function(data) {
            		console.log('error')
            }

        });

    }

})


function animeteError(arr) {

    arr.addClass('error__animate')

    setTimeout(function() {

        arr.removeClass('error__animate')

    }, 500);

}

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
wideoHeight()

function wideoHeight(){
    let height = $('.video__content').width()*.56

    $('.video__content').attr('style', 'height:'+height+'px')
}
