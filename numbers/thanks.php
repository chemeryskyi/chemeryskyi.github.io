<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>ЦЕНТР АННЫ МАТАРИ - Узнайте, кем Вы были в прошлой жизни!</title>
    <link rel="shortcut icon" href="img/favicon.ico" >
    <link href="https://fonts.googleapis.com/css?family=Montserrat:700&amp;subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

        <?

        function elevencheck ($num)
        {

            while ($num > 11) {

                $newnum = $num % 10 + floor($num/10);
                $num = $newnum;

             } 

            return $num;
        }

        function squery ($position_, $number_)

        {

        $sqllink = mysql_connect("mysql91.1gb.ru", "gb_annamatari", "b7fd4c9ef45");
        if (!$sqllink) {
            die('Could not connect: ' . mysql_error());
          }
         
        mysql_select_db("gb_annamatari") or die(mysql_error()); 

        $selectquery = "SELECT videofile FROM tu_numervideo ";
        $selectquery = $selectquery." WHERE number_ = ".$number_." AND position_ = ".$position_;

        //echo $selectquery;

        $result = mysql_query($selectquery);
        if (!$result) {
            die("Query to show fields from table failed");
        }

        $arrvideolink = mysql_fetch_row($result);

        $videolink = $arrvideolink[0];

        mysql_free_result($result);

        return $videolink;

        }

        // if(isset($_POST['submit']))

        // {
            $birthday = $_POST['day'];
            $birthmonth = $_POST['mounth'];
            // if ($birthmonth == 'Январь') {$birthmonth = '01';}
            //  elseif ($birthmonth == 'Февраль') {$birthmonth = '02';}
            //     elseif ($birthmonth == 'Март') {$birthmonth = '03';}
            //         elseif ($birthmonth == 'Апрель') {$birthmonth = '04';}
            //             elseif ($birthmonth == 'Май') {$birthmonth = '05';}
            //                 elseif ($birthmonth == 'Июнь') {$birthmonth = '06';}
            //                     elseif ($birthmonth == 'Июль') {$birthmonth = '07';}
            //                         elseif ($birthmonth == 'Август') {$birthmonth = '08';}
            //                             elseif ($birthmonth == 'Сентябрь') {$birthmonth = '09';}
            //                                 elseif ($birthmonth == 'Октябрь') {$birthmonth = '10';}
            //                                     elseif ($birthmonth == 'Ноябрь') {$birthmonth = '11';}
            //                                         elseif ($birthmonth == 'Декабрь') {$birthmonth = '12';}
            $birthyear = $_POST['year'];

            $bdarray = str_split($_POST['birthdate']);

            // if ($birthday < 10) {
            //     $birthday = '0'.$birthday;
            // }

            $soul = $birthday;
            $soul = elevencheck($soul);

            $mirror = $birthmonth;
            $mirror = elevencheck($mirror);

            $gift = substr($birthyear, -2, 2);
            $gift = elevencheck($gift);


            $destiny = $birthyear;
            $destiny = elevencheck($destiny);
            $destiny = elevencheck($destiny + substr($rbirthyear, -2, 1)); 
            $destiny = elevencheck($destiny + substr($rbirthyear, -1, 1)); 


            $path = elevencheck($soul + $mirror);    
            $path = elevencheck($path + $destiny);
            //$soul = elevencheck($soul);

            $pathfile = squery('8', intval($gift)); 


            // } else {
            //     echo " 222";
            // }
        ?>

  <body class="thanksPage" >
     <div class="header"><div class="container">
        <div class="header__logo"><img src="img/logo.png" alt="ЦЕНТР АННЫ МАТАРИ"></div>
        <div class="header__slogan"><span>ЦЕНТР </span>АННЫ МАТАРИ</div>
      </div>
      
    </div>

    <div class="main ">
      <div class="container">
        <h1 class="main__header"><span>Узнайте,</span> кем Вы были в прошлой жизни!</h1>
        <div class="main__subheader">В дате Вашего рождения зашифрована информация о прошлых жизнях. Узнайте, чем Вы занимались, <span>какими навыками обладали и с какими проблемами сталкивались в прошлых реинкарнациях.</span></div>
		<div class="date__row">
			<div class="date">
				<div class="date__what">Ваша дата рождения:</div>
				<div class="date__value"><? echo $birthday.'.'.$birthmonth.'.'.$birthyear; ?></div>
			</div>
			<div class="date">
				<div class="date__what">Ваше число подарка:</div>
				<div class="date__value"><? echo $gift; ?></div>
			</div>
		</div>
		<div class="result">
            <?php echo $pathfile; ?>
			<div class="result__item">
				<h3>ДЛЯ ЖЕНЩИН:</h3>
				<p>6 — Человек молитвы / Ясновидящая / Святая</p>
				<p>Вы обладаете большим желанием строить свою собственную реальность своими собственными руками.</p>
				
				<p>Когда 6 не реализовала  свой потенциал— это люди, интуитивно  ощущающие,  что   та   жизнь,   которой  они живут  -  не отвечает их  внутренним  ожиданиям,  «все  должно  быть  не  так» .  Как  будто  в  супермаркете,  где  раздают  жизни,  им случайно отдали не их жизнь -) У 6 есть большое желание жить той жизнью, которой они хотят жить, и строить ее своими собственными руками.</p>

				<p>6 — это Человек Молитвы, Вы ощущаете связь с Богом, с Создателем, сознательно  или  подсознательно  Вы  ищите  Бога. Даже если Вы не принадлежите ни к какой конфессии или религии. Человек молитвы — просит  и  получает ответ на свои молитвы! В Вашем потенциале — дар манифестации реальности, то есть материализации Ваших слов, воплощение слов в жизнь. Ваше лучшее «оружие» - молитва, благодарность, сила слова. Вы можете воплощать   Ваши   слова   в   реальность. Кстати, поосторожнее с проклятьями!  Они будут сбываться, но могут вернуться к Вам. Используйте силу молитвы  и силу благодарности. </p>
			</div>
			<div class="result__item">
				<h3>ДЛЯ мужчин:</h3>
				<p>6 — Создатель реальности / Человек молитвы / Шаман / Святой.</p>
				<p>
					Вы обладаете большим желанием строить свою собственную реальность своими собственными руками.
				</p>
				<p>
					Когда   6   не реализовал свой потенциал— это люди, интуитивно ощущающие, что та жизнь,   которой   они   живут   -   не отвечает   их  внутренним  ожиданиям,  «все  должно  быть  не  так» . Как  будто  в  супермаркете, где  раздают  жизни,  им случайно отдали не их жизнь -) У 6 есть большое желание жить той жизнью, которой они хотят жить, и строить ее своими собственными руками. <br>
					Реальность, создаваемая 6, проецируется в жизнь посредством шестой чакры, третьего глаза. Вы обладаете потенциалом материализации своих мыслей, через свои слова, проекцию и концентрацию на цели. Будьте внимательны и острожны со своими словами и мыслями. Помните, анекдот про Ангела-Хранителя, записывающего за мужчиной  - «Так?  Жена  стерва, начальник дурак, жизнь г..но. Что же ты все время одно и то же заказываешь?» ? Это — про Вас. Мечтайте, просите и создавайте ту реальность, в которой Вам действительно хотелось бы жить.
				</p>

				<p>
					6 — это Человек Молитвы, Вы ощущаете связь с Богом, с Создателем, сознательно  или  подсознательно  Вы  ищите  Бога. Даже если Вы не принадлежите ни к какой конфессии или религии. Человек молитвы — просит и получает ответ  на  свои молитвы! Не обязательно ходить в церковь, чтобы ощущать свою связь с Создателем. Ваш потенциал — найти  и укрепить эту связь, ощущая себя Творцом Своей Собственной Реальности. И тогда Вы точно будете знать, что выданная в супермаркете жизнь — Ваша.
				</p>


			</div>
		</div>
      </div>
    </div>
    <div class="notAll">
    	<div class="container">
    		<h2 class="notAll__header">Но это ещё не всё!</h2>
    		<div class="notAll__content">
    			<div class="notAll__video notAll__block">
    				<div class="notAll__video--header">Посмотрите видеообращение Анны Матори!</div>
    				<iframe src="https://www.youtube.com/embed/Dm3iajiw_1A"  allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    			</div>
    			<div class="notAll__info notAll__block">
    				<p class="notAll__text">Теперь Вы знаете о своей прошлой жизни: кем Вы были, какие у Вас предрасположенности и таланты. И главное: теперь Вы видите ориентир для развития.</p>
    				<p class="notAll__text">Но это ещё не всё! Акара-нумерология не единственный способ узнать о прошлом. Мы предлагаем Вам узнать ещё больше о предыдущих реинкарнациях и своими глазами увидеть прошлые жизни при помощи медитации "погружения".</p>
    				<p class="notAll__text">Для этого мы разработали специальную 2-часовую видеоконсультацию, на которой мы вместе не только погрузимся в Ваше прошлое, но и проработаем проблемы, связанные с ним. Мы вместе снимем мешающие в текущей жизни блоки.</p>
    				<div class="notAll__price">
    					<p class="notAll__price--text">Цена при оплате сегодня:</p>
    					<div class="notAll__price--old">3500</div>
    					<div class="notAll__price--new"> 990 руб.</div>
    				</div>
    				<div class="btn notAll__btn"><span>Получить консультацию</span></div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="consists">
    	<div class="container">
    		<div class="consists__item">
    			<div class="consists__img"><img src="img/consists__1.png" alt="Програма"></div>
    			<div class="consists__text">Целых 2 часа мы вместе будем работать <br>только над Вашими запросами.</div>
    		</div>
    		<div class="consists__item">
    			<div class="consists__img"><img src="img/consists__2.png" alt="Програма"></div>
    			<div class="consists__text">При помощи медитации "погружения" в прошлое Вы увидите причины беспокоящих проблем. Ведь именно в прошлом кроются корни неудач настоящего.</div>
    		</div>
    		<div class="consists__item">
    			<div class="consists__img"><img src="img/consists__3.png" alt="Програма"></div>
    			<div class="consists__text">В процессе консультации мы вместе проработаем проблемы прошлых жизней, родовые проблемы, кармические, психологические и душевные блоки.</div>
    		</div>
    	</div>
    </div>
    <div class="plan">
    	<div class="container">
    		<h2 class="plan__header">Что будет на консультации?</h2>
    		<div class="plan__item">
    			<div class="plan__number">
    				1
    				<div class="plan__number--bg">1</div>
    			</div>
    			<div class="plan__info">
    				<h3 class="plan__item--header">Сформулируем запрос</h3>
    				<p>Вместе разберем ваши проблемы или желания и сформулируем максимально четко цель для трансформации. С точным запросом мы эффективнее проработаем проблему или выполним Ваше желание.</p>
    			</div>
    		</div>
    		<div class="plan__item">
    			<div class="plan__number">
    				2
    				<div class="plan__number--bg">2</div>
    			</div>
    			<div class="plan__info">
    				<h3 class="plan__item--header">Выявим и проработаем мешающие блоки при помощи медитации "погружения"</h3>
    				<p>В медитации "погружения" Вы своими глазами увидите прошлые жизни, историю рода или души. Таким образом выявим мешаюшие Вам блоки, поймём корни текущих проблем.</p>
    				<p>И это могут быть не только кармические блоки, связанные с прошлыми жизнями, но и психологические установки из детства, родовые проблемы, передающиеся от родственников, и блоки связанные с душой. К примеру: проблемы в отношениях и программы на одиночество часто передаются по роду - от матери к дочери.</p>
    				<p>После выявления мы вместе устраним блоки с помощью специальных техник. Вы будете свободны от ограничений и сможете достичь желаемого</p>
    			</div>
    		</div>
    		<div class="plan__item">
    			<div class="plan__number">
    				3
    			<div class="plan__number--bg">3</div>

    			</div>
    			<div class="plan__info">
    				<h3 class="plan__item--header">Сделаем настройку на реализацию желаний</h3>
    				<p>После устранения блоков мы сделаем сонастройку с желаниями.  Вы запрограммируете себя на легкое движение к целям и дадите импульс бессознательному на работу. Появятся новые силы за счет обращения к резервам психики.</p>
    			</div>
    		</div>
    		<div class="plan__item">
    			<div class="plan__number plan__number--text">
    				Бонусная <br> техника
    				<div class="plan__number--bg">
    					Бонусная <br> техника
    				</div>
    			</div>
    			<div class="plan__info">
    				<h3 class="plan__item--header">Вы поймете свои истинные желания</h3>
    				<p>А также мы найдём Ваши настоящие желания. Чего Вы искренне хотите всем сердцем. Ведь именно искренние желание двигают нас вперёд, и, если мы хотим чего-то по настоящему, то это обязательно сбудется.</p>
    			</div>
    		</div>
            <div class="plan__item--sell">
                <h3 class="plan__item--header">Получите часовую видеоконсультацию!</h3>
                <div class="notAll__price">
                        <p class="notAll__price--text">Цена при оплате сегодня:</p>
                        <div class="notAll__price--old">3500</div>
                        <div class="notAll__price--new"> 990 руб.</div>
                    </div>
                    <div class="btn notAll__btn"><span>Получить консультацию</span></div>
            </div>
    	</div>
    </div>
    <div class="question">
    	<div class="container">
    		<h2 class="question__header">Какие вопросы Вы решите?</h2>
            <h2 class="question__header--mobile">Какие вопросы Вы решите на консультации?</h2>
    		<div class="question__content">
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__1.png" alt="Здоровье"></div>
    				<h3 class="question__item--header">Здоровье</h3>
    				<div class="question__item--text">Постоянное недомогание или частые болезни. Вы увидите, какие проблемы привели Вас к болезням.</div>
    			</div>
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__2.png" alt="Отношения"></div>
    				<h3 class="question__item--header">Отношения</h3>
    				<div class="question__item--text">Взаимоотношения с коллегами или начальником на работе. Ссоры в семье, тяжёлые отношения со второй половиной или хроническое одиночество.</div>
    			</div>
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__3.png" alt="Финансовое благополучие"></div>
    				<h3 class="question__item--header">Финансовое благополучие</h3>
    				<div class="question__item--text">Недостаток денег или проблемы, связанные с деньгами: долги, зависть, предательство. Вы поймёте, как обрести процветание и финансовое изобилие.</div>
    			</div>
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__4.png" alt="Счастье"></div>
    				<h3 class="question__item--header">Счастье</h3>
    				<div class="question__item--text">Вы чувствуете, что несчастливы, либо запутались в жизни. У Вас есть внутри вопросы, на которые никак не найдёте ответы. Мы отыщем Ваш путь к счастью.</div>
    			</div>
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__5.png" alt="Предназначение"></div>
    				<h3 class="question__item--header">Предназначение</h3>
    				<div class="question__item--text">Работа не приносит удовольствия. Чувствуете, что либо не тем занимаетесь, либо не реализовываете свой потенциал на 100%.</div>
    			</div>
    			<div class="question__item">
    				<div class="question__item--img"><img src="img/question__6.png" alt="Скрытые блоки"></div>
    				<h3 class="question__item--header">Скрытые блоки</h3>
    				<div class="question__item--text">Вы пытаетесь чего-то добиться, но раз за разом по непонятным причинам терпите неудачу. Вы увидите мешающие развиваться скрытые барьеры.</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="reason">
    	<div class="container">
    		<h2 class="reason__header">Корни этих проблем в прошлом!</h2>
    		<p class="reason__text">На консультации мы выявим все возможные проблемы и найдём их корни. Они могут быть в прошлой жизни, в истории души, истории рода или в психологических установках из детства.</p>
    		<p class="reason__text">Более того, мы сразу же проработаем эти проблемы, и больше они не будут Вам мешать!</p>
    		<div class="reason__price">
    			<div class="reason__price--text">Цена при оплате сегодня:   </div>
    			<div class="reason__price--old">3500</div>
    			<div class="reason__price--new">990 руб.</div>
    		</div>
    		<div class="reason__btn btn"><span>Получить консультацию</span></div>
    	</div>
    </div>
    <div class="confResult">
    	<div class="container">
    		<h2 class="confResult__header">И в результате:</h2>
    		<div class="confResult__content">
    			<div class="confResult__item">
    				<div class="confResult__img"><img src="img/confResult__1.png" alt="И в результате"></div>
    				<p class="confResult__text">Вы поймете истинное предназначение и как по нему двигаться.</p>
    			</div>
    			<div class="confResult__item">
    				<div class="confResult__img"><img src="img/confResult__2.png" alt="И в результате"></div>
    				<p class="confResult__text">Почувствуете радость самопознания. Перешагнёте барьеры, мешающие наслаждаться жизнью.</p>
    			</div>
    			<div class="confResult__item">
    				<div class="confResult__img"><img src="img/confResult__3.png" alt="И в результате"></div>
    				<p class="confResult__text">Поймёте, как строить отношения с окружающими, самим собой и со своей второй половиной.</p>
    			</div>
    		</div>
    		<h2 class="confResult__header">И многое другое...!</h2>
    	</div>
    </div>
	<div class="safe">
   		<div class="container">
        	<div class="safe__text">
            	<span>
            		И это безопасно. Мы применяем медитативные техники, погружающие нас только вглубь нашего бессознательного. Более того, эти техники применили сотни людей на наших консультациях, и все они изменили свои жизни к лучшему.
            	</span>
            	<div class="safe__img">
                	<img src="img/safe__ornament.png" alt="">
    			</div>
            </div>
        </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="about__img wow  fadeInUp animated" data-wow-delay="0.1s">
          <img src="img/about__img.png" alt="Анна Матари">
        </div>
        <div class="about__info">
          <h2 class="about__header wow  fadeInUp animated" data-wow-delay="0.15s">Меня зовут Анна Матари</h2>
                  <div class="about__img--mobile">
          <img src="img/about__img.png" alt="Анна Матари">
        </div>
          <div class="about__text wow  fadeInUp animated" data-wow-delay="0.2s">
           <p>И я — основатель и практик Акаши-метода. Этот метод основывается на индуистском учении об Акаши - тонкой материи или энергии, пронизывающей наш мир. В Акаши содержатся все знания о прошлом и будущем, и, прикасаясь к ней, мы можем больше узнать о нас самих.</p>
           <p>Акаши-метод сочетает лучшие практики ясновидения, исцелений, регрессологии, техник работы с родом и активационных энергетических методик. И это всё позволит мгновенно трансформировать Вашу жизнь к лучшему.</p>
           <p>10 лет назад я начала изучать кундалини-йогу, параллельно изучая и практикуя методики трансформации жизни и Духовной психологии. И сегодня я готова поделиться с Вами накопленными за это десятилетие опытом и знаниями.</p>
           <p>После консультации Вы избавитесь от неработающих жизненных программ и сможете легко реализовывать свое духовное предназначение, строить счастливую жизнь.</p>

          </div>
        </div>
      </div>
    </div>
    <div class="thanksBunner">
        <div class="container">
            <p class="thanksBunner__text">
                Эта консультация - возможность понять свое истинное предназначение, заглянуть внутрь себя и увидеть картину своих скрытых способностей.
            </p>
            <div class="thanksBunner__right">
                <div class="reason__price">
                    <div class="reason__price--text">Цена при оплате сегодня: </div>
                    <div class="reason__price--old">3500</div>
                    <div class="reason__price--new">990 руб.</div>
                </div>
                <div class="reason__btn btn"><span>Получить консультацию</span></div>
            </div>
        </div>
    </div>
    <div class="review">
        <div class="container">
            <h2 class="review__header">
                Прочитайте слова благодарности о консультациях в более чем <span>150 настоящих отзывах</span>
            </h2>
            <div class="review__slider">
                <div class="review__slide">
                    <div class="review__item">
                        <div class="review__item--avatar"><img src="img/review__avatar.jpg" alt="Татьяна Рябова"></div>
                        <div class="review__item--name">Татьяна Рябова</div>
                        <div class="review__item--city">Москва</div>
                        <p class="review__item--text">Благодарю вас! Это нечто, до сих пор хожу под впечатлением! Мне очень понравилось.Консультация была как нельзя вовремя! Именно этой информации мне сейчас не хватало.</p>
                    </div>
                </div>
                <div class="review__slide">
                    <div class="review__item">
                        <div class="review__item--avatar"><img src="img/review__avatar.jpg" alt="Татьяна Рябова"></div>
                        <div class="review__item--name">Татьяна Рябова</div>
                        <div class="review__item--city">Москва</div>
                        <p class="review__item--text">Благодарю вас! Это нечто, до сих пор хожу под впечатлением! Мне очень понравилось.Консультация была как нельзя вовремя! Именно этой информации мне сейчас не хватало.</p>
                    </div>
                </div>
                <div class="review__slide">
                    <div class="review__item">
                        <div class="review__item--avatar"><img src="img/review__avatar.jpg" alt="Татьяна Рябова"></div>
                        <div class="review__item--name">Татьяна Рябова</div>
                        <div class="review__item--city">Москва</div>
                        <p class="review__item--text">Благодарю вас! Это нечто, до сих пор хожу под впечатлением! Мне очень понравилось.Консультация была как нельзя вовремя! Именно этой информации мне сейчас не хватало.</p>
                    </div>
                </div>
                <div class="review__slide">
                    <div class="review__item">
                        <div class="review__item--avatar"><img src="img/review__avatar.jpg" alt="Татьяна Рябова"></div>
                        <div class="review__item--name">Татьяна Рябова</div>
                        <div class="review__item--city">Москва</div>
                        <p class="review__item--text">Благодарю вас! Это нечто, до сих пор хожу под впечатлением! Мне очень понравилось.Консультация была как нельзя вовремя! Именно этой информации мне сейчас не хватало.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="thanksBunner thanksBunner__second">
        <div class="container">
            <p class="thanksBunner__text">
                После консультации Вы преодолеете мешающие барьеры, раскроете таланты и реализуете потенциал на 100%
            </p>
            <div class="thanksBunner__right">
                <div class="reason__price">
                    <div class="reason__price--text">Цена при оплате сегодня: </div>
                    <div class="reason__price--old">3500</div>
                    <div class="reason__price--new">990 руб.</div>
                </div>
                <div class="reason__btn btn"><span>Получить консультацию</span></div>
            </div>
        </div>
    </div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        $('.review__slider').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
              adaptiveHeight: true,

            prevArrow: '<div class="review__arrow review__arrow--prev"></div>',
            nextArrow: '<div class="review__arrow review__arrow--next"></div>',
              responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
                    centerMode: false,

      }
    }

  ]
            });
    </script>
  </body>
</html>