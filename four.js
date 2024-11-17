const correctPassword = "12345";
const userPassword = prompt("Пожалуйста, введите пароль:");

if (userPassword !== null && userPassword.trim() !== "") {
    if (userPassword === correctPassword) {
        alert("Доступ разрешен");
        console.log("Пользователь успешно вошел.");
    } else {
        alert("Доступ запрещен");
        console.log("Неверный пароль.");
    }
} else {
    alert("Пароль не должен быть пустым");
    console.log("Пользователь ввел пустой пароль.");
}
