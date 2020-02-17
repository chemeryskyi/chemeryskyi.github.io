
      $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      });
      $('.partners__slider').find('.slick-track').css('display','flex')

      $('.case__slider').slick({
        arrows: false,       
         autoplay: true,
        autoplaySpeed: 2000, 
        dots: true
      })
      $('.case__item,.slick-dots').css('display','flex')

      $('.openPopup').on('click',function(){
        let popup = $('.popup__call')

          popup.fadeIn()
           popup.find('.popup__box').addClass('show')

      })
      $('.popup__close').on('click',function(){
        let popup = $(this).parents('.popup'), box = popup.find('.popup__box')
box.removeClass('show')
popup.fadeOut()
      })
      $("a[href]").bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0
    }, 1500);
    e.preventDefault();
    return false;
});

      $(document).scroll(function(event) {
    if ($(document).scrollTop() > $('.main').height() + 20) {
        $('.header').addClass('fixed');
    } else {

        $('.header').removeClass('fixed');
    }

});



$('.vacancy__item--header').on('click',function(){
  let block = $(this).parents('.vacancy__item'),
      description = block.find('.vacancy__item--description');
      if(block.hasClass('active')){
        block.removeClass('active')
        description.slideUp()
      } else{
          $('.vacancy__item.active').find('.vacancy__item--description').slideUp()
          $('.vacancy__item.active').removeClass('active')
          block.addClass('active')
          description.slideDown()
      }
})


$('.input__file input').change(function(event) {
  let text = $(this)[0].files[0].name;
  $(this).siblings('.input__file--text').text(text)
});

