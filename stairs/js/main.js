var minSliderIndex = 0;
var isOpen = true,
	target ="";
$('input[type=tel]').mask('+7(999) 999 99 99'); 
$('.inputBox input').focus(function(event) {
    $(this).siblings('label').addClass('active')
});
$('.inputBox input').focusout(function(event) {
    if ( $(this).val().length<1 || $(this).val().indexOf('_') >0) {
        $(this).siblings('label').removeClass('active')
    }
});

function changeMinSlider(){
	let maxSlide = $('.popular__slider--min.active').find('.popular__slider--item').length;
	$('.popular__slider--arrowMinNext').on('click', function(){
	let container = $('.popular__slider--nav');
		++minSliderIndex

		if(minSliderIndex>0){
			minSliderIndex=-maxSlide+2;
		}
		// console.log(minSliderIndex)
		$('.popular__slider--min.active').find('.popular__slider--item').each(function(index, el) {
			$(el).css('transform','translateY('+minSliderIndex+'00%)');
		});
})
$('.popular__slider--arrowMinPrev').on('click', function(){
	let container = $('.popular__slider--nav');
		--minSliderIndex
		if(minSliderIndex===(-maxSlide+1)){
			minSliderIndex=0
		}
		$('.popular__slider--min.active').find('.popular__slider--item').each(function(index, el) {
			$(el).css('transform','translateY('+minSliderIndex+'00%)');
		});
})
}


// slider()

function whatPage(){
	let maxSlide = $('.popular__slider--min').length,
		maxSlideBox = $('.popular__slider--pageShowMax'),
		nowSlide = $('.popular__slider--min'),
		nowSlideBox = $('.popular__slider--pageShowNow');

			nowSlide.each(function(index, el) {
				if($(el).hasClass('active')){
					nowSlide=index+1;
				}
			});

			if(maxSlide<10){
				maxSlide="0"+maxSlide;
			}
			if(nowSlide<10){
				nowSlide="0"+nowSlide;
			}
			$('.popular__slider--pageMax').text(maxSlide)
			nowSlideBox.text(nowSlide);
			maxSlideBox.text(maxSlide);
}
function slider(){
		let arrowNext = $('.popular__slider--arrowNext'),
			arrowPrev = $('.popular__slider--arrowPrev'),
			maxSlide = $('.popular__slider--min').length
			sliderImgBox = $('.popular__slider--min'),
			activeIndex = 0;


			

			whatPage()
			changeMinSlider()
			arrowNext.on('click', function(){
				$('.popular__slider--min:eq('+activeIndex+')').removeClass('active')
				$('.popular__about:eq('+activeIndex+')').removeClass('active')
						++activeIndex;
						if(activeIndex===maxSlide){
							activeIndex=0;
						}
				$('.popular__slider--min:eq('+activeIndex+')').addClass('active')
				$('.popular__about:eq('+activeIndex+')').addClass('active')
				whatPage()
				changeMinSlider()
				minSliderIndex=0;
			})
			arrowPrev.on('click', function(){
				$('.popular__slider--min:eq('+activeIndex+')').removeClass('active')
				$('.popular__about:eq('+activeIndex+')').removeClass('active')
						--activeIndex;
						if(activeIndex<0){
							activeIndex=maxSlide-1;
						}
				$('.popular__slider--min:eq('+activeIndex+')').addClass('active')
				$('.popular__about:eq('+activeIndex+')').addClass('active')
				whatPage()
				changeMinSlider()
				minSliderIndex=0;
			})
}



$('.review__slider').slick({
	 infinite: false,
  slidesToShow:1,
  slidesToScroll: 1,
  nextArrow: '<div class="review__slider--arrow review__slider--arrowNext"> <div class="review__slider--page review__slider--pageMax">05</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.438 38.44"> <path d="M20.707,19.707 L1.707,38.707 L0.293,37.293 L18.086,19.500 L0.293,1.707 L1.707,0.293 L20.707,19.293 L20.500,19.500 L20.707,19.707 Z"/> </svg> </div>',
  prevArrow:' <div class="review__slider--arrow review__slider--arrowPrev"> <div class="review__slider--page review__slider--pageNow">01</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.438 38.44"> <path d="M20.707,37.293 L19.293,38.707 L0.293,19.707 L0.500,19.500 L0.293,19.293 L19.293,0.293 L20.707,1.707 L2.914,19.500 L20.707,37.293 Z"/> </svg> </div>' 
  })




