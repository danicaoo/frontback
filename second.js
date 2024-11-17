const name = prompt("Пожалуйста, введите ваше имя:");
const age = prompt("Пожалуйста, введите ваш возраст:");
const greetingMessage = `Привет, ${name}! Вам ${age} лет.`;

alert(greetingMessage);

console.log(greetingMessage);

if (age >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}
