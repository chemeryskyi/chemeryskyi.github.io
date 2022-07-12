function modalFunc() {
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const mask = {
        isReady: false,
        initScripts(initMask) {
            const cdnLink = 'https://unpkg.com/imask';
            const script = document.createElement('script');
            script.src = cdnLink;
            document.documentElement.appendChild(script);
            const initTimer = setInterval(() => {
                if (window.IMask) {
                    mask.isReady = true;
                    if (initMask) {
                        mask.initMask();
                    }
                    clearInterval(initTimer);
                }
            }, 500)
        },
        initMask() {
            if (this.isReady) {
                const tel = modal.form.querySelector('input[type="tel"]');
                if (tel) {
                    IMask(tel, {
                        mask: '+{380}-00-000-00-00'
                    });
                }
            } else {
                mask.initScripts(true);
            }
        }
    };
    const ANIMATION_DELAY = 300;
    const LANG = {
        UA: 'ua',
        EN: 'en',
    };
    const lang = location.pathname?.includes('en') ? LANG.EN : LANG.UA;
    const LANGUAGE_CONFIG = {
        [LANG.UA]: {
            header: 'ДОДАТИ ВАКАНСІЮ',
            subtitle: 'Сектор роботодавця',
            btn: 'відправити',
            sectors: [
                {
                    name: 'Уряд',
                    value: 'Government',
                    placeholder: 'Назва інституції'
                },
                {
                    name: 'НУО',
                    value: 'NGO',
                    placeholder: 'Назва організації'
                },
                {
                    name: 'Бізнес',
                    value: 'Business',
                    placeholder: 'Назва компанії'
                }
            ],
            inputs: [
                {
                    type: 'text',
                    name: 'position-title',
                    placeholder: 'Назва вакансії'
                },
                {
                    type: 'text',
                    name: 'org-name',
                    placeholder: 'Назва інституції'
                },
                {
                    type: 'text',
                    name: 'person-name',
                    placeholder: 'Ім\'я контактної особи'
                },
                {
                    type: 'email',
                    name: 'person-contact-mail',
                    placeholder: 'Пошта контактної особи'
                },
                {
                    type: 'tel',
                    name: 'person-contact-tel',
                    placeholder: 'Номер телефону контактної особи'
                },

            ],
            errors: {
                default: 'Будь ласка, заповніть обов\'язкове поле.',
                email: 'Адресу електронної пошти введено невірно.',
                phone: 'Номер телефону  введено невірно.',
            },
            formMessages: {
                sending: 'Відправка в процесі',
                validateError: 'Помилки при заповненні. Зверніть увагу на обов\'язкові поля і відправте ще раз.',
                success: 'Дякуємо! Ваше вакансія успішно відправлена.',
                sendError: 'Помилка при відправці вакансії. Спробуйте ще!'
            }
        },
        [LANG.EN]: {
            header: 'ADD VACANCY',
            subtitle: 'Employer’s sector',
            btn: 'send',
            sectors: [
                {
                    name: 'Government',
                    value: 'Government',
                    placeholder: 'Institution name'
                },
                {
                    name: 'NGO',
                    value: 'NGO',
                    placeholder: 'Organization name'
                },
                {
                    name: 'Business',
                    value: 'Business',
                    placeholder: 'Company name'
                }
            ],
            inputs: [
                {
                    type: 'text',
                    name: 'position-title',
                    placeholder: 'Position title'
                },
                {
                    type: 'text',
                    name: 'org-name',
                    placeholder: 'Institution name'
                },
                {
                    type: 'text',
                    name: 'person-name',
                    placeholder: 'Contact person name'
                },
                {
                    type: 'email',
                    name: 'person-contact-mail',
                    placeholder: 'Contact person e-mail'
                },
                {
                    type: 'tel',
                    name: 'person-contact-tel',
                    placeholder: 'Contact person cell-phone number'
                },
            ],
            errors: {
                default: 'Please fill in the required field.',
                email: 'Email address seems invalid.',
                phone: 'Cell-phone number seems invalid.',
            },
        formMessages: {
            sending: 'Sending in progress',
            validateError: 'Validation errors occurred. Please confirm the fields and submit it again.',
            success: 'Thank you! Your vacancy has been successfully sent.',
            sendError: 'An error occurred when sending the job. Try again!'
        }
        }
    };
    const modal = {
        bg: null,
        form: null,
        content: null,
        template: {
            checkbox(section) {
                return `<label class="form-radio">
                            <input type="radio" name="employer" value="${section.value}" data-placeholder="${section.placeholder}">
                            ${section.name}
                        </label>`
            },
            input(config) {
                return `<label class="input-label">
                        <input type="${config.type}" placeholder="${config.placeholder}" name="${config.name}">
                    </label>`
            },
            form(CONFIG) {
                return `
                    <p class="form-subtitle">
                        ${CONFIG.subtitle}            
                    </p>
                    <div class="form-radios">
                        ${CONFIG.sectors.map(conf => this.checkbox(conf)).join('')}       
                    </div>
                    <div class="form-inputs">
                        ${CONFIG.inputs.map(conf => this.input(conf)).join('')}
                     </div>
                    <button class="form-btn">
                        ${CONFIG.btn}         
                    </button>
                `
            },
            wrap(CONFIG) {
                return `
                    <div class="modal-dialog">
                        <h3 class="modal-header">
                            ${CONFIG.header}
                        </h3>
                    </div>
                   `
            }
        },
        open() {
            if (!this.bg) {
                this.bg = document.createElement('div');
                this.bg.classList.add('modal-bg');
                document.documentElement.appendChild(this.bg);
                this.bg.addEventListener('click', () => this.close());
            }
            if (!this.content) {
                this.content = document.createElement('div');
                this.content.classList.add('modal-content');
                this.content.addEventListener('click', event => {
                    if (!event.target.closest('.modal-dialog')) {
                        this.close();
                    }
                });

                document.documentElement.appendChild(this.content);
                this.content.innerHTML = this.template.wrap(LANGUAGE_CONFIG[lang]);
            }
            if (!this.form) {
                this.form = document.createElement('form');
                this.form.classList.add('modal-form');
                this.form.innerHTML = this.template.form(LANGUAGE_CONFIG[lang]);
                this.content.querySelector('.modal-dialog').appendChild(this.form);

                this.initActions();
            }


            this.bg.classList.add('opened');
            this.content.classList.add('active');

            const visibleTimer = setTimeout(() => {
                this.bg.classList.add('fade-in');
                this.content.classList.add('opened');
                clearTimeout(visibleTimer);
            }, 0, this);


        },
        close() {
            this.bg.classList.remove('fade-in');
            this.content.classList.remove('opened');

            const visibleTimer = setTimeout(() => {
                this.bg.classList.remove('opened');
                this.content.classList.remove('active');
                clearTimeout(visibleTimer);
            }, ANIMATION_DELAY, this);
        },
        validateForm() {
            let formValid = true;
            this.form.querySelectorAll('input').forEach(input => {
                const label = input.closest('label');
                label.querySelector('.error-message') &&
                label.querySelector('.error-message').remove();

                const value = input.value.trim();
                let inputValid = !!value;
                const ERROR_MESSAGES = LANGUAGE_CONFIG[lang].errors;
                let errorMessage = null;
                switch (input.type) {
                    case 'tel': {
                        inputValid = value && value.match(/\d/g).length === 12;
                        if (!inputValid) {
                            errorMessage = !value && ERROR_MESSAGES.default ||
                                ERROR_MESSAGES.phone;
                        }
                        break;
                    }
                    case 'email': {
                        inputValid = validateEmail(value);
                        if (!inputValid) {
                            errorMessage = !value && ERROR_MESSAGES.default ||
                                ERROR_MESSAGES.email;
                        }
                        break;
                    }
                    default: {
                        if (!inputValid) {
                            errorMessage = ERROR_MESSAGES.default;
                        }
                        break;
                    }
                }

                if (errorMessage){
                    const errorEl = document.createElement('p');
                    errorEl.classList.add('error-message');
                    errorEl.innerText = errorMessage;
                    label.appendChild(errorEl);
                }
                if (inputValid) {
                    input.classList.remove('error');
                } else {
                    input.classList.add('error');
                }

                formValid = formValid && inputValid;
            });
            return formValid;
        },
        getFormData(){
            const inputs = Array.prototype.slice.call(this.content.querySelectorAll('input:not([type="radio"]), input[type="radio"]:checked'));
            const formData = new FormData();
            inputs.map(x => ({name: x.name, value: x.value})).forEach(op => {
                formData.append(op.name, op.value);
            });
            return formData;
        },
        setFormMessage(text, color){
            const oldMessage = this.form.querySelector('.form-message');
            if (oldMessage){
                oldMessage.remove();
            }
            if (text){
                const message = document.createElement('p');
                message.classList.add('form-message');
                message.style.color = color;
                message.innerText = text;
                this.form.appendChild(message);
            }
        },
        sendData(formData, btn){
            fetch('https://formspree.io/f/mwkydyzn',{
                method: 'post',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(
                    response => {
                        if (response.ok) {
                            this.form.reset();
                            this.setFormMessage(LANGUAGE_CONFIG[lang].formMessages.success , '#50c4ed');
                            const closeTimer = setTimeout(() => {
                                this.close();
                                clearTimeout(closeTimer);
                            }, 1e3, this);
                        } else {
                            response.json().then(data => {

                            })
                        }
                    }
                )
                .catch(err => {
                    this.setFormMessage(LANGUAGE_CONFIG[lang].formMessages.sendError , '#ff0000')
                })
                .finally(
                    () => {
                        btn.disabled = false;
                    }
                )
        },
        initActions() {
            this.form.addEventListener('submit', event => {
                event.preventDefault();
                const formValid = this.validateForm();
                if (formValid){
                    const formData = this.getFormData();
                    const btn = this.form.querySelector('button');
                    btn.disabled = true;
                    this.setFormMessage(LANGUAGE_CONFIG[lang].formMessages.sending , '#50c4ed');
                    this.sendData(formData, btn);

                } else {
                    this.setFormMessage(LANGUAGE_CONFIG[lang].formMessages.validateError , '#ff0000')

                }
            });
            this.form.querySelectorAll('.form-radio input').forEach(
                (radio, index) => {

                    radio.addEventListener('change', () => {
                        this.form.querySelectorAll('.form-radio')
                            .forEach(
                                label => label.classList.remove('active')
                            );

                        const label = radio.closest('label');
                        label.classList.add('active');
                        const orgName = this.form.querySelector('input[name="org-name"]');
                        orgName.placeholder = radio.dataset.placeholder;
                    });
                    if (!index) {
                        radio.click();
                    }
                }
            );
            mask.initMask();

        },

    };

    const triggerBtn = document.querySelector('[modal-trigger="add-vacancy"]');
    triggerBtn.addEventListener('click', () => {
        modal.open();
    });
    mask.initScripts();

    return null;

}

modalFunc();
