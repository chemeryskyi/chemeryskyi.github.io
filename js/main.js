function submitForm() {
  event.preventDefault();
  let formValid = true,
    form = event.target.closest("form"),
    btn = form.querySelector("button"),
    inputs = form.querySelectorAll("input,textarea");
  btn.disabled = true;
  inputs.forEach((input) => {
    let inputValid = true,
      line = input.closest(".popup-line");
    if (input.type === "text") {
      inputValid = !!input.value.trim();
    } else if (input.type === "tel") {
      inputValid = input.value.trim().replace(/\D/g, "").length === 12;
    }

    if (line) {
      inputValid ? line.classList.remove("error") : line.classList.add("error");
    }
    formValid = inputValid && formValid;
  });

  if (formValid) {
    const data = new FormData(),
      isEng = location.pathname.indexOf("en") !== -1;
    let formResult = form.querySelector(".popup-line-btn"),
      errorActions = () => {
        formResult.innerHTML = `<div class="popup-line-comment">${
          isEng
            ? `An error has occurred. Try again!`
            : `Виникла помилка. Спробуйте ще!`
        }</div>`;
        formResult.classList.add("error");
        formResult.classList.add("active");
        setTimeout(() => {
          btn.disabled = false;
          formResult.classList.remove("active");
          formResult.classList.remove("good");
          formResult.classList.remove("error ");
        }, 3e3);
      };
    inputs.forEach((input) => {
      data.append(input.placeholder, input.value);
    });
    try {
      fetch(`/form-request.php`, {
        method: "POST",
        body: data,
      })
        .then((data) => data.text())
        .then((data) => {
          formResult.innerHTML = `<div class="popup-line-comment">${
            isEng
              ? `The application has been successfully submitted!`
              : `Заявка успішно відправлена!`
          }</div>`;
          formResult.classList.add("active");
          formResult.classList.add("good");
          setTimeout(() => {
            btn.disabled = false;
            formResult.classList.remove("active");
            formResult.classList.remove("good");
            formResult.classList.remove("error");
            popup.close();
          }, 3e3);
        })
        .catch((e) => {
          errorActions();
        });
    } catch (e) {
      errorActions();
    }
  } else {
    btn.disabled = false;
    console.log("error");
  }
}

function fileChange() {
  let input = event.target,
    name = event.target.files[0].name,
    line = input.closest(".popup-line"),
    isEng = location.pathname.indexOf("en") !== -1,
    prevName = line.querySelector(".popup-line-comment");
  prevName.innerHTML += `${isEng ? `Uploaded` : `Завантажено`}: ${name}`;
  prevName.style.display = "block";
}
const popup = {
  open() {
    const popupWrap = document.querySelector(".popup");
    popupWrap.classList.add("opened");
    const timer = setTimeout(() => {
      const content = popupWrap.querySelector(".popup-form");
      content.classList.add("active");
      const scroll = setTimeout(() => {
        popupWrap.classList.add("active");
        clearTimeout(scroll);
      }, 300);
      clearTimeout(timer);
    });
  },
  close() {
    const popupWrap = document.querySelector(".popup");
    const content = popupWrap.querySelector(".popup-form");
    popupWrap.classList.remove("active");
    content.classList.remove("active");
    const closeTimer = setTimeout(() => {
      popupWrap.classList.remove("opened");
      popupWrap.querySelector("form").reset();

      clearTimeout(closeTimer);
    }, 300);
  },
};

