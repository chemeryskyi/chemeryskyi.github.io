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
        inputValid ? line.classList.remove('error') : line.classList.add('error');

        formValid = inputValid && formValid;
    });

    if (formValid) {

        var data = new FormData();
        data.append('role', form.querySelector('input[name="role"]:checked').value);
        data.append('motivation', form.querySelector('textarea[name="motivation"]').value);
        data.append('contact', form.querySelector('input[name="contact"]').value);
        data.append('cv',form.querySelector('input[name="cv"]').files[0]);
        let formResult = form.querySelector('.popup-line-btn'),
            errorActions = () =>{
                formResult.innerHTML = `<div class="popup-line-comment">Виникла помилка. Спробуйте ще!</div>`;
                formResult.classList.add('error');
                formResult.classList.add('active');
                setTimeout(()=>{
                    btn.disabled = false;
                    formResult.classList.remove('active');
                    formResult.classList.remove('good');
                    formResult.classList.remove('error ');
                }, 1000)
            };

        try {
            fetch(`/sntmail.php`, {
                method: 'POST',
                body: data
            })
                .then(data => data.text())
                .then(data => {
                    formResult.innerHTML = `<div class="popup-line-comment">Заявка успішно відправлена!</div>`;
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
        prevName = line.querySelector('.popup-line-comment');
    prevName.innerHTML += `Зовантажено: ${name}`;
    prevName.style.display = "block"
}
let popup = {
    open(){
        document.querySelector('.popup').classList.add('opened')
    },
    close(){
        document.querySelector('.popup').classList.remove('opened')
    }
}

function toggleLanguage() {
    document.querySelector('.main-language').classList.toggle('opened')
}
