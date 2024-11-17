const firstNumber = parseFloat(prompt("Введите первое число:"));
const operator = prompt("Введите оператор (+, -, *, /):");
const secondNumber = parseFloat(prompt("Введите второе число:"));

let result;

if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    if (secondNumber === 0) {
        alert("Ошибка: Деление на ноль невозможно.");
        console.log("Ошибка: Деление на ноль.");
    } else {
        result = firstNumber / secondNumber;
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор: " + operator);
}

if (result !== undefined) {
    alert("Результат: " + result);
    console.log("Результат: " + result);
}
