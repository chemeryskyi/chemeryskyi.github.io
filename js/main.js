let app = {
    changeTab: function(){
        let btn = event.target.attributes['data-tabs'] ? event.target : event.target.closest('[data-tabs]'),
            tabs = btn.getAttribute('data-tabs'),
            value = btn.getAttribute('data-value');
        document.querySelectorAll(`[data-tabs="${tabs}"]`).forEach(tab => tab.classList.remove('active'))
        document.querySelectorAll(`[data-tabs="${tabs}"][data-value="${value}"]`).forEach(tab => tab.classList.add('active'))
    },
    showLabel: ()=>{
        let name = $(event.target).attr('name'),
            label = $(`label[data-name="${name}"]`);

        if($(event.target).prop("checked")){
            label.removeClass("dissabled");
            setTimeout(()=>{
                label.find('input').focus();
            }, 300)

        } else {
            label.addClass("dissabled")
        }
    },
    checkInput :(input) =>{
        input = $(input);
        let type = input.attr("type"),
            label = input.closest('label'),
            pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;


            switch (type) {
                case 'tel':

                    if (input.val().length == 0 ||
                        input.val().indexOf('_') > 0) {
                        label.addClass('error');
                        input.keyup(function(event) {
                            app.checkInput(input)

                        });

                    } else {
                        label.removeClass('error');
                    }

                    break;
                case 'hidden':
                    break;
                case 'email':

                    if (pattern.test(input.val())) { label.removeClass('error') } else { label.addClass('error') };

                    break;

                default:

                    let arrVal = $.trim(input.val());


                    if (arrVal === "") {
                        label.addClass('error');
                        label.keyup(function(event) {
                            app.checkInput(input)
                        });

                    } else {
                        label.removeClass('error');
                    }


                    break;

            }


    },
    basket:{
        minus:(btn)=>{
                let price = +$(btn).siblings('.count').find('.count-text').attr('data-price').split(" ").join(""),
                    count = +$(btn).siblings('.count').find('.count-text').text().split(" ").join(""),
                    itemsPrice = $(btn).closest('.basket-content__count').siblings('.basket-content__price').find('.value');

            --count < 0 ? count = 0 : '';
            $(btn).siblings('.count') .find('.count-text').attr("data-count",count)
            itemsPrice.html((count*price).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
            $(btn).siblings('.count') .find('.count-text').html(count)

            app.basket.calcTotal()

        },
        calcTotal: function(){
            let total = 0;
            $('.basket-content__item').each((i,el) =>{
                let itemCount = +$(el).find('.count-text').attr("data-count").split(" ").join(""),
                    itemPrice =  +$(el).find('.count-text').attr("data-price").split(" ").join("");
                total+=itemCount*itemPrice;
            })
            $('.basket__result .price-value').html(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
        },
        plus: (btn)=>{
            let price = +$(btn).siblings('.count').find('.count-text').attr('data-price').split(" ").join(""),
                count = +$(btn).siblings('.count').find('.count-text').text().split(" ").join(""),
                itemsPrice = $(btn).closest('.basket-content__count').siblings('.basket-content__price').find('.value');

            count++;
            $(btn).siblings('.count') .find('.count-text').attr("data-count",count)
            itemsPrice.html((count*price).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
            $(btn).siblings('.count') .find('.count-text').html(count)
            app.basket.calcTotal()
        }

    },
    openPopup: function(name){
        let popup = $(`[data-name="${name}"]`);
        popup.fadeIn()
        popup.addClass('active')
    },
    closePopup: function(){
        let btn = $(event.target),
            popup = btn.closest('.popup');
        popup.removeClass('active')
        popup.fadeOut()
    },
    toggleNav: function(btn){
        $(btn).toggleClass('active');
        $('.header__bottom').toggleClass('active');

        let hideNav = ()=>{
            if(!$(event.target).hasClass('.header__burger') &&
                !$(event.target).closest('.header__burger').length &&
                !$(event.target).hasClass('header__bottom') &&
                !$(event.target).closest('.header__bottom').length){
                $('.header__bottom').removeClass('active');
                $('.header__burger').removeClass('active');
                $('body').off('click', hideNav)
            }
        }
        $('body').on('click', hideNav)
    },
    openSearch: function(){
        $('.header__search').toggleClass('active');


        let hideSearch = ()=>{
            if(!$(event.target).hasClass('.toggle-search') &&
                !$(event.target).closest('.toggle-search').length &&
                !$(event.target).hasClass('header__search') &&
                !$(event.target).closest('.header__search').length){
                $('.header__search').removeClass('active');
                $('body').off('click', hideSearch)
            }
        }
        $('body').on('click', hideSearch)
    },

    initSliders: function(){
        let width = $(window).width(),
            distributorSlider = new Swiper ('.distributors-slider', {
                loop: true,
                mousewheel: true,
                slideClass:'distributors-slider__item',
                wrapperClass:'distributors-slider__row',
                slidePrevClass:'prev',
                slideNextClass:'next',
                slideActiveClass:'active',
                pagination: {
                    el: '.distributors-slider__pagination',
                    clickable: true,
                },
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.distributors-slider__arrow.--right',
                    prevEl: '.distributors-slider__arrow.--left',
                },
                slidesPerView: 'auto',
                centeredSlides: true,
            }),
            initSlider = (sliderName) => {
                return   new Swiper (`.catalog-slider__wrap[data-name="${sliderName}"]`, {
                    loop: true,
                    mousewheel: true,
                    slideClass:'catalog-slider__item',
                    wrapperClass:'catalog-slider__row',
                    slidePrevClass:'prev',
                    slideNextClass:'next',
                    slideActiveClass:'active',
                    pagination: {
                        el: `.catalog-slider__pagination[data-name="${sliderName}"]`,
                        clickable: true,
                    },
                    keyboard: {
                        enabled: true,
                    },
                    navigation: {
                        nextEl: `.catalog-slider__arrow.--right[data-name="${sliderName}"]`,
                        prevEl: `.catalog-slider__arrow.--left[data-name="${sliderName}"]`,
                    },
                    slidesPerView: 'auto',
                    centeredSlides: true,
                })
            },
            relatedSlider = initSlider('related'),
            alternativeSlider = initSlider('alternative'),
            ofterSlider = initSlider('ofter'),
            cardSliderNav = new Swiper('.card__slider-nav',{
                spaceBetween: width < 1200 ? 10 : 25,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,
                slideClass:'card__slide',
                wrapperClass:'card__slider-row',
            }),
            cardSlider = new Swiper('.card__slider-content',{
                slideClass:'card__slide',
                wrapperClass:'card__slider-row',
                loop: true,
                mousewheel: true,
                keyboard: {
                    enabled: true,
                },
                thumbs: {
                    swiper: cardSliderNav
                }

            });
    },
    init: function () {
        this.initSliders()
        let initMap = (name) => {
                let wrap = document.querySelector(`[data-map=${name}]`),
                    init = ()=> {
                        let coordinates = wrap.getAttribute('data-coordinates').split(','),
                            address = wrap.getAttribute("data-address"),
                            myMap = new ymaps.Map(wrap, {
                                center: coordinates,
                                zoom: 15,
                                controls: []
                            }),
                            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                                hintContent: address,
                            }, {
                                iconLayout: 'default#image',
                                iconImageHref: '/img/map-icon.svg',
                                iconImageSize: [50, 50],
                                iconImageOffset: [-5, -38]
                            });

                        myMap.geoObjects
                            .add(myPlacemark)

                    };
                if(wrap){
                    ymaps.ready(init);
                }

            };
        initMap('moscow');
        initMap('Chelyabinsk');

        $('form').on('submit', function (e) {
            e.preventDefault();
            let form = $(this),
                inputs = form.find('input[data-require]');
            inputs.each((i,el)=> app.checkInput(el))

            if(!$(this).find('label.error').length){
              fetch('/')
                  .then(data => {
                      app.openPopup('result')
                      form.find('input').each((i,el)=> el.val(""))
                  })
                  .catch(data => {
                      app.openPopup('result')
                  })
            }


        })

        $('input[type=tel]').mask('+9 (999) 999 99 99');



        $('.select').on('click', function () {
            let li = $(this).find('li'),
                select = $(this),
                activeValue = select.find('.select-active'),
                input = select.find('input'),
                removeActive = () => {
                    if(!$(event.target).hasClass('select') && !$(event.target).closest('.select').length){
                        $('.select').removeClass('active')

                        $('body').off('click', removeActive)
                        li.off('click',selectValue)
                    }
                },
                selectValue = () => {
                    let li = $(event.target),
                        value = li.attr("data-value");
                    console.log(li,value)
                    activeValue.text(value);
                    input.val(value)
                    if(!input.val().length){
                        select.addClass('empty')
                    } else {
                        select.removeClass('empty')
                    }
                }
            $('body').on('click', removeActive)

            li.on('click', selectValue)

            if(!$(this).hasClass('active')){
                $('.select').removeClass('active')
                $(this).addClass('active');
            } else {
                $('.select').removeClass('active')
            }
        })

    }
}

app.init()
$(window).on('resize',()=>{
   app.initSliders()
})
