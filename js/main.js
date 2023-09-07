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
    if (input.dataset.type === "text") {
      inputValid = !!input.value.trim();
    }

    if (input.dataset.type === "file") {
      inputValid = !!input.files.length;
    }

    if (line) {
      inputValid ? line.classList.remove("error") : line.classList.add("error");
    }

    formValid = inputValid && formValid;
  });

  if (formValid) {
    var data = new FormData(),
      isEng = location.pathname.indexOf("en") !== -1;

    data.append(
      isEng ? "Join as" : "Хочу долучитись",
      form.querySelector('input[data-name="role"]:checked').value,
    );
    data.append(
      isEng ? "Motivation" : "Мотивація",
      form.querySelector('textarea[data-name="motivation"]').value,
    );
    data.append(
      isEng ? "Contact" : "Контакт",
      form.querySelector('input[data-name="contact"]').value,
    );
    data.append("cv", form.querySelector('input[name="cv"]').files[0]);
    data.append("lang", isEng ? `en` : `ua`);
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
        }, 1000);
      };

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
            popup.close();
            btn.disabled = false;
            formResult.classList.remove("active");
            formResult.classList.remove("good");
            formResult.classList.remove("error ");
          }, 1000);
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
let popup = {
  open() {
    document.querySelector(".popup").classList.add("opened");
  },
  close() {
    document.querySelector(".popup").classList.remove("opened");
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
    {
      name: "Знай UA",
      href: "https://znaj.ua/society/463250-zapracyuvav-sayt-z-poshuku-roboti-v-zsu-hto-zaraz-konche-potriben-v-armiji",
      img: "znaj.png",
    },
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
      order: 8,
      link: "https://www.linkedin.com/in/oleksandr-tymoshenko-a3340923b/",
      position: "Talent Sourcer",
      name: IS_EN ? "Oleksander Tymoshenko" : "Олександр Тимошенко",
      img: "Саша.jpg",
    },
    {
      img: "Оля.jpg",
      name: (!IS_EN && "Ольга Бандрівська") || "Olha Bandrivska",
      position: "Business Development Manager",
      order: 3,
      link: "https://www.linkedin.com/in/olgabandrivska",
    },
    {
      img: "Саша.png",
      name: (!IS_EN && "Саша Головненко") || "Oleksandra Holovnenko",
      position: "Account & Partnership Manager",
      order: 8,
      scaleImg: true,
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
      img: "Таня.png",
      name: (!IS_EN && "Тетяна Беліменко") || "Tetiana Belimenko",
      position: "Senior Recruiter",
      order: 5,
      scaleImg: true,
      link: "https://www.linkedin.com/in/tetianabelimenko/",
    },
    {
      img: "Анастасія.jpg",
      name: (!IS_EN && "Анастасія Руденко") || "Anastasiia Rudenko",
      position:
        (!IS_EN && "Редакторка соціальних мереж") || "Social Media Editor",
      order: 9,
      link: "https://www.linkedin.com/in/anastasiia-rudenko-x/",
    },
    {
      img: "Марія.jpg",
      name: (!IS_EN && "Марія Кісельова") || "Mariia Kiseliova",
      position: (!IS_EN && "SMM Менеджерка") || "SMM Manager",
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
    `
			<div class="person-col col-2">
				<div class="person-btn" onclick="popup.open()">
				    <span>
				        <i class="icon-plus"></i>
				        ${(IS_EN && "Join the team") || "приєднатися до команди"} 
				    </span>
				</div>
			</div>
        `;
}
document.addEventListener("DOMContentLoaded", () => {
  buildMedia();
  buildPersons();
});
