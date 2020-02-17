$('input[type=tel]').mask('+38 (999) 999 99 99');

createSelect()
$('.header__social a').each(function(index, el) {
    $(el).append(headerSosial[index])
});
$('.header__fixed .header__social a').each(function(index, el) {
    $(el).append(headerSosial[index])
});
$('.contact__social a').each(function(index, el) {
    $(el).append(headerSosial[index])
});



$('.logo__img').append(svg.logo)
$('.logo__text').text('TRAVEL')
$('.header__contact--ico, .contact__phone--ico').append(svg.headerPhone)
$('.select__arrow').append(svg.selectArrow)
$('.tour__btn ,.tourSlider__watch--ico').append(svg.arrowRight)
$('.tour__city .tour__ico').append(svg.ok)
$('.tour__day .tour__ico').append(svg.calendar)
$('.tour__country .tour__ico').append(svg.flag)
$('.whatHalal__arrow').append(svg.selectArrow)
$('.contact__mail--ico').append(svg.mail)
$('.popup__close').append(svg.close)

$('.openPopup').on('click', function(e) {
    e.preventDefault()
    let btnText = $(this).data('btn'),
        popup = $('#findtour'),
        btn = popup.find('.popup__btn'),
        commentInput = popup.find('input[name=comment]'),
        countryInput = popup.find('input[name=country]'),
        dateInput = popup.find('input[name=date]'),
        personInput = popup.find('input[name=person]'),
        starInput = popup.find('input[name=star]');

    if ($(this).hasClass('main__btn')) {
        let selectGroup = $(this).siblings('.select__group'),
            country = selectGroup.find('.select__active:eq(0)'),
            date = selectGroup.find('.date'),
            person = selectGroup.find('.select__active:eq(1)'),
            star = selectGroup.find('.select__active:eq(2)')

        if (country.text() === 'Страна') {
            country.parents('.select').addClass('error')
        } else {
            country.parents('.select').removeClass('error')
            countryInput.val(country.text())
        }
        if (date.val() === '') {
            date.parents('.select').addClass('error')
        } else {
            date.parents('.select').removeClass('error')
            dateInput.val(date.val())
        }
        if (person.text() === 'Сколько человек') {
            person.parents('.select').addClass('error')
        } else {
            person.parents('.select').removeClass('error')
            personInput.val(person.text())
        }
        if (star.text() === 'Сколько звезд') {
            star.parents('.select').addClass('error')
        } else {
            star.parents('.select').removeClass('error')
            starInput.val(star.text())
        }

        if (!selectGroup.find('.error').length > 0) {
            btn.text(btnText);
            popup.fadeIn()
        } else {
            animeteError(selectGroup)
        }
    }
    if ($(this).hasClass('assessment__btn')) {
        let btnText = $(this).data('btn'),
            popup = $('.popup__star'),
            btn = popup.find('.popup__btn')

        btn.text(btnText);
        popup.fadeIn()
    }

    if ($(this).hasClass('tour__btn')) {
        let btnText = $(this).data('btn'),
            popup = $('.popup__info')

        btn.text(btnText);
        popup.fadeIn()
    }
    if ($(this).hasClass('tourSlider__btn')) {
        let btnText = $(this).data('btn'),
            popup = $('.popup__call'),
            tourNameInput = popup.find('input[name=tourName]'),
            tourSlider__header = $(this).parents('.tourSlider__item').find('.tourSlider__header').text()

        tourNameInput.val(tourSlider__header)
        btn.text(btnText);
        popup.fadeIn()
    }
})


function blockToShowFunc() {
    let width = $(document).width();

    blockToShow = 1;
    if (width > 575) {
        blockToShow = 2;
    }


    if (width > 991) {
        blockToShow = 3;
    }
}

blockToShowFunc()


$(window).resize(function() {
    blockToShowFunc()
    hideBlock(blockToShow)
});

hideBlock(blockToShow)

function hideBlock(arr) {
    $('.tour__block').each(function(index, el) {
        let pages = $(el).find('.tour__pages'),
            tourItem = $(el).find('.tour');
        tourItem.each(function(indexTour, tour) {

            if (indexTour > (blockToShow - 1)) {
                $(tour).addClass('hide')
            } else {
                $(tour).removeClass('hide')
            }
        });

    });
}


$('.tour__moreBtn').on('click', function() {
    let btn = $(this);
    showMore(btn)
})

function showMore(arr) {
    let block = arr.parents('.tour__block'),
        hiddenBlock = block.find('.hide'),
        pages = block.find('.tour__pages')

    if (hiddenBlock.length > blockToShow) {
        hiddenBlock.each(function(index, el) {
            if (index < blockToShow) {
                $(el).removeClass('hide')
            }
        });
    }
    if (hiddenBlock.length === 1 || hiddenBlock.length < 5) {
        pages.removeClass('hide')
        arr.addClass('hide')
        hiddenBlock.each(function(index, el) {
            $(el).removeClass('hide')
        });
    }


}

$('.popup__close').on('click', function(e) {
    e.preventDefault()
    let popup = $(this).parents('.popup');
    popup.fadeOut()
})


function animeteError(arr) {
    arr.addClass('error__animate')
    setTimeout(function() {
        arr.removeClass('error__animate')
    }, 500);
}

function testInput(arr) {
    let type = arr.attr('type')
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

$('.sendForm').on('click', function(e) {
    e.preventDefault()
    let form = $(this).parents('form'),
        tel = form.find('.tel'),
        email = form.find('.email'),
        name = form.find('.name'),
        text = form.find('.comment'),
        select = form.find('.select__active')

    testInput(tel)
    testInput(email)
    testInput(name)
    testInput(text)

    if (select.text() === 'Количество звезд') {
        select.addClass('error')
    } else {
        select.removeClass('error')
    }


    if (form.find('.error').length > 0) {
        let error = form.find('.error');
        error.each(function(index, el) {
            animeteError($(el))
        });
    } else {
        let msg = form.serialize();
        // $.ajax({
        //     type: 'POST',
        //     url: 'sntmail.php',
        //     data: msg,
        //     success: function(data) {
        $('.popup').fadeOut();
        form[0].reset();
        $('.popup__thanks').fadeIn().delay(1600).fadeOut();

        // },
        // error: function(data) {

        // }
        // });
    }


})

$('.tourSlider__info').each(function(index, el) {
    let ico = $(el).find('.tourSlider__info--ico'),
        transport = $(el).find('.tourSlider__info--ico.transport'),
        date = $(el).find('.tourSlider__info--ico.date'),
        person = $(el).find('.tourSlider__info--ico.person'),
        food = $(el).find('.tourSlider__info--ico.food'),
        personVal = person.data('value')

    transport.append(svg.plane)
    date.append(svg.calendar)
    food.append(svg.foodIco)

    switch (personVal) {
        case 3:
            person.append(svg.manyPerson)
            break;
        case 2:
            person.append(svg.tvoPerson)
            break;
        default:
            person.append(svg.onePerson)
            break;
    }
});

// $('.assessment__star').each(function(index, el) {
//   let active = $(this).data('star'),  check;
//   console.log(active)
//    for (var i = 0; i < 5; i++) {
//     $(el).append('<li> <label> <input class="checkbox" type="checkbox" name="checkbox-test" '+check+'"></span> <span class="label">'+star+'</span> </label></li>')
//   }
//   $(el).find('input').each(function(index, el) {
//     if(index<active){
//         $(el).prop('checked', true)
//     }
//   });
// });

$('.assessment__star').each(function(index, el) {
    let active = $(this).data('star');
    for (var i = 0; i < 5; i++) {
        $(el).append('<li> ' + svg.star + '</li>')
    }
    $(el).find('li').each(function(indexli, elli) {
        if (indexli < active) {
            $(elli).addClass('active');
        }

    });
});



$('option').each(function(index, el) {
    let text = $(el).text()
    $(el).val(text)
});

function createSelect() {
    $('.select__create').each(function(index, el) {
        let selectVal = [],
            name = $(el).data('name')
        $(el).find('option').each(function(indexOption, elOption) {
            let elVal = $(elOption).text();
            selectVal.push(elVal)
        });

        $(el).wrap('<div class="select"/>')
        let select = $(el).parent('.select');
        select.append(' <div class="select__arrow"></div><div class="select__active"></div><ul class="select__list"> </ul>');

        let list = select.find('.select__list'),
            active = select.find('.select__active');
        for (var i = 0; i < selectVal.length; i++) {
            list.append('<li>' + selectVal[i] + '</li>')
        }
        active.text(name)


    });

}


$('.select__active').on('click', function() {
    let select = $(this).parent('.select'),
        list = select.find('.select__list'),
        active = $(this),
        selectGroup = $(this).parents('.select__group'),
        maxSelect = selectGroup.find('.select').length,
        selectDefault = select.find('select');


    if (!select.hasClass('active')) {
        var oldBrs = $(this).css('border-radius');
        if (select.index() === 0) {
            $(this).attr('style', 'border-radius: 1rem 0 0 0 ')
        }
        if (select.index() === (maxSelect - 1)) {
            $(this).attr('style', 'border-radius:  0 1rem 0 0 ')
            list.addClass('last')
        }
    } else {
        if (select.index() === 0) {
            $(this).attr('style', 'border-radius: ' + oldBrs + ' ')
        }
        if (select.index() === (maxSelect - 1)) {
            $(this).attr('style', 'border-radius: ' + oldBrs + ' ')
        }
    }
    select.toggleClass('active');
    list.slideToggle();
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = select; // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            list.slideUp(); // скрываем его
            select.removeClass('active');
        }
    });
    list.find('li').on('click', function() {
        let text = $(this).text(),
            liIndex = $(this).index(),
            option = select.find('option:eq(' + liIndex + ')').val()


        selectDefault.val(option)
        active.text(text);
        list.slideUp();

        select.removeClass('active');
        if (select.index() === 0) {
            active.attr('style', 'border-radius: ' + oldBrs + ' ')
        }
        if (select.index() === (maxSelect - 1)) {
            active.attr('style', 'border-radius: ' + oldBrs + ' ')
        }
        setTimeout(function() { list.removeClass('last') }, 700);


    });
})


$('.tourSlider__content').slick({
    arrows: false,
    dots: true
})



var windowWidth = $(document).width();

$(window).resize(function() {
    windowWidth = $(document).width();
});

if (windowWidth < 1200) {
        $('.header__nav a').on('click', function() {
            $('.header__nav').slideToggle()
        })
    }

    $(document).scroll(function(event) {
        if ($(document).scrollTop() > $('.main').height() + 20) {
            $('.header__fixed').addClass('active');
        } else {
            $('.header__fixed').removeClass('active');
            if (windowWidth < 1200) {
                $('.header__nav').slideUp()
                $('.header__burger').removeClass('active');
            }
        }

    });


    $('.header__burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header__nav').slideToggle()
    })






    $("a[href]").bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1500);
        e.preventDefault();
        return false;
    });