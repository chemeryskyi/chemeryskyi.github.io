var inPuck = 50,
    pricePack = 150;


function culculate(){
    let square = $('.culculator input'),
        max_chars = 8,
        inputValue = square.val(),
        ElVal = square.val(),
        resultBox = $('.culculator__result'),
        result= "";

        if(inputValue.length > max_chars) {
            inputValue = inputValue.substr(0, max_chars);
        }
        if(ElVal>10000){
            square.val(10000)
        }
        square.removeClass('error')
        result = Math.ceil(inputValue/inPuck) ;
        resultPrice = result*pricePack;

            resultPrice = (resultPrice+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        if(result===1){
            word='упаковка'
        } else if(result===2 || result===3 || result===4 ){
             word='упаковки'
        }  else {
              word='упаковок'
        }
        resultBox.html('<span>'+result+' '+word+' ( по '+inPuck+'шт.)</span> - '+resultPrice+' р.')
        resultBox.show(300)
        if(inputValue==="" || inputValue.indexOf(' ')>0){
            resultBox.text('')
            resultBox.hide(300)
        }


}



$('.culculator input').keyup(function(event) {
    culculate()
});

$('.culculator__input--arrow span').on('click', function(){
    let indexSpan = $(this).index(),
        arrowBox = $(this).parent('.culculator__input--arrow'),
        input = arrowBox.siblings('input'),
        inputVal = input.val();

    if(indexSpan){
        input.val(++inputVal)
    } else{
        if(inputVal<1){
            inputVal=0
            input.val(inputVal)
        } else {
            input.val(--inputVal)
        }
    }

        culculate()
    
})


$('.example__content').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})


$("a[href]").bind("click", function(e) { 
       var anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top-0}, 1500);
   e.preventDefault(); return false; 
 });


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() { player = new YT.Player('player', { 
    videoId: 'lrJ_WX-BTmM', 
    playerVars: { 'controls': 0 }, 
    events: { 'onStateChange': onPlayerStateChange } }); }
var done = false;

function onPlayerStateChange(event) { if (event.data == YT.PlayerState.PLAYING && !done) { setTimeout(stopVideo, 32000); } }

function stopVideo() { player.stopVideo(); }

function playVideo() { player.playVideo(); }



$('.popup__close').on('click', function(){
	$(this).parents('.popup').fadeOut();
	stopVideo()
})

$('.openPopup').on('click', function(){
	$('.popup__call').fadeIn()
})

$('.popup__social--item').on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.popup__social--item.active').removeClass('active');
        $(this).addClass('active');
    }
})


$('.openPopup').on('click', function() {
    let nameFormInput = $('.formName'),
        nameForm = $(this).data('name'),
        orderInput = $('.orderInput'),
        order = "";

    orderInput.val(order)
    nameFormInput.val(nameForm)
    $('.popup__call').fadeIn()
})

$('.culculator__btn').on('click', function(e){
    e.preventDefault()
    let culculator = $(this).parent('.culculator__content'),
        input = culculator.find('input');
    if(input.val().length>0){
        input.removeClass('error')
            let nameFormInput = $('.formName'),
                nameForm = $(this).data('name'),
                orderInput = $('.orderInput'),
                order = $('.culculator__result').text();
    
            orderInput.val(order);
            nameFormInput.val(nameForm)
            $('.popup__call').fadeIn()
        } else{
            input.addClass('error')
        }
})





$('input[type=tel]').mask('+7(999) 999 99 99');

$('.sendBtn').on('click', function(e) {
    e.preventDefault();
    let form = $(this).parents('form'),
        tel = form.find('input[type=tel]'),
        email = form.find('input[type=email]'),
        error = form.find('.popup__social--error'),
        social = ['Viber', 'Telegram', 'WhatSapp', 'Mail'],
        pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;




    if (form.find('.popup__social--item.active').length < 1) {
        error.text('Выберите способ связи');
        error.addClass('error');
    } else {
        error.text('');
        error.removeClass('error');
    }
    if (email.val() === "" && tel.val() === "") {
        tel.addClass('error');
        email.addClass('error')
    } else if (email.val() !== "" && tel.val() === "") {
        if (email.val() !== "") {
            if (pattern.test(email.val())) { email.removeClass('error') } else { email.addClass('error') };
        }
        tel.removeClass('error');
    } else if (email.val() === "" && tel.val() !== "") {
        if (tel.val() !== "") {
            if (tel.val().length == 0) { tel.addClass('error'); } else if (tel.val() == '+7 (___) ___-__-__') { tel.addClass('error'); } else if (tel.val().indexOf('_') > 0) { tel.addClass('error'); } else { tel.removeClass('error'); }
        }
        email.removeClass('error');
    } else {
        if (tel.val() !== "") {
            if (tel.val().length == 0) { tel.addClass('error'); } else if (tel.val() == '+7 (___) ___-__-__') { tel.addClass('error'); } else if (tel.val().indexOf('_') > 0) { tel.addClass('error'); } else { tel.removeClass('error'); }
        }
        if (email.val() !== "") {
            if (pattern.test(email.val())) { email.removeClass('error') } else { email.addClass('error') };
        }
    }

    if (form.find('.error').length < 1) {
        let sicialIndex = form.find('.popup__social--item.active').index() - 2,
            comment = form.find('.orderInput'),
            commentOld = comment.val();
        comment.val('Способ связи: ' + social[sicialIndex] + ';  ' + commentOld)
        // console.log(social[sicialIndex])

        var msg = form.serialize();
        $.ajax({
            type: 'POST',
            url: 'rest.php',
            data: msg,
            success: function(data) {
                $('.popup').fadeOut();
                form[0].reset();
                $('.popup__thanks').fadeIn();
                playVideo()
            },
            error: function(data) {

            }
        });
    } else {
        // console.log('есть ошибки')
    }
})