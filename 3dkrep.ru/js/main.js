var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

function onArrowClick() {
    $('.calculator__select--arrow').on('click', function(e) {
        e.preventDefault()
        var select = $(this).parents('.calculator__select'),
            active = $(this).siblings('.calculator__select--active span');

        if (select.hasClass('active')) {
            select.removeClass('active')
        } else {
            $('.calculator__select.active').removeClass('active')
            select.addClass('active');

        }

        select.find('li').each(function(index, el) {
            $(el).on('click', function() {
                let text = $(this).text();
                active.text(text);
                select.removeClass('active')
            })
            $(document).mouseup(function(e) {
                var container = $(".calculator__select ");
                if (container.has(e.target).length === 0) {
                    select.removeClass('active')
                }
            });
        });
    })
}

function removeWall() {
    $('.calculator__choose--wallRemove').on('click', function() {
        $(this).parent('.calculator__choose--wall').remove()
    })
}

function culculate() {
    $('.calculator__choose--btn').on('click', function() {
        let result = [],
            i = 0,
            quantityFinal = [{
                    type: 'Многоразовый',
                    value: 0
                },
                {
                    type: 'Оцинкованные',
                    value: 0
                },
            ];
        let totalPrice = $('.calculator__result--text span'),
            resultRowBox = $('.calculator__result--box'),
            resultMany25 = resultMany100 = resultMany1000 = resultZink50 = resultZink100 = quantity = 0;

        resultRowBox.text("")
        totalPrice.text("0")
        $('.calculator__choose--wall').each(function(index, el) {
            let type = $(el).find('.calculator__select--active span').text(),
                height = +$(el).find('input[name=height]').val(),
                width = +$(el).find('input[name=width]').val(),
                square = 0;
            square = height * width; // квадратных метров
            quantity = Math.ceil(square * 3);


            if (type === "Многоразовый") {
                quantityFinal[0].value += quantity

            } else {
                quantityFinal[1].value += quantity

            }


        });
        resultMany1000 = Math.floor(quantityFinal[0].value / 1000);
        resultMany100 = Math.floor((quantityFinal[0].value % 1000) / 100);
        resultMany25 = Math.ceil(((quantityFinal[0].value % 1000) % 100) / 25);

        type = "Крепеж многоразовый";
        // console.log('Тип '+type+' Площадь: м2 Всего креплений: '+quantityFinal[0].value+' По 1000: '+resultMany1000+' По 100: '+resultMany100+' По 25: '+resultMany25);
        if (resultMany25 > 0 && resultMany25 % 4 === 0) {
            resultMany100 = resultMany100 + Math.trunc(resultMany25 / 4);
            resultMany25 = resultMany25 - resultMany25 * Math.trunc(resultMany25 / 4);
        }
        if (resultMany100 > 0 && resultMany100 % 10 === 0) {
            resultMany1000 = resultMany1000 + Math.trunc(resultMany100 / 10);
            resultMany100 = resultMany100 - resultMany100 * Math.trunc(resultMany100 / 10);
        }

        resultZink100 = Math.floor((quantityFinal[1].value % 1000) / 100);
        resultZink50 = Math.ceil(((quantityFinal[1].value % 1000) % 100) / 50);
        if (resultZink50 % 2 === 0 && resultZink50 > 0) {
            resultZink100 = resultZink100 + Math.trunc(resultZink50 / 2);
            resultZink50 = resultZink50 - resultZink50 * Math.trunc(resultZink50 / 2);
        }
        type = "Крепеж оцинкованный";
        // console.log('Тип '+type+' Площадь: м2 Всего креплений: '+quantityFinal[1].value+' По 100: '+resultZink100+' По 50: '+resultZink50);


        if (resultMany25 > 0) {
            result[i] = {
                    type: 'Крепеж многоразовый (25 шт. уп.)',
                    value: resultMany25,
                    priceOne: 70,
                    priceAll: resultMany25 * 70
                }
                ++i
        }
        if (resultMany100 > 0) {
            result[i] = {
                    type: 'Крепеж многоразовый (100 шт. уп.)',
                    value: resultMany100,
                    priceOne: 250,
                    priceAll: resultMany100 * 250
                }
                ++i
        }
        if (resultMany1000 > 0) {
            result[i] = {
                    type: 'Крепеж многоразовый (1000 шт. уп.)',
                    value: resultMany1000,
                    priceOne: 2000,
                    priceAll: resultMany1000 * 2000
                }
                ++i
        }
        if (resultZink50 > 0) {
            result[i] = {
                    type: 'Крепеж оцинкованный (50 шт. уп.)',
                    value: resultZink50,
                    priceOne: 70,
                    priceAll: resultZink50 * 70
                }
                ++i
        }
        if (resultZink100 > 0) {
            result[i] = {
                    type: 'Крепеж оцинкованный (100 шт. уп.)',
                    value: resultZink100,
                    priceOne: 130,
                    priceAll: resultZink100 * 130
                }
                ++i
        }
        for (var j = 0; j < result.length; j++) {
            resultRowBox.append('<div class="calculator__result--line calculator__result--lineSelected"> <div class="calculator__result--col calculator__result--colNeed">' + result[j].type + '</div><div class="calculator__result--col calculator__result--colPack"> <div class="calculator__pack--btn calculator__packMinus">-</div><div class="calculator__packNow">' + result[j].value + '</div><div class="calculator__packPlus calculator__pack--btn">+</div></div><div class="calculator__result--col calculator__result--colPriceOne"><span>' + result[j].priceOne + '</span> руб.</div><div class="calculator__result--col calculator__result--colPriceAll culculatePriceType"><span>' + result[j].priceAll + '</span> руб.</div></div>')
        }

        if (result.length > 0) {
            $('.calculator__result, .calculator__result--price').show(300);
            $('.calculator__choose--wall input').each(function(index, el) {

                $(el).removeClass('error')

            });
        } else {
            $('.calculator__choose--wall input').each(function(index, el) {
                if ($(el).val() === "") {
                    $(el).addClass('error')
                }
            });
        }
        $('.calculator__choose--wall input').each(function(index, el) {
            if ($(el).val() === "") {
                $(el).addClass('error')
            } else {
                $(el).removeClass('error')
            }
        });
        totalPrice.text(culculateFinalPrice())
        changeQuantity()

    })
}

