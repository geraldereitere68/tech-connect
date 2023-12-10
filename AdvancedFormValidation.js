/*
Filename: AdvancedFormValidation.js

Description: This code is an advanced form validation script written in JavaScript. It provides extensive validation for various form fields such as name, email, phone number, password, and more. It includes regular expressions, custom error messages, and form submission handling. This script is highly flexible and can be easily integrated into any web application.

Author: John Doe
Date: October 12, 2021
*/

// Form validation function
function validateForm() {
  // Get form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z]{3,30}$/;
  const emailRegex = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  // Custom error messages
  const errorMessages = {
    name: "Please enter a valid name (3-30 characters, letters only)",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number (10 digits)",
    password:
      "Please enter a valid password (8 characters minimum, at least one lowercase letter, one uppercase letter, and one digit)",
  };

  // Error flags
  let hasErrors = false;

  // Validate name
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText = errorMessages.name;
    hasErrors = true;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Validate email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = errorMessages.email;
    hasErrors = true;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Validate phone
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").innerText = errorMessages.phone;
    hasErrors = true;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").innerText = errorMessages.password;
    hasErrors = true;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Handle form submission
  if (hasErrors) {
    // Prevent form submission
    event.preventDefault();
  } else {
    // Submit the form
    document.getElementById("myForm").submit();
  }
}

// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", validateForm);