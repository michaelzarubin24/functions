"use strict";
alert("Welcome!");

// Constants
const users = [];
const firstName = prompt("What is your first name, friend?");
const lastName = prompt("...and last name?");
let mail = prompt("What is your mail?");
const userMail = validateMail();

// Function that forms an object
function person(firstName, lastName, mail, userPassword) {
  return {
    firstName: firstName,
    lastName: lastName,
    mail: mail,
    userPassword: userPassword,
  };
}

const userPassword = validatePassword();
const newUser = person(firstName, lastName, mail, userPassword);
users.push(newUser);

// Function that validates email. Email must have @ and . symbols
function validateMail() {
  while (!mail.includes(".") || !mail.includes("@")) {
    if (!mail.includes(".")) {
      alert("Email should contain a period (.)");
    }
    if (!mail.includes("@")) {
      alert("Email should contain an at symbol (@)");
    }
    mail = prompt("Enter a valid email address:");
  }

  return mail;
}

// Function that validates password. Password must contain numbers, be a string and be longer than 8 characters.
function validatePassword() {
  let password = prompt("...aaaand password");

  while (
    password.length <= 8 ||
    !/[0-9]/.test(password) ||
    typeof password !== "string"
  ) {
    alert("Password is not valid");

    // Get a new password from the user
    password = prompt("Enter a new password:");
  }

  alert("Password is valid");
  return password;
}

console.log("[newUser]", newUser);
