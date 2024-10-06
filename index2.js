
// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal(service) {
     // Устанавливаем заголовок
    modal.style.display = "block"; // Показываем модальное окно
}

// Функция для закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
}

// Назначаем обработчики событий на кнопки
const buttons = document.querySelectorAll(".open-modal");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); // Получаем название услуги
        openModal(service); // Открываем модальное окно с заголовком
    });
});

$(document).ready(function() {
    $('#phone-input').mask('+7 (000) 000-00-00');
  });


const form = document.getElementById('myForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = form.checkValidity();

    if (isValid) {
      form.submit();
    } else {
      form.reportValidity();
    }
  });