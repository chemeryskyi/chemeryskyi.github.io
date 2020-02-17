var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
var height = 25,
    width = 25,
    coef = 650,
    type = 'МАТОВЫЕ/ГЛЯНЦЕВЫЕ/САТИНОВЫЕ',
    area = 0,
    quantity = 0;
calculate(height, width, coef);
calculate_work(area, quantity, 'МАТОВЫЕ/ГЛЯНЦЕВЫЕ/САТИНОВЫЕ')
$("#height").slider({
    range: "max",
    min: 25,
    max: 200,
    value: 25,
    slide: function(event, ui) {
        $("#heightVal").val(ui.value);
        height = ui.value;
        calculate(height, width, coef)

    }
});
$('#height').children('.value__min').text('25 см')
$('#height').children('.value__max').text('200 см')
$("#heightVal").val($("#height").slider("value"));


$("#width").slider({
    range: "max",
    min: 25,
    max: 200,
    value: 25,
    slide: function(event, ui) {
        $("#widthVal").val(ui.value);
        width = ui.value;
        calculate(height, width, coef)
    }
});
$("#widthVal").val($("#width").slider("value"));
$('#width').children('.value__min').text('25 см')
$('#width').children('.value__max').text('200 см')


$("#area").slider({
    range: "max",
    min: 0,
    max: 60,
    value: 0,
    slide: function(event, ui) {
        $("#areaVal").val(ui.value);
        area = ui.value;
        calculate_work(area, quantity, type)
    }
});
$("#areaVal").val($("#area").slider("value"));
$('#area').children('.value__min').text('0 м2')
$('#area').children('.value__max').text('60 м2')


$("#quantity").slider({
    range: "max",
    min: 0,
    max: 20,
    value: 0,
    slide: function(event, ui) {
        $("#quantityVal").val(ui.value);
        quantity = ui.value;
        calculate_work(area, quantity, type)
    }
});
$("#quantityVal").val($("#quantity").slider("value"));
$('#quantity').children('.value__min').text('0 см')
$('#quantity').children('.value__max').text('20')



$('.calculator__type--item').on('click', function() {
    coef = $(this).find('input[name=type]').val()
    type = $(this).find('input[name=type]').val()
    $('.calculator__img').each(function(index, el) {
        $(el).removeClass('active')
    });
    $(this).find('.calculator__img').addClass('active')
    calculate(height, width, coef)
    calculate_work(area, quantity, type)
})

function calculate(height, width, coef) {
    result = Math.round(height * width * coef / 10000);
    textPrint = String(result).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    $('.calculator__result span ').text(textPrint)
}

function formate(result) {
    val = Math.round(result)
    return String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
}


function calculate_work(area, quantity, type) {
    var textPrint = 0;
    if (type == 'МАТОВЫЕ/ГЛЯНЦЕВЫЕ/САТИНОВЫЕ') {
        result = area * 330 + quantity * 300;
        textPrint = formate(result) + " руб.";
    } else if (type == 'ПАРЯЩИЕ/РАЗНЫЕ/МНОГОУРОВНЕВЫЕ') {
        result = "дря расчета нужен мастер "
        textPrint = result
    } else if (type == "ФАКТУРНЫЕ") {
        result = area * 500 + quantity * 300;
        textPrint = formate(result) + " руб.";
    } else {
        result = area * 330 + quantity * 300;
        textPrint = formate(result) + ' + 1500 руб. за м2 печати';
    }



    $('.calculator__result_sec span ').text(textPrint)
}


var typeZal = ['ГОРИЗОНТАЛЬНЫЕ', 'ВЕРТИКАЛЬНЫЕ', 'РУЛОННЫЕ', 'ЗЕБРА', 'ГОРОД'];

