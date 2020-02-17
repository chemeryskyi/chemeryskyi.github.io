<!DOCTYPE html>

<html lang="ru">

  <head>

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>papasnack - Первый сервис доставки полезных снеков в офис</title>

    <link rel="shortcut icon" href="img/favicon.ico" >

    <link rel="stylesheet" href="css/style.css">



    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->

    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>

      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <![endif]-->

  </head>

  <body>

    <header class="header">

      <div class="container">

        <div class="header__logo logo">papasnack</div>

        <nav class="header__nav ">

          <a href="#about">О сервисе</a>

          <a href="#composition">Что в коробке?</a>

          <a href="#order">Тарифы</a>

          <a href="#footer">Контакты</a>

        </nav>

        <div class="header__phone">8 800 699 69 69</div>

        <div class="header__burger "><span></span></div>

      </div>

    </header>

    <main class="main">

      <div class="container">

        <h1 class="main__header">Первый сервис доставки <span class="newLine">полезных снеков в офис</span></h1>

        <h2 class="main__subheader">Закажи 15 снеков бесплатно</h2>

          <form  class="free__form">

            <input type="email" placeholder="Введите ваш e-mail" name="email">

            <button class="btn free__btn">Получить</button>

          </form>

        <div class="main__img">

          <img src="img/main__img.png" alt="PapaSnack">

        </div>

      </div>

    </main>

    <div class="about" id="about">

      <div class="container">

        <h2 class="about__header blockHeader">О сервисе</h2>

        <h3 class="about__subheader blockSubheader">Сервис доставки снеков по подписке</h3>

        <div class="about__content">

          <div class="about__item">

            <div class="about__img"><img src="img/about__1.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Полезно</h4>

            <p class="about__item--text"><span class="newLine">Мы отправляем только</span> полезные снеки с минимальным или полным отсутствием сахара и жира.</p>

          </div>

          <div class="about__item">

            <div class="about__img"><img src="img/about__2.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Разнообразно</h4>

            <p class="about__item--text">Мы регулярно обновляем состав отправляемых снеков с целью разнообразия и исключения “приедания”.</p>

          </div>

          <div class="about__item">

            <div class="about__img"><img src="img/about__3.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Круто!</h4>

            <p class="about__item--text">Ваша команда будет любить Вас за то, что papasnack есть  у Вас на кухне :) </p>

          </div>

          <div class="about__item">

            <div class="about__img"><img src="img/about__4.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Дешево и быстро</h4>

            <p class="about__item--text">Наша наценка на снеки меньше чем в розничных магазинах при этом Вам даже не надо туда ходить.</p>

          </div>

          <div class="about__item">

            <div class="about__img"><img src="img/about__5.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Удобно</h4>

            <p class="about__item--text">Организуем индивидуальный график доставки. Снеки всегда будут у вас в шкафу.</p>

          </div>

          <div class="about__item">

            <div class="about__img"><img src="img/about__6.jpg" alt="PapaSnack"></div>

            <h4 class="about__item--header">Весело :)</h4>

            <p class="about__item--text">67% опрошенных сотрудников чувствуют себя более счастливыми, если в офисе есть бесплатные снеки.</p>

          </div>

        </div>

      </div>

    </div>

    <div class="free container">

      <div class="free__content">

        <div class="free__info free__block">

          <h2 class="free__header">Бесплатный стенд для снеков</h2>

          <h3 class="free__subheader">C первым заказом, мы бесплатно <span class="newLine">отправим Вам удобный стенд </span> для снеков:)</h3>

          <form  class="free__form">

            <input type="email" placeholder="Введите ваш e-mail" name="email">

            <button class="btn free__btn">Получить</button>

          </form>

          <p class="free__comment">Заполняя форму, я соглашаюсь на сбор, обработку и хранение моих персональных данных в соответствии с Согласием на обработку </p>

        </div>

        <div class="free__img free__block">

          <img src="img/free__img.jpg" alt="PapaSnack">

        </div>

      </div>

    </div>

    <div class="composition" id="composition">

      <div class="container">

        <h2 class="blockHeader composition__header">Что в коробке?</h2>

        <h3 class="blockSubheader composition__subheader">Каждая коробка содержит:</h3>

        <div class="composition__content">

          <div class="composition__item">

            <h3 class="composition__item--header">Снеки и чипсы</h3>

            <div class="composition__item--img"><img src="img/composition__1.jpg" alt="PapaSnack"></div>

          </div>

          <div class="composition__item">

            <h3 class="composition__item--header">Батончики</h3>

            <div class="composition__item--img"><img src="img/composition__2.jpg" alt="PapaSnack"></div>

          </div>

          <div class="composition__item">

            <h3 class="composition__item--header">Ягоды и чувисы:)</h3>

            <div class="composition__item--img"><img src="img/composition__3.jpg" alt="PapaSnack"></div>

          </div>

          <div class="composition__item">

            <h3 class="composition__item--header">Орехи</h3>

            <div class="composition__item--img up"><img src="img/composition__4.jpg" alt="PapaSnack"></div>

          </div>

          <div class="composition__item">

            <h3 class="composition__item--header">Печенье</h3>

            <div class="composition__item--img"><img src="img/composition__5.jpg" alt="PapaSnack"></div>

          </div>

          <div class="composition__item">

            <h3 class="composition__item--header">Криспы</h3>

            <div class="composition__item--img"><img src="img/composition__6.jpg" alt="PapaSnack"></div>

          </div>

        </div>

      </div>

    </div>

    <div class="testing">

      <div class="container">

        <div class="testing__img">

          <img src="img/testing.jpg" alt="PapaSnack">

        </div>

        <div class="testing__info">

          <h3 class="testing__header">Ну что, протестируем?</h3>

          <p class="testing__subheader"><span class="newLine">Заполни форму и получи бесплатную</span> пробную коробку с 15 снеками + детальный прайс :)</p>

        </div>

      </div>

    </div>

    <div class="order" id="order">

      <div class="container">

        <h2 class="order__header">Получи детальный прайс-лист</h2>

        <p class="order__subheader"><span class="newLine">Цены от 14 990 рублей.</span> Заполните форму ниже, чтобы получить бесплатную коробку с 15 снеками + прайс-лист</p>

        <form  class="order__form">

          <label  class="order__form--input">

            <input type="text" placeholder="Имя" name="name">

          </label>

          <label  class="order__form--input">

            <input type="text" placeholder="Фамилия" name="lastname">

          </label>

          <label  class="order__form--input">

            <input type="text" placeholder="Название компании" name="company">

          </label>

          <div  class="order__form--input min">

            <input type="tel" placeholder="Рабочий телефон" name="phone">

            <input type="text" placeholder="Доб." name="dob">

          </div>

          <label  class="order__form--input big">

            <input type="email" placeholder="Рабочий e-mail" name="email" value="<?php $email = $_GET['email']; echo $email; ?>">

          </label>

          

          <div class="select ">

            <input type="hidden" name="position">

            <div class="select__active">Должность</div>

            <div class="select__list">

              <ul>

                <li>Генеральный директор / владелец</li>

                <li>Административный директор</li>

                <li>Исполнительный директор </li>

                <li>Финансовый директор</li>

                <li>Коммерческий директор</li>

                <li>Директор по персоналу </li>

                <li>Директор филиала </li>

                <li>Офис-менеджер </li>

                <li>Помощник руководителя</li>

                <li>Секретарь отдела </li>

                <li>Директор по развитию </li>

                <li>Менеджер по персоналу</li>

                <li>Начальник АХО</li>

                <li>Соискатель / Студент / Для дома</li>

                <li>Пресса / Медиа</li>

                <li>Другая</li>

            </ul>

            </div>

          </div>

          <div class="select hide">

            <input type="hidden" name="employees">

            <div class="select__active">Количество сотрудников в компании?</div>

            <div class="select__list">

              <ul>

                <li>1-5</li>

                <li>6-10</li>

                <li>11-20</li>

                <li>21-40</li>

                <li>41-60</li>

                <li>61-80</li>

                <li>81-100</li>

                <li>101-200</li>

                <li>201+</li>

            </ul>

            </div>

          </div>

          <div class="select hide">

            <input type="hidden" name="howMuch">

            <div class="select__active">Сколько вы тратите на снеки сейчас?</div>

            <div class="select__list">

              <ul>

                <li>₽0 - Мы не покупаем снеки</li>

                <li>₽1 - ₽14 000/месяц</li>

                <li>₽14 001 - ₽35 000/месяц</li>

                <li>₽35 001 - ₽70 000/месяц</li>

                <li>₽70 001 - ₽70 000/месяц</li>

                <li>₽70 001 +/месяц</li>

                <li>Не знаю точно, но много</li>

                <li>Не знаю точно, но не много</li>

            </ul>

            </div>

          </div>


          <button class="btn order__btn sendBtn">Получить бесплатную пробную коробку</button>

        </form>

      </div>

    </div>

    <footer class="footer" id="footer">

      <div class="container">

        <div class="footer__left">



          <div class="footer__logo logo">papasnack</div>

          <div class="footer__copyr">copyright © 2019 by papasnack.ru. Все права защищены Запрещено любое копирование материалов ресурса  без письменного согласия владельца — ООО "Амо-групп".</div>

        </div>

        <div class="footer__mid">

          <div class="footer__social">

            <a href="#">

              <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"

                 viewBox="0 0 40.9 41.1" enable-background="new 0 0 40.9 41.1" xml:space="preserve">

              <path fill="none" stroke="#3B3B3B" stroke-width="3" d="M11.5,1.5h18c5.5,0,10,4.5,10,10v18c0,5.5-4.5,10-10,10h-18

                c-5.5,0-10-4.5-10-10v-18C1.5,6,6,1.5,11.5,1.5z"/>

              <g>

                <defs>

                  <rect  x="4.5" y="12.9" width="31.5" height="18"/>

                </defs>



                <path  fill="#3B3B3B" d="M20,30.7h1.9c0,0,0.6,0,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8c0,0,0-2.5,1.1-2.8

                  s2.7,2.5,4.2,3.5c0.6,0.4,1.3,0.7,2,0.6h4.2c0,0,2.2-0.2,1.1-1.9c-0.9-1.3-1.9-2.6-3.1-3.6c-2.7-2.5-2.4-2,0.9-6.3

                  c1.9-2.5,2.7-4.1,2.5-4.9c-0.2-0.6-1.6-0.5-1.6-0.5h-4.7c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.3-0.5,0.5

                  c-0.5,1.2-1.1,2.5-1.7,3.6c-2,3.6-3,3.8-3.3,3.6c-0.8-0.5-0.6-2-0.6-3.1c0-3.5,0.5-4.9-1.1-5.3c-0.7-0.2-1.5-0.2-2.2-0.2

                  c-1.3-0.1-2.7,0-3.9,0.5c-0.5,0.3-0.9,0.8-0.6,0.9c0.5,0,1,0.3,1.4,0.6c0.3,0.7,0.5,1.4,0.5,2.2c0,0,0.3,4.1-0.6,4.6

                  c-0.6,0.3-1.6-0.3-3.5-3.6c-0.9-1.7-1.7-3.5-1.7-3.5c-0.1-0.2-0.2-0.3-0.3-0.5c-0.3-0.1-0.5-0.2-0.8-0.3H5.5

                  c-0.3,0-0.7,0.1-0.9,0.3c-0.1,0.3-0.1,0.5,0,0.8c0,0,3.5,8.2,7.5,12.4C14.2,29.4,17,30.6,20,30.7"/>

              </g>

              </svg>

            </a>

            <a href="#">

              <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">

                  <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544

                    C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472

                    H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728

                    V363.272z"/>

                    <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>

                  <circle cx="396" cy="116" r="20"/>

              </svg>



            </a>

          </div>

          <a href="mailto:info@papasnack.ru">info@papasnack.ru</a>

          <a href="#" class="footer__politic">Политика конфиденциальности</a>



        </div>

        <div class="footer__contact">

          <div class="footer__phone">8 800 699 69 69</div>

          <div class="btn footer__btn ">Заказать звонок</div>

        </div>

      </div>

    </footer>





    <div class="popup popup__call">

      <div class="popup__box">

        <div class="popup__close">

                    

          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"

             viewBox="0 0 31.112 31.112" style="enable-background:new 0 0 31.112 31.112;" xml:space="preserve">

          <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 

            29.698,31.112 31.112,29.698 16.97,15.556 "/>





          </svg>

        </div>

        <form class="popup__form">

          <h3 class="popup__header">Заполните форму</h3>

          <input type="text" placeholder="Имя" name="name"> 

          <input type="tel" placeholder="Рабочий телефон" name="phone">

          <input type="hidden"  name="comment" value="Заказ обратного звонка">

          <button class="btn sendBtn">Отправить</button> 

        </form>

      </div>

    </div>

    <div class="popup popup__thanks">

      <div class="popup__box">

        <div class="popup__close">

                    

          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"

             viewBox="0 0 31.112 31.112" style="enable-background:new 0 0 31.112 31.112;" xml:space="preserve">

          <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 

            29.698,31.112 31.112,29.698 16.97,15.556 "/>





          </svg>

        </div>



          <h3 class="popup__header">Заявка получена</h3>

      </div>

    </div>

     <div class="popup popup__try">

      <div class="popup__box">

        <div class="popup__close">

                    

          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"

             viewBox="0 0 31.112 31.112" style="enable-background:new 0 0 31.112 31.112;" xml:space="preserve">

          <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 

            29.698,31.112 31.112,29.698 16.97,15.556 "/>





          </svg>

        </div>

       <h2 class="order__header">Получи детальный прайс-лист</h2>

        <p class="order__subheader"><span class="newLine">Цены от 14 990 рублей.</span> Заполните форму ниже, чтобы получить бесплатную коробку с 15 снеками + прайс-лист</p>

        <form  class="order__form">

          <label  class="order__form--input">

            <input type="text" placeholder="Имя" name="name">

          </label>

          <label  class="order__form--input">

            <input type="text" placeholder="Фамилия" name="lastname">

          </label>

          <label  class="order__form--input">

            <input type="text" placeholder="Название компании" name="company">

          </label>

          <div  class="order__form--input min">

            <input type="tel" placeholder="Рабочий телефон" name="phone">

            <input type="text" placeholder="Доб." name="dob">

          </div>

          <label  class="order__form--input big">

            <input type="email" placeholder="Рабочий e-mail" name="email">

          </label>

          

          <div class="select ">

            <input type="hidden" name="position">

            <div class="select__active">Должность</div>

            <div class="select__list">

              <ul>

                <li>Генеральный директор / владелец</li>

                <li>Административный директор</li>

                <li>Исполнительный директор </li>

                <li>Финансовый директор</li>

                <li>Коммерческий директор</li>

                <li>Директор по персоналу </li>

                <li>Директор филиала </li>

                <li>Офис-менеджер </li>

                <li>Помощник руководителя</li>

                <li>Секретарь отдела </li>

                <li>Директор по развитию </li>

                <li>Менеджер по персоналу</li>

                <li>Начальник АХО</li>

                <li>Соискатель / Студент / Для дома</li>

                <li>Пресса / Медиа</li>

                <li>Другая</li>

            </ul>

            </div>

          </div>

          <div class="select hide">

            <input type="hidden" name="employees">

            <div class="select__active">Количество сотрудников в компании</div>

            <div class="select__list">

              <ul>

                <li>1-5</li>

                <li>6-10</li>

                <li>11-20</li>

                <li>21-40</li>

                <li>41-60</li>

                <li>61-80</li>

                <li>81-100</li>

                <li>101-200</li>

                <li>201+</li>

            </ul>

            </div>

          </div>

          <div class="select hide">

            <input type="hidden" name="howMuch">

            <div class="select__active">Сколько вы тратите на снеки сейчас</div>

            <div class="select__list">

              <ul>

                <li>₽0 - Мы не покупаем снеки</li>

                <li>₽1 - ₽14 000/месяц</li>

                <li>₽14 001 - ₽35 000/месяц</li>

                <li>₽35 001 - ₽70 000/месяц</li>

                <li>₽70 001 - ₽70 000/месяц</li>

                <li>₽70 001 +/месяц</li>

                <li>Не знаю точно, но много</li>

                <li>Не знаю точно, но не много</li>

            </ul>

            </div>

          </div>

          <button class="btn order__btn sendBtn">Получить бесплатную пробную коробку</button>

        </form>

      </div>

    </div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->

    <script src="js/main.js"></script>

    <!--envybox-->

    <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css">

    <script type="text/javascript" src="https://cdn.envybox.io/widget/cbk.js?wcb_code=90f0bfd2f5985b33961a61dce05c96c9" charset="UTF-8" async></script>

    

  </body>

</html>