$('.calculator__close').on('click', function(){
	$(this).parents('.popup').fadeOut()
})


$(document).scroll(function(event) {
    if ($(document).scrollTop() > $('.main').height() + 20) {
        $('.header--fixed ').addClass('active');
    } else {
        $('.header--fixed ').removeClass('active');
    }
    if ($(document).scrollTop() > $('.main').height() + 20) {
        $('.calculator__open').addClass('active');
    } else {
        $('.calculator__open').removeClass('active');
    }
});

$('.calculator__open').on('click', function(){
	$('.calculator__step.active').removeClass('active');
	$('.calculator__step:eq(0)').addClass('active')
	$('.popup__calculator').fadeIn()
	isOpen=true
})

$('.calculatorNext').on('click', function () {
	let box = $(this).parents('.calculator__step'),
		boxIndex = box.index();
		box.removeClass('active');
		$('.calculator__step:eq('+boxIndex+')').addClass('active')
})

$('.calculator__step--prev').on('click', function () {
	let box = $(this).parents('.calculator__step'),
		boxIndex = box.index()-2;
		box.removeClass('active');
		$('.calculator__step:eq('+boxIndex+')').addClass('active')
})


function createSelect(arr, block){
		block.append('<div class="select"></div>');
		let select = block.find('.select');
		select.append('<div class="select__active">'+arr[0].name+'</div><ul class="select__list"></ul>');
		let list = select.find('.select__list');

		for (var i = 0; i < arr.length; i++) {
			list.append('<li>'+arr[i].name+'</li>')
		}
		openSelect()
}

function openSelect(){
	$('.select__active').off()
	$('.select__active').on('click', function(){
		let select = $(this).parent('.select');
		if (select.hasClass('active')) {
            select.removeClass('active')
        } else{
            $('.select.active').removeClass('active')
            select.addClass('active');
            chalgeSelect()
        }
	})
}

function chalgeSelect(){
	let select = $('.select.active'),
		selectActive = select.find('.select__active'),
		selectImg = select.siblings('.calculator__material--img').find('img'),
		arr;
	if(select.index()===1){
		arr = stupeni
	} else {
		arr = perila
	}
	select.find('li').each(function(index, el) {
		$(el).on('click', function(){
			let text = $(el).text(),
				liIndex = index;
				selectImg.attr('src',arr[liIndex].img)
			 select.removeClass('active');
			 selectActive.text(text);
		})
	});
}

$('.calculator__step--radio').on('click', function(){
	let step = $(this).parents('.calculator__step'),
		btnNext = step.find('.calculator__step--next'),
		stepIndex = step.index()-2,
		name = $(this).find('.calculator__step--name').text(),
		img = $(this).find('img').attr('src'),
		resultName = $('.calculator__result .calculator__result--name:eq('+stepIndex+')'),
		resultImg = $('.calculator__result .calculator__result--img:eq('+stepIndex+') img');
		resultName.text(name);
		resultImg.attr('src',img)
		btnNext.addClass('active');

		
})

$('.calculator__height--input').keyup(function(event) {
	let inputVal = $(this).val();
	if(inputVal.length>0){
		let step = $(this).parents('.calculator__step'),
			btnNext = step.find('.calculator__step--next'),
			resultItput = $('.calculator__result .calculator__result--name:eq(4)');
			resultItput.text('h = '+inputVal+' cм');
			resultItput.attr('style','margin-top:8rem');
		btnNext.addClass('active')
	}
});

function wtatStairs(){
	$('.calculator__material').each(function(index, el) {
		let img = $(el).find('img').attr('src'),
			selected = $(el).find('.select__active').text(),
			IndexItem = $(this).index()+2,
			resultImg = $('.calculator__result--img:eq('+IndexItem+') img'),
			resultName = $('.calculator__result--name:eq('+IndexItem+')');
			resultName.text(selected);
			resultImg.attr('src', img)

	});
}
var comment = "";
$('.openCall').on('click', function(){
	target = $(this).data('target')
	$('.popup__call').fadeIn();
	comment = "";


	if($(this).hasClass('popular__btn')){
		comment = $(this).siblings('.popular__about--header').text()
	}
	if($(this).hasClass('step__btn')){
		comment = "Заявка на расчет"
	}

	
	// console.log(comment)


})

$('.popup__close').on('click', function(){
	$(this).parents('.popup').fadeOut()
	target = ""
})

$('.sendBtn').on('click', function(e){
    e.preventDefault();
    let  form = $(this).parents('form') , 
        tel = form.find('input[type=tel]'),
        nameInput = form.find('input[type=text]'),
        // formName = $(this).data('name'),
        // formNameInput = form.find('input[type=formName]'),
        formCommentInput = form.find('.calculator__form--comment'),
        telComment = tel.siblings('.form__comment'),
        nameComment = nameInput.siblings('.form__comment');

        if($(this).data('target')){
        	target = $(this).data('target');
        }

	if($(this).hasClass('calculator__btn')){
		comment = 'Результат опроса: '
		$('.calculator__result--name').each(function(index, el) {
			let header = $(el).siblings('.calculator__result--header').text(),
				resVal = $(el).text();
				comment+= header +": "+resVal+"; "
		});
	}

		// formNameInput.val(formName);
		formCommentInput.val(comment);

    if(nameInput.val().length < 1 ){
    	nameInput.addClass('error')
    	nameComment.text('Введите имя')
    }  else {
    	nameInput.removeClass('error')
    	nameComment.text('')
    }
    if (tel.val().length == 0) { tel.addClass('error'); telComment.text('Введите номер телефона')} 
    	else if (tel.val() == '+7 (___) ___-__-__') { tel.addClass('error'); telComment.text('Введите номер телефона')}  
    		else if (tel.val().indexOf('_') >0) { tel.addClass('error'); telComment.text('Введите номер телефона')}  
    			else {tel.removeClass('error'); telComment.text('')}
    if(form.find('.error').length<1){
        // console.log('нет ошибок')

            var msg = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: msg,
                success: function(data) {
                    $('.popup').fadeOut();
                    form.find('input').each(function(index, el) {
                    	$(el).val("")
                    });
                    yaCounter50687548.reachGoal(target)
                    target="";

                     $('.popup__thanks').fadeIn().delay(1500).fadeOut();
                        },
                error: function(data) {
                            
                        }
                    });
    } else{
         // console.log('есть ошибки')
    }
})


var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
var stupeni = [
			{
				name: 'Сосна',
				img:'img/stupeni/Сосна.jpg'
			},
			{
				name: 'Дуб',
				img:'img/stupeni/Дуб.jpg'
			},
			{
				name: 'Бук',
				img:'img/stupeni/Бук.jpg'
			},
			{
				name: 'Ясень',
				img:'img/stupeni/Ясень.jpg'
			},
			{
				name: 'Листовой металл',
				img:'img/stupeni/Листовой металл.jpg'
			}
		],
	perila = [
		{
			name: 'Сосна',
			img:'img/perila/Сосна.jpg'
		},
		{
			name: 'Дуб',
			img:'img/perila/Дуб.jpg'
		},
		{
			name: 'Бук',
			img:'img/perila/Бук-1.jpg'
		},
		{
			name: 'Ясень',
			img:'img/perila/Ясень.jpg'
		},
		{
			name: 'Орех',
			img:'img/perila/Орех.jpg'
		},
		{
			name: 'Тик',
			img:'img/perila/Тик.jpg'
		},
		{
			name: 'Сталь',
			img:'img/perila/Сталь.jpg'
		},
		{
			name: 'Стекло',
			img:'img/perila/Стекло.jpg'
		},
		{
			name: 'Резьба',
			img:'img/perila/Резьба.jpg'
		},
		{
			name: 'Ковка',
			img:'img/perila/Ковка.jpg'
		},
		{
			name: 'Бук+нержавейка',
			img:'img/perila/Бук+нержавейка.jpg'
		},
		{
			name: 'Точеные балясины',
			img:'img/perila/Точеные балясины.jpg'
		},
		{
			name: 'Комбинированные балясины',
			img:'img/perila/Комбинированные балясины.jpg'
		},
	]

