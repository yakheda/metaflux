// Функция для отображения или скрытия меню
function toggleKeyForm() {
    const keyForm = document.getElementById('keyForm');
    keyForm.classList.toggle('show');
}

// Функция для проверки количества введенных символов
function validateInput() {
    const keyInput = document.querySelector('.input').value;
    const submitButton = document.querySelector('.sign');

    if (keyInput.length >= 3) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
}

// Функция для отправки ключа
function submitKey() {
    const keyInput = document.querySelector('.input').value;
    console.log('Entered Key:', keyInput);
    toggleKeyForm(); // Закрываем меню после ввода
}

// Функция для скрытия меню при клике вне его границ
function handleOutsideClick(event) {
    const keyForm = document.getElementById('keyForm');
    const formContainer = document.querySelector('.form-container');

    if (keyForm.classList.contains('show') && !formContainer.contains(event.target)) {
        toggleKeyForm();
    }
}

// Привязываем события
// document.querySelector('.input').addEventListener('input', validateInput);
// document.addEventListener('click', handleOutsideClick);