function culculateFinalPrice() {
    let finalPrice = 0
    $('.culculatePriceType span').each(function(index, el) {
        finalPrice += +$(el).text();
    });
    return finalPrice
}

function culcNewPrice() {
    let line = $('.calculator__result--lineSelected')
    line.each(function(index, el) {
        let quantity = +$(el).find('.calculator__packNow').text(),
            priceOne = +$(el).find('.calculator__result--colPriceOne span').text(),
            priceAll = $(el).find('.calculator__result--colPriceAll span');
        priceAll.text(priceOne * quantity);
    });
    $('.calculator__result--text span').text(culculateFinalPrice())

}

function changeQuantity() {
    $('.calculator__packMinus').off()
    $('.calculator__packMinus').on('click', function(event) {
        event.preventDefault();
        let quantity = $(this).siblings('.calculator__packNow'),
            quantityVal = +quantity.text();
        // console.log(quantity)
        if (quantityVal > 0) {
            --quantityVal;
            quantity.text(quantityVal)
        }
        culcNewPrice()
    });
    $('.calculator__packPlus').off()
    $('.calculator__packPlus').on('click', function(event) {
        event.preventDefault();
        let quantity = $(this).siblings('.calculator__packNow'),
            quantityVal = +quantity.text();
        // console.log(quantity)
        ++quantityVal;
        quantity.text(quantityVal)

        culcNewPrice()
    });
}



onArrowClick()
culculate()
$('.calculator__addLine').on('click', function() {
    $('.calculator__choose--variantBox').append('<div class="calculator__choose--wall"> <div class="calculator__select--box"> <div class="calculator__select "> <div class="calculator__select--active"> <span>Многоразовый</span> <div class="calculator__select--arrow"></div></div><ul class="calculator__select--list"> <li>Многоразовый</li><li>Оцинкованные</li></ul> </div></div><div class="calculator__sizeBox"> <div class="calculator__size"> <input type="text"  onkeydown="limit(this);" onkeyup="limit(this);" name="width" placeholder="Введите длину L. м"> </div><div class="calculator__cross">×</div><div class="calculator__size"> <input  onkeydown="limit(this);" onkeyup="limit(this);" type="text" name="height" placeholder="Укажите высоту h. м"> </div></div><div class="calculator__choose--wallRemove"><div class="calculator__cross">×</div></div></div>');
    $('.calculator__select--arrow').off();
    $('.calculator__choose--wallRemove').off();
    $('.calculator__choose--btn').off();
    onArrowClick()
    removeWall();
    culculate()

})

$('.popup__close').on('click', function() {
    $(this).parents('.popup').fadeOut()
    stopVideo()
})

$('.openPopup').on('click', function() {
    let nameFormInput = $('.formName'),
        nameForm = $(this).data('name'),
        orderInput = $('.orderInput'),
        order = "",
        finalPrice = $('.calculator__result--text').text();

    if ($(this).hasClass('calculator__result--btn')) {
        order = "  Заказали:";
        $('.calculator__result--lineSelected').each(function(index, el) {
            var lineText = " ",
                lineName = $(el).find('.calculator__result--colNeed').text(),
                linePack = $(el).find('.calculator__packNow').text(),
                linePriceOne = $(el).find('.calculator__result--colPriceOne').text(),
                linePriceAll = $(el).find('.calculator__result--colPriceAll').text();

            order += (index + 1) + ')' + lineName + " " + linePack + "шт. по " + linePriceOne + ' на сумму ' + linePriceAll + ';';
        });
        order += finalPrice;
    }
    orderInput.val(order)
    nameFormInput.val(nameForm)
    $('.popup__call').fadeIn()
})


$('input[type=tel]').mask('+7(999) 999 99 99');
$('.popup__social--item').on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.popup__social--item.active').removeClass('active');
        $(this).addClass('active');
    }
})

$('.sendBtn').on('click', function(e) {
    e.preventDefault();
    let form = $(this).parents('form'),
        tel = form.find('input[type=tel]'),
        email = form.find('input[type=email]'),
        error = form.find('.popup__social--error'),
        social = ['Viber', 'Telegram', 'WhatSapp', 'Mail'];




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


$('.sendBtnMin').on('click', function(e) {
    e.preventDefault();
    let form = $(this).parents('form'),
        tel = form.find('input[type=tel]');


    if (tel.val().length == 0) { tel.addClass('error'); } else if (tel.val() == '+7 (___) ___-__-__') { tel.addClass('error'); } else if (tel.val().indexOf('_') > 0) { tel.addClass('error'); } else { tel.removeClass('error'); }


    if (form.find('.error').length < 1) {
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


function limit(element) {
    var max_chars = 5,
        ElVal = +element.value;
    // console.log(ElVal)
    // console.log(typeof ElVal)
    if (element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
    if (ElVal > 100) {
        // console.log('pidor')
        element.value = 100
    }
}



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