const form = document.forms['form'];
const button = form.querySelector('button[type="submit"]');

const inputArr = Array.from(form.elements);
const validInputArr = [];

// Инициализация атрибута и массива с валидными элементами
inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArr.push(el);
    }
});

console.log(validInputArr);

form.addEventListener('input', inputHandler);

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем стандартную отправку формы
    buttonHandler.call(this, e); // При необходимости, привязка контекста к форме
});

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
    toggleButtonState();
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);

    let isInputValid = reg.test(inputValue);

    if (el.hasAttribute("required")) {
        isInputValid = isInputValid && inputValue.trim() !== '';
    }

    if (isInputValid) {
        el.style.color = "#44751e";
        el.setAttribute("is-valid", "1");
    } else {
        el.style.color = "red";
        el.setAttribute("is-valid", "0");
    }
}

function buttonHandler(e) {
    const isAllValid = validInputArr.every((el) => el.getAttribute("is-valid") === "1");
    if (isAllValid) {
        sendFormData();
    } else {
        console.log('Некоторые поля заполнены неверно');
    }
}

function toggleButtonState() {
    const isAllFieldsValid = validInputArr.every((el) => el.getAttribute("is-valid") === "1");
    button.disabled = !isAllFieldsValid;
}

// Начальное состояние кнопки - отключена, если уже при загрузке есть невалидные данные
toggleButtonState();

async function sendFormData() {
    const formData = new FormData(form);

    try {
        const response = await fetch('./mail.php', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Ошибка на сервере: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            // Если ответ в формате JSON
            const data = await response.json();
            alert(data.message || 'Форма успешно отправлена!');
        } else {
            // Если ответ в другом формате
            const textData = await response.text();
            console.log('Сообщение сервера (текст):', textData);
            alert(textData);
        }

        form.reset(); // Сброс формы
        toggleButtonState(); // Обновление состояния кнопки после сброса
    } catch (error) {
        console.error('Ошибка во время отправки данных:', error.message);
        alert('Произошла ошибка при отправке формы.');
    }
}