function buildMedia() {
  const MEDIA_LIST = [
    {
      name: "Накипіло",
      href: "https://nakipelo.ua/na-robotu-v-zsu-iak-ukrainska-armiia-staie-bazhanym-robotodavtsem",
      img: "nakipelo.png",
    },
    {
      name: "Ліга",
      href: "https://tech.liga.net/ua/ukraine/article/voenkomat-eto-lotereya-kak-ukrainskaya-kompaniya-pomogaet-aytishnikam-iskat-mesto-v-vsu",
      img: "tech.liga.net.png",
    },
    {
      name: "Армія Інформ",
      href: "https://armyinform.com.ua/2023/08/15/rekrutyng-do-lav-syl-borony-yak-cze-praczyuye/",
      img: "armyinform.png",
    },
    {
      name: "Vector",
      href: "https://vctr.media/ua/rekruting-a-ne-slipa-mobilizacziya-yak-vidbuvayetsya-profesijnij-najm-do-lav-zsu-ta-yaki-kandidati-potribni-derzhavi-vlad-grezyev-lobby-x-162729/",
      img: "vctr.media.png",
    },
    {
      name: "Kyiv Independent ",
      href: "https://kyivindependent.com/lobby-x-promoting-modern-and-effective-military-recruitment-in-ukraine/",
      img: "kyivindependent.png",
    },
    {
      name: "Дивись Інфо",
      href: "https://dyvys.info/2023/08/08/poshuk-vakansij-u-zsu/",
      img: "dyvys.info.png",
    },
    {
      name: "Telegraph",
      href: "https://telegraf.com.ua/ukr/ukraina/2023-07-03/5798192-mobilizatsiya-tse-ne-zavzhdi-pro-nul-yak-znayti-idealnu-rol-u-zakhisti-kraini/amp",
      img: "telegraf.com.ua.png",
    },
    {
      name: "DOU",
      href: "https://dou.ua/lenta/interviews/what-lobbyx-does-for-victory/",
      img: "dou.ua.png",
    },
    {
      name: "NV",
      href: "https://life.nv.ua/ukr/socium/vakansiji-v-zsu-yak-civilnih-lyudey-pracevlashtovuyut-u-armiyu-novini-ukrajini-50307972.html",
      img: "life.nv.ua.png",
    },

    {
      name: "AIN",
      href: "https://ain.ua/2023/05/04/najm-v-zsu-lobbyx/",
      img: "ain.ua.png",
    },
    {
      name: "ШоТам",
      href: "https://shotam.info/zamist-loterei-u-viyskkomati-profesiynyy-rekrutynh-khto-naymaie-kopirayteriv-ta-piarnykiv-dlia-zsu-keys-platformy-lobby-x/",
      img: "shotam.png",
    },
    {
      name: "Радіо Свобода",
      href: "https://www.radiosvoboda.org/a/viyna-mobilizatsiya-povistka-viyskkomat-voyiny/32541993.html",
      img: "radiosvoboda.png",
    },
    // {
    //   name: "Знай UA",
    //   href: "https://znaj.ua/society/463250-zapracyuvav-sayt-z-poshuku-roboti-v-zsu-hto-zaraz-konche-potriben-v-armiji",
    //   img: "znaj.png",
    // },
    {
      name: "Цензор нет",
      href: "https://censor.net/ua/news/3433606/zapuscheno_sayit_iz_vakansiyamy_u_zsu",
      img: "censor.png",
    },
  ];
  const imgTpl = (media) => {
    const img = document.createElement("img");
    img.src = "./images/media/" + media.img;
    img.alt = media.name;
    // img.loading = "lazy";
    const link = document.createElement("a");
    link.href = media.href;
    link.target = "_blank";
    link.classList.add("media-item");
    link.appendChild(img);
    return link;
  };
  const mediaList = document.querySelector(".media-list");
  MEDIA_LIST.forEach((media) => mediaList.appendChild(imgTpl(media)));
}
function buildPersons() {
  const LANG = document.documentElement.lang;
  const IS_EN = LANG === "en";
  const HIDE_COMMAND_BTN = true;
  const wrap = document.querySelector(".person-row");
  const PERSONS = [
    {
      img: "Влад.jpg",
      name: (IS_EN && "VLADISLAV GREZEV") || "ВЛАДИСЛАВ ГРЕЗЄВ",
      position: "CEO",
      order: 1,
      link: "https://www.linkedin.com/in/vladyslav-greziev/",
    },
    {
      img: "Яна.jpg",
      name: (IS_EN && "Yana Lukashuk") || "ЯНА ЛУКАШУК",
      position: "Head of Talent Recruitment",
      order: 2,
      link: "https://www.linkedin.com/in/yana-lukashuk/",
    },
    {
      img: "Катя.jpg",
      name: (IS_EN && "KATERYNA ZALIZNYAK") || "КАТЕРИНА ЗАЛІЗНЯК",
      position: "Recruiter",
      order: 6,
      link: "https://www.linkedin.com/in/kateryna-zalizniak-438946229/",
    },
    {
      img: "Володимир.jpg",
      name: (IS_EN && "VOLODYMYR TRETYAK") || "ВОЛОДИМИР ТРЕТЯК",
      position: "Talent Sourcer",
      order: 7,
      link: "https://www.linkedin.com/in/volodymyrtretiak/",
    },
    {
      img: "Марина.jpg",
      name: (!IS_EN && "МАРИНА ПЕРЦОВИЧ") || "ГАННА МОРОЗОВА",
      position: "Project Manager",
      order: 8,
      link: "https://www.linkedin.com/in/марина-перцович-89b9881a9/",
    },
    {
      img: "Ганна.jpg",
      name: (!IS_EN && "ГАННА МОРОЗОВА") || "MARINA PERTSOVYCH",
      position: "Video Production Director",
      order: 8,
      link: "https://www.linkedin.com/in/гандзя-морозова-370602280",
    },
    {
      img: "Оля.jpg",
      name: (!IS_EN && "Ольга Бандрівська") || "Olha Bandrivska",
      position: "Head of Military Department",
      order: 3,
      link: "https://www.linkedin.com/in/olgabandrivska",
    },
    {
      img: "Олександра.jpg",
      name: (!IS_EN && "Саша Головненко") || "Oleksandra Holovnenko",
      position: "Account & Partnership Manager",
      order: 8,
      link: "https://www.linkedin.com/in/oleksandra-holovnenko-ab2b391b3/",
    },
    {
      order: 7,
      link: "https://www.linkedin.com/in/marharyta-ulanovska-2394ba223/",
      position: "HR Manager",
      name: IS_EN ? "Marharyta Ulanovska" : "Маргарита Улановська",
      img: "Маргарита.jpg",
    },
    {
      order: 9,
      link: "https://www.linkedin.com/in/sofiapetkova/",
      position: "Account & Partnership Specialist",
      name: IS_EN ? "Sofia Petkova" : "Софія Петькова",
      img: "Софія.jpg",
    },

    {
      img: "Таня.jpg",
      name: (!IS_EN && "Тетяна Беліменко") || "Tetiana Belimenko",
      position: "Senior Recruiter",
      order: 5,
      link: "https://www.linkedin.com/in/tetianabelimenko/",
    },
    {
      img: "Анастасія.jpg",
      name: (!IS_EN && "Анастасія Руденко") || "Anastasiia Rudenko",
      position: "Social Media Editor",
      order: 9,
      link: "https://www.linkedin.com/in/anastasiia-rudenko-x/",
    },
    {
      img: "Марія.jpg",
      name: (!IS_EN && "Марія Кісельова") || "Mariia Kiseliova",
      position: "SMM Manager",
      order: 10,
      link: "https://www.linkedin.com/in/masha-kiseliova-786030253/",
    },
  ];
  wrap.innerHTML =
    PERSONS.slice()
      .sort((a, b) => a.order - b.order)
      .map(
        (person) =>
          `
                <${
                  person.link
                    ? 'a href="' + person.link + '" target="_blank"'
                    : "div"
                } class="person-col col-1">
					<div class="person-item">
						<div class="person-img ${(person.scaleImg && "person-img--scaled") || ""}">
						    <img src="/img/persons/${person.img}" alt="${person.name}">
						</div>
						<div class="person-info">
						    <b class="person-name">${person.name}</b>
							
							<div class="person-position">${person.position}</div>
						</div>
					</div>
				</${person.link ? "a" : "div"}>
            `,
      )
      .join("") +
    (HIDE_COMMAND_BTN
      ? ""
      : `
			<div class="person-col col-2">
				<div class="person-btn" onclick="popup.open()">
				    <span>
				        <i class="icon-plus"></i>
				        ${(IS_EN && "Join the team") || "приєднатися до команди"} 
				    </span>
				</div>
			</div>
        `);
}
function buildArmedGroups() {
  const files = [
    "1 ОТБр.png",
    "101 бригада.png",
    "102 бригада.png",
    "104.png",
    "105 прикордонний загін.png",
    "106-бригада-територіальної-оборони.png",
    "109 бригада.png",
    "111 бригада ТрО.png",
    "118 Бр.png",
    "123.png",
    "125.png",
    "128 бригада.png",
    "130 батальйон.png",
    "14 бригада НГУ Червона Калина_logo.png",
    "15 батальйон.png",
    "162 батальйон 119 ОбрТро.svg",
    "2 прикордонний загін.png",
    "2023-03-14-09.png",
    "21 батальйон.png",
    "21 бригада.png",
    "227logo.png",
    "24 ОМБр.png",
    "24 прикордонний загін ДПСУ.png",
    "25 бригада імені Аскольда.png",
    "25 прикордонний загін ДПСУ.png",
    "28 бригада.png",
    "3 прикордонний загін.png",
    "30_ОМБр.png",
    "33-flag-patriot-ua-napys.png",
    "336886573_709502287636029_6145793320990341940_n-removebg-preview.png",
    "36 батальйон.png",
    "37th_marine_brigade.png",
    "4 бригада рубіж.png",
    "4 прикордонний загін ДПСУ.png",
    "43 ОАБр.png",
    "5 прикордонний загін.png",
    "5 Слобожанська бригада.png",
    "516-бат-1ОБрСпП.png",
    "59th_Separate_Motorized_Infantry_Brigade_SSI_(with_tab).png",
    "6 прикордонний загін.png",
    "67 ОМБр.png",
    "7 прикорданний загін.png",
    "710 бригада.png",
    "72 ОМБр.png",
    "79 прикордонний загін ДПСУ.png",
    "8 загін дпсу.png",
    "9 прикордонний загін.png",
    "92 окрема механізована бригада сухопутних військ України.png",
    "AZOV_logo.png",
    "chevron.png",
    "Emblem_of_the_Ministry_of_Defence_of_Ukraine.png",
    "Emblem_of_the_National_Guard_of_Ukraine.png",
    "image.png",
    "IMG_0099.png",
    "International_Legion_of_Territorial_Defense_of_Ukraine_emblem.png",
    "I_5_storm_reg.png",
    "I_ngu_1brigade.png",
    "Kraken_logo.png",
    "logo_black 242.png",
    "Акселератор МОУ.png",
    "військово-клінічний медичний центр.png",
    "ВМС.png",
    "вовки.png",
    "Головний центр підготовки особового складу ДПСУ.png",
    "Держспецзв_язку.png",
    "Дике поле.png",
    "донбас.png",
    "ДПСУ.png",
    "ДССТ.png",
    "К-2.png",
    "Кіберсили.png",
    "Кінологічний центр дпсу.png",
    "Командування медичних сил.png",
    "Нашивка_112_ої_окремої_бригади_територіальної_оборони_ЗСУ_місто.png",
    "Нашивка_116_ої_окремої_бригади_територіальної_оборони_ЗСУ_Полтавська.png",
    "Нашивка_127_ої_окремої_бригади_територіальної_оборони_ЗСУ_svg.png",
    "Нашивка_Сил_територіальної_оборони_ЗСУ_svg.png",
    "Окремий контрольно-пропускний пункт «Київ».png",
    "оперативне командування північ.png",
    "Офіс підтримки змін МОУ_без фону.png",
    "ОЧІ.png",
    "повітряні.png",
    "Регіональне управління тро захід.png",
    "Регіональне управління тро південь.png",
    "Регіональне управління тро Північ.png",
    "регіональне управління тро Схід.png",
    "Сухопутні.png",
    "схід 20.png",
    "холодний яр_logo.png",
    "центрального управління військової освіти.png",
    "шеврон-колір-_111_.png",
  ];
  const getImg = (fileName) => {
    const img = document.createElement("img");
    img.src = "/images/armed_logos/" + fileName;
    img.loading = "lazy";
    img.alt = fileName.split(".").slice(0, -1).join(".");
    const container = document.createElement("div");
    container.classList.add("armed-forces__logo");
    container.appendChild(img);
    return container.outerHTML;
  };
  const beforeWrap = document.querySelector(".results");
  const section = document.createElement("section");
  section.classList.add("section-bg", "section-bg--fixed", "armed-forces");
  section.innerHTML = `
    <div class="container">
        <h2 class="section-title section-title--center section-title--dark">ПІДРОЗДІЛИ, З ЯКИМИ МИ ПРАЦЮЄМО</h2>
        <div class="armed-forces__swiper">
          <div class="armed-forces__logos">   
              ${files.map((fileName) => getImg(fileName)).join("")}
          </div>
          <div class="armed-forces__pagination"></div>
        </div>
       
    </div>
  `;
  beforeWrap.before(section);
}
function initSwiper() {
  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".armed-forces__swiper", {
      wrapperClass: "armed-forces__logos",
      slideClass: "armed-forces__logo",
      grid: {
        rows: 3,
      },
      on: {
        init(e) {
          const slideSize = e.slidesSizesGrid.find((x) => x);
          const rect = e.el.getBoundingClientRect();
          e.slideTo(Math.ceil(rect.left / slideSize));
        },
      },

      mousewheel: true,
      pagination: {
        el: ".armed-forces__pagination",
        clickable: true,
        dynamicBullets: true,
      },
      freeMode: {
        enabled: true
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
        480: {
          slidesPerView: 4,
          grid: {
            rows: 2,
          },
        },
        576: {
          grid: {
            rows: 3,
          },
        },
        640: {
          slidesPerView: 6,
          grid: {
            rows: 3,
          },
        },
        991: {
          slidesPerView: 8,
          grid: {
            rows: 3,
          },
        },
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildArmedGroups();
  buildPersons();
  $('[type="tel"]').inputmask({
    mask: "+38 (999) 999-99-99", // Формат маски для номеру телефону
    placeholder: "_", // Опціонально, символ, який буде відображатися як заповнювач
    showMaskOnHover: false, // Опціонально, вибір, коли відображати маску
  });
});
