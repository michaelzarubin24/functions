"use strict";
alert(`Welcome!`);

const firstName = prompt("What is your first name, friend?");
const lastName = prompt("...and last name?");
const mail = prompt("What is your mail?");
const userMail = validateMail(mail);
const password = prompt("...aaaand password");

// 1. firstName
// 2. lastName
// 3. Mail
// 3.1 while user enters incorrect email, we should return to prompt

function validateMail(mail) {
  while (!mail.includes(".") || !mail.includes("@")) {
    if (!mail.includes(".")) {
      alert("Email should contain a period (.)");
    }
    if (!mail.includes("@")) {
      alert("Email should contain an at symbol (@)");
    }
    mail = prompt("Enter a valid email address:");
  }
  return true;
}

// function validateMail(mail) {
//   let isRunning = true;
//   while (isRunning) {
//     if (mail.indexOf("@") == -1) {
//       alert("No '@' symbol in your address");
//       return false;
//     }
//     if (mail.indexOf(".") == -1) {
//       alert("No '.' symbol in your address");
//       return false;
//     }

//     if (mail.indexOf("@") != -1 && mail.indexOf(".") != -1) {
//       alert("Thanks!");
//       return true;
//     }
//   }
// }

// validateMail(mail) = mail;
// надо как-то вызвать функцию validateMail и проверить через цикл while

// эта функция прописывает условия
// function validateMail(mail) {
//   if (mail.indexOf("@") == -1) {
//     alert("No '@' symbol in your address");
//     // false, должна вернуть к prompt
//   }
//   if (mail.indexOf(".") == -1) {
//     alert("No '.' symbol in your address");
//     // false, должна вернуть к prompt
//   }
//   if (mail.indexOf("@") != -1 && mail.indexOf(".") != -1) {
//     alert("Thanks!");
//     // true, должна пропустить к password
//   }
// }

// 1. Вопрос по скоупу и порядку. Функции всегда должны быть внизу после основного кода? Это должно быть так всегда? Последовательность функций внизу имеет порядок?
// 2. Если в функции пустой параметр в скобках, return не нужен?
// 3. Цикл while и функции. Когда надо использовать isRunning? Является ли функция тоже циклом?

// Не получается имплементировать цикл While чтобы если пользователь написал только @ или только . , то оно возвращало к промпту
// const isRunning = true;
// while (isRunning) {
//   if (!validation) break;
// }
//
// const atValid (mail.indexOf("@") == -1) = true

// const isValidMail = false;

// ! каждое условие отдельно
// function atValidation() {
//   if (mail.indexOf("@") == -1) {
//     alert("No '@' symbol in your address");
//     // false
//   }
// }
// function dotValidation() {
//   if (mail.indexOf(".") == -1) {
//     alert("No '.' symbol in your address");
//     // false
//   }
// }

// function validation() {
//   if (mail.indexOf("@") != -1 && mail.indexOf(".") != -1) {
//     alert("Thanks!");
//     // true
//   }
// }
