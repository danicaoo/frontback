const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block"; 
}

closeBtn.onclick = function() {
    modal.style.display = "none"; 
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}

const buttons = document.querySelectorAll(".open-modal");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-service"); 
        modalTitle.textContent = title; 
        openModal(); 
    });
});

$(document).ready(function() {
    $('#phone-input').mask('+7 (000) 000-00-00');
});

const welcomeHeading = document.querySelector('h1');
if (welcomeHeading) {
    welcomeHeading.textContent = "Добро пожаловать на наш сайт!";
}

const subtitle = document.querySelector('h2');
if (subtitle) {
    subtitle.style.color = "red";
}

const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    country: '',
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Страна: ${this.country}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const date = document.getElementById('date').value.trim();
    const comment = document.getElementById('comments').value.trim();
    const country = document.getElementById('countries').value; 
    console.log("Полученные значения:");
    console.log(`Имя: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Телефон: ${phone}`);
    console.log(`Страна: ${country}`); 
    console.log(`Дата: ${date}`);
    console.log(`Комментарий: ${comment}`);

    if (!name || !email || !comment) {
        alert("Пожалуйста, заполните имя, email и комментарий.");
        return;
    }

    if (!/^\d+$/.test(phone.replace(/\D/g, ''))) {
        alert("Телефон должен содержать только цифры.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;
    formData.country = country;

    formData.printData();

    modal.style.display = "none";
}

const form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        submitForm(); 
    });
}
document.querySelector('select#countries').addEventListener('change', function() {
    console.log('Выбраная страна:', this.value);
});
