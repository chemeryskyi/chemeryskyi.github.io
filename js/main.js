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
        fetch(`http://x.chemeryskyi.ru/send.php`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                role: form.querySelector('input[name="role"]:checked').value,
                motivation: form.querySelector('textarea[name="motivation"]').value,
                contact: form.querySelector('input[name="contact"]').value,
            })
        })
        popup.close();
        btn.disabled = false;

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
