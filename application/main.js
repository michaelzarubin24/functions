"use strict";

alert(`Welcome!`);
// consts
const users = [];
const firstName = prompt("What is your first name, friend?");
const lastName = prompt("...and last name?");
const mail = prompt("What is your mail?");
const userMail = validateMail(mail);
const userPassword = validatePassword();
const newUser = person(firstName, lastName, mail);

// Function that forms an object
function person(firstName, lastName, mail) {
  return {
    firstName: firstName,
    lastName: lastName,
    mail: mail,
    userPassword: userPassword,
  };
}
users.push(newUser);

// Function that validates email. Email must have @ and . symbols
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

// Function that validates password. Password must contain numbers, be a string and be longer than 8 characters.
function validatePassword() {
  const password = prompt("...aaaand password");
  let isStrValue = false;
  let isNumValue = false;

  for (let i = 0; i < password.length; i++) {
    const value = +password[i];

    if (isNaN(value)) {
      isStrValue = true;
      continue;
    }

    if (typeof value === "number") {
      isNumValue = true;
    }
  }

  while (!(isStrValue && isNumValue)) {
    alert("Password is not valid");

    // Additional logic to handle invalid password and update the password

    // Get a new password from the user
    const newPassword = prompt("Enter a new password:");

    // Reset
    isStrValue = false;
    isNumValue = false;

    // Check the new password
    for (let i = 0; i < newPassword.length; i++) {
      const value = +newPassword[i];

      if (isNaN(value)) {
        isStrValue = true;
        continue;
      }

      if (typeof value === "number") {
        isNumValue = true;
      }
    }
  }

  alert("Password is valid");
}
console.log("[newUser]", newUser);
debugger;
