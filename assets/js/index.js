// 1
// function printEvenNumbers(a, b) {
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             alert(i);
//         }
//     }
// }

// let a = parseInt(prompt("Введите значение a:"));
// let b = parseInt(prompt("Введите значение b:"));
// printEvenNumbers(a, b);

// // 2
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// // 3
// let number;

// do {
//     number = prompt("Введите число больше 10:");
// } while (number !== null && number <= 10);

// if (number !== null) {
//     alert("Вы ввели число: " + number);
// } else {
//     alert("Вы отменили ввод.");
// }

// // 4
// function min(a, b) {
//     return a < b ? a : b;
// }

// alert(min(prompt("Введите число a:"), prompt("Введите число b:")));


const checkAge = age => age > 18 || confirm('Родители разрешили?');

const age = prompt("Введите возраст:");

alert(checkAge(age));

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
