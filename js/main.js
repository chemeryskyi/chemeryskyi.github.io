function submitForm() {
    event.preventDefault();
    let formValid = true,
        form = event.target.closest('form'),
        btn = form.querySelector('button'),
        inputs = form.querySelectorAll('input,textarea');
    btn.disabled = true;
    inputs.forEach(input => {
        let inputValid = true,
            line = input.closest('.popup-line');
        if (input.dataset.type === 'text') {
            inputValid = !!input.value.trim();
        }

        if (input.dataset.type === 'file') {

            inputValid = !!input.files.length;
        }

        if(line){
            inputValid ? line.classList.remove('error') : line.classList.add('error');

        }

        formValid = inputValid && formValid;
    });

    if (formValid) {

        var data = new FormData(),
            isEng = location.pathname.indexOf('en') !== -1;

        data.append(isEng ? 'Join as' : 'Хочу долучитись', form.querySelector('input[data-name="role"]:checked').value);
        data.append(isEng ? 'Motivation': 'Мотивація', form.querySelector('textarea[data-name="motivation"]').value);
        data.append(isEng ? 'Contact': 'Контакт', form.querySelector('input[data-name="contact"]').value);
        data.append('cv',form.querySelector('input[name="cv"]').files[0]);
        data.append('lang',isEng ? `en` : `ua`);
        let formResult = form.querySelector('.popup-line-btn'),
            errorActions = () =>{
                formResult.innerHTML = `<div class="popup-line-comment">${isEng ? `An error has occurred. Try again!` : `Виникла помилка. Спробуйте ще!`}</div>`;
                formResult.classList.add('error');
                formResult.classList.add('active');
                setTimeout(()=>{
                    btn.disabled = false;
                    formResult.classList.remove('active');
                    formResult.classList.remove('good');
                    formResult.classList.remove('error');
                }, 1000)
            };

        try {
            fetch(`/form-request.php`, {
                method: 'POST',
                body: data
            })
                .then(data => data.text())
                .then(data => {
                    formResult.innerHTML = `<div class="popup-line-comment">${isEng ? `The application has been successfully submitted!` : `Заявка успішно відправлена!`}</div>`;
                    formResult.classList.add('active');
                    formResult.classList.add('good');
                    setTimeout(()=>{
                        popup.close();
                        btn.disabled = false;
                        formResult.classList.remove('active');
                        formResult.classList.remove('good');
                        formResult.classList.remove('error ');
                    }, 1000)

                })
                .catch(e => {
                    errorActions();
                })
        } catch (e) {
            errorActions();
        }



    } else {
        btn.disabled = false;
        console.log('error')

    }
}
function fileChange() {
    let input = event.target,
        name = event.target.files[0].name,
        line = input.closest('.popup-line'),
        isEng = location.pathname.indexOf('en') !== -1,
        prevName = line.querySelector('.popup-line-comment');
    prevName.innerHTML += `${isEng ? `Uploaded` : `Завантажено`}: ${name}`;
    prevName.style.display = "block"
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
            popupWrap.querySelector('form').reset()

            clearTimeout(closeTimer);
        }, 300);
    },
};

function toggleLanguage() {
    document.querySelector('.main-language').classList.toggle('opened')
}

function buildPersons() {
    const LANG = document.documentElement.lang;
    const IS_EN = LANG === 'en';
    const wrap = document.querySelector('.person-row');
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

    wrap.innerHTML = PERSONS
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(
        person =>
            `
                <${person.link ? 'a href="' +person.link+'" target="_blank"' : 'div'} class="person-col col-1">
					<div class="person-item">
						<div class="person-img ${person.scaleImg && 'person-img--scaled' || ''}">
						    <img src="/img/persons/${person.img}" alt="${person.name}">
						</div>
						<div class="person-info">
						    <b class="person-name">${person.name}</b>
							
							<div class="person-position">${person.position}</div>
						</div>
					</div>
				</${person.link ? 'a' : 'div'}>
            `
        )
        .join('')
        + `
			<div class="person-col col-2">
				<div class="person-btn" onclick="popup.open()">
				    <span>
				        <i class="icon-plus"></i>
				        ${IS_EN && 'Join the team' || 'приєднатися до команди'} 
				    </span>
				</div>
			</div>
        `
}
buildPersons();