var boxStupeni = $('.calculator__material--content:eq(0)'),
	boxPerila =$('.calculator__material--content:eq(1)');
createSelect(stupeni, boxStupeni)
createSelect(perila, boxPerila)

var slider = [
			{
				name: 'Империя',
				adresShos:'Рублево Успенское ш.',
				posName: 'коттеджный посёлок Лесной простор',
				material: [
					'ступени (дуб тонированный под орех)', 
					'балясины (дуб тонированный)', 
					'перила (дуб тонированный)'
				],
				timeCreate: '24',
				timeMont:'16',
				price:'370 000',
				img: [
				'../img/Кейсы/!5 - империя/Фото0814.jpg',
				'../img/Кейсы/!5 - империя/Фото0816.jpg',
				'../img/Кейсы/!5 - империя/Фото0817.jpg'
				]
			},
			{
				name: 'Галактика',
				adresShos:'Ильинское ш.',
				posName:'коттеджный посёлок Десять ярдов',
				material: ['ступени (дуб)','ограждения (стекло)','перила (дуб тонированный под венге)'],
				timeCreate: '34',
				timeMont:'21',
				price:'530 000',
				img: [
				'../img/Кейсы/!1 - галактика/2015-11-13 14-38-10.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-13 17-09-29.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-13 17-09-40.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-13 17-10-05.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-15 11-45-30.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-15 11-46-00.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-15 11-46-49.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-15 13-02-50.JPG',
				'../img/Кейсы/!1 - галактика/2015-11-15 13-03-18.JPG'
				]
			},
			{
				name: 'Морозко',
				adresShos:'Новорижское ш.',
				posName:'деревня Глухово',
				material: ['ступени (дуб)','балясины (дуб)','перила (дуб)'],
				timeCreate: '17',
				timeMont:'12',
				price:'290 000',
				img: ['../img/Кейсы/!6 - морозко/Фото0720.jpg',
				'../img/Кейсы/!6 - морозко/Фото0721.jpg',
				'../img/Кейсы/!6 - морозко/Фото0722.jpg'
				]
			},
			{
				name: 'Венеция',
				adresShos:'Ленинградское ш.',
				posName:'коттеджный посёлок Новогорск-7',
				material: ['ступени (дуб тонированный под мербао)','ограждения (кованный металл)','перила (дуб тонированный)'],
				timeCreate: '42',
				timeMont:'27',
				price:'640 000',
				img: [
				'../img/Кейсы/!4 - венеция/Фото0889.jpg',
				'../img/Кейсы/!4 - венеция/Фото0890.jpg',
				'../img/Кейсы/!4 - венеция/Фото0891.jpg',
				'../img/Кейсы/!4 - венеция/Фото0892.jpg',
				'../img/Кейсы/!4 - венеция/Фото0915.jpg',
				'../img/Кейсы/!4 - венеция/Фото0916.jpg',
				'../img/Кейсы/!4 - венеция/Фото0917.jpg',
				'../img/Кейсы/!4 - венеция/Фото0918.jpg',
				'../img/Кейсы/!4 - венеция/Фото0919.jpg',
				'../img/Кейсы/!4 - венеция/Фото0920.jpg'
				]
			},
			{
				name: 'Иматра',
				adresShos:'Алтуфьевское ш.',
				posName:'коттеджный посёлок Золотой город',
				material: ['ступени (дуб брашированый)','ограждения (металл)','перила (дуб)'],
				timeCreate: '18',
				timeMont:'14',
				price:'240 000',
				img: [
				'../img/Кейсы/!2 - иматра/IMG_0379.jpg',
				'../img/Кейсы/!2 - иматра/IMG_0414.jpg',
				'../img/Кейсы/!2 - иматра/IMG_0419.jpg',
				'../img/Кейсы/!2 - иматра/IMG_0438.jpg'
				]
			},
			{
				name: 'Версаль',
				adresShos:'Новорижское ш.',
				posName:'коттеджный посёлок Никольская слобода',
				material: ['ступени (дуб)','ограждения (кованный металл)','перила (дуб)'],
				timeCreate: '32',
				timeMont:'19',
				price:'390 000',
				img: [
				'../img/Кейсы/!3 - версаль/Фото0907.jpg',
				'../img/Кейсы/!3 - версаль/Фото0908.jpg',
				'../img/Кейсы/!3 - версаль/Фото0909.jpg',
				'../img/Кейсы/!3 - версаль/Фото0910.jpg',
				'../img/Кейсы/!3 - версаль/Фото0911.jpg'
				]
			},
		]


$('.popular__slider').slick({
	arrows: true,
	infinite: false,
	prevArrow:'<div class="popular__slider--arrowPrev popular__slider--arrow"> <div class="popular__slider--page popular__slider--pageMin">01</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.438 38.44"> <path d="M20.707,37.293 L19.293,38.707 L0.293,19.707 L0.500,19.500 L0.293,19.293 L19.293,0.293 L20.707,1.707 L2.914,19.500 L20.707,37.293 Z"/> </svg> </div>',
	nextArrow:' <div class="popular__slider--arrowNext popular__slider--arrow"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.438 38.44"> <path d="M20.707,19.707 L1.707,38.707 L0.293,37.293 L18.086,19.500 L0.293,1.707 L1.707,0.293 L20.707,19.293 L20.500,19.500 L20.707,19.707 Z"/> </svg> <div class="popular__slider--page popular__slider--pageMax">06</div></div>'
})
$('.popular__slider').each(function(index, el) {
	let content = $(el).find('.popular__sliderMin--content'),
		nav = $(el).find('.popular__sliderMin--nav');

	content.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  infinite: false,
	  asNavFor: nav
	});
	nav.slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  asNavFor: content,
	  dots: false,
	  infinite: false,
	  prevArrow:' <div class="popular__slider--arrowMinPrev"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.482cm" height="0.811cm"> <path d="M42.000,2.120 L21.205,23.000 L21.000,22.794 L20.795,23.000 L-0.000,2.120 L1.401,0.714 L21.000,20.393 L40.599,0.714 L42.000,2.120 Z"/> </svg> </div>',
	  nextArrow:'<div class="popular__slider--arrowMinNext"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.482cm" height="0.811cm"> <path d="M42.000,20.880 L40.599,22.286 L21.000,2.606 L1.401,22.286 L-0.000,20.880 L20.795,-0.000 L21.000,0.205 L21.205,-0.000 L42.000,20.880 Z"/> </svg> </div>',
	  focusOnSelect: true
	});
});
dateCalk()
function plusZero(arr){
	if(arr<10){
		arr='0'+arr;
	}

	return arr
}
function dateCalk(){
	let date = new Date(),
		year = date.getFullYear(),
		month = plusZero(date.getMonth()+1),
		day = plusZero(date.getDate()),
		dateBox = $('.free__offer--date'),
		order = [2,1,7,6,5,4,3][new Date().getDay()], 
		orderBox = $('.free__offer--order'),
		word = ['проект', 'проекта', 'проектов'],
		wordBox = $('.free__offer--word');

		if(order===1){
			wordBox.text(word[0])
		} else if(order>4){
			wordBox.text(word[2])
		} else{
			wordBox.text(word[1])
		}

		result=day+'.'+month+'.'+year;
		dateBox.text(result);
		orderBox.text(order)

}



setTimeout(function() {
	if(!isOpen){
		$('.calculator__step.active').removeClass('active');
		$('.calculator__step:eq(0)').addClass('active')
		$('.popup__calculator').fadeIn()
	}
	
}, 17000);