$('.buy__btn').on('click', function() {


    var form = $('.popup__form');
    form.find('input[name="Высота"]').val(height + ' cм');
    form.find('input[name="Ширина"]').val(width + ' cм');
    if (coef == 650) {
        form.find('input[name="Тип"]').val(typeZal[0]);
    }
    if (coef == 700) {
        form.find('input[name="Тип"]').val(typeZal[1]);
    }
    if (coef == 2100) {
        form.find('input[name="Тип"]').val(typeZal[2]);
    }
    if (coef == 2700) {
        form.find('input[name="Тип"]').val(typeZal[3]);
    }
    if (coef == 5800) {
        form.find('input[name="Тип"]').val(typeZal[4]);
    }

    form.find('input[name="Стоимость"]').val($('.calculator__result span ').text());
    var what_calck = $(this).data('what')
    form.find('input[name="Рассчитать стоимось"]').val(what_calck);
    if (what_calck == "работы") {
        form.find('input[name="Площидь"]').val(area + ' м2');
        form.find('input[name="Свет и трубы"]').val(quantity + ' шт.');
        form.find('input[name="Тип"]').val(type);
        form.find('input[name="Стоимость"]').val($('.calculator__result_sec span ').text());
    }
    form.fadeIn()
})
jQuery(document).ready(function($) {
    $('.popup__send').on("click", function(e) {
        e.preventDefault()
        var form = $(this).parents('form'),
            popup = $(this).parents('.popup'),    
            tel = form.find('input[type=tel]'),
            name = form.find('input[type="text"]'),
            email = form.find('input[type="email"]');

                  let page = $(this).data('page');
            

        if (email.val() != "") { if (pattern.test(email.val())) { email.removeClass('error') } else { email.addClass('error') }; }
        ok_tel(tel)
        if (name.val().length < 1) { name.addClass('error') } else { name.removeClass('error') }
        if (!name.hasClass('error') && !tel.hasClass('error') && !email.hasClass('error')) {
            msg = popup.find('form').serialize();
            $.ajax({
                type: 'POST',
                url: 'sntmeil.php',
                data: msg,
                success: function(data) {
                    popup.find('.popup__good').addClass('active')
                    // 
                    popup.delay(1000).fadeOut();
                    form[0].reset();
                    yaCounter43470394.reachGoal(page);
                },
                error: function(data) {

                }
            });
        }
    })

});

function ok_tel(tel) {
    var tel_val = tel.val();
    if (tel_val.length == 0) { tel.addClass('error'); } else if (tel_val == '+7 (___) ___-__-__') { tel.addClass('error'); } else if (tel_val.indexOf('_') > 0) { tel.addClass('error'); } else {
        tel.removeClass('error');
    }
}
$("input[type=tel]").mask("+7 (999) 999-99-99");
$('.popup__close').on('click', function() {
    $('.popup').fadeOut()
})



$('.review__slider--video').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow:'<div class="review__arrow review__arrow--prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></div>',
  nextArrow:'<div class="review__arrow review__arrow--next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></svg></div>',
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
$('.review__slider--letter').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<div class="review__arrow review__arrow--prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></div>',
  nextArrow:'<div class="review__arrow review__arrow--next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></svg></div>',
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})


jQuery(document).ready(function($) {
  $('.review__slider--video').find('iframe').each(function(index, el) {
    let width = $(el).innerWidth(),
        height = width*0.56; 
        $(el).attr('style','height:'+height+'px')
  }); 
});




$('.header__burger').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
})


var windowWidth = $(document).width();

$(window).resize(function() {
    windowWidth = $(document).width();

});

if (windowWidth < 1200) {
    $('.header__nav a').on('click', function() {
        $('.header__nav').removeClass('active');
        $('.header__burger').removeClass('active');
    })
}

$(document).scroll(function(event) {
    if ($(document).scrollTop() > $('.main').height() + 20) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
        if (windowWidth < 1200) {
            $('.header__nav').removeClass('active');
            $('.header__burger').removeClass('active');
        }
    }

});


$('.callOpen').on('click',function(e){
    e.preventDefault()
    let formName = $(this).data('name'),
        popup = $('.popup__call'),
        inputName = popup.find('input[name="Название формы"]');

        inputName.val(formName);
        popup.fadeIn();

})
if($(window).width()<770){
    var headerHeight = 48
} else {
    var headerHeight = $('.header').innerHeight()
}


$(window).resize(function(event) {
   if($(window).width()<770){
    var headerHeight = 48
    } else {
        var headerHeight = $('.header').innerHeight()
    }

});

$("a[href]").bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - headerHeight
    }, 1500);
    e.preventDefault();
    return false;
});

$('.main__form--btn,.risk__form--btn').on('click',function(e){
           e.preventDefault()
        var form = $(this).parents('form'),
            tel = form.find('input[type=tel]'),
            name = form.find('input[type="text"]'),
            nameBox = name.parents('.input__box'),
            telBox = tel.parents('.input__box'),
            okText = form.find('.form__ok');
       let page = $(this).data('page');

        if (tel.val().length == 0 || tel.val() == '+7 (___) ___-__-__' || tel.val().indexOf('_') > 0 ) 
            { telBox.addClass('error'); }  
            else {
                telBox.removeClass('error');
            }

        if (name.val().length < 1) { nameBox.addClass('error') } else { nameBox.removeClass('error') }

        if (!nameBox.hasClass('error') && !telBox.hasClass('error')) {
            msg = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'sntmeil.php',
                data: msg,
                success: function(data) {
                    okText.slideDown();
                    setTimeout(function() {okText.slideUp(); form[0].reset();}, 1500);
                    yaCounter43470394.reachGoal(page);
                    
                },
                error: function(data) {

                }
            });
        }
})