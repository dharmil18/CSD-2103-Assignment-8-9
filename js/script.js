/*
    Author: Dharmil Chhadva
    ID: C0884179
    Date: 4th Aug, 2023
*/

function validateForm() {

    event.preventDefault();

    // Perform form validation and display errors
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const dob = document.getElementById('dob');
    const gender = document.getElementsByName('gender');
    const checkbox = document.getElementById('terms');

    console.log(firstName, lastName, email, password, cpassword)

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    let isValid = true;

    if (!nameRegex.test(firstName)) {
        document.getElementById('first_name_error').textContent = 'Please enter a valid first name.';
        isValid = false;
    } else {
        document.getElementById('first_name_error').textContent = '';
    }

    if (!nameRegex.test(lastName)) {
        document.getElementById('last_name_error').textContent = 'Please enter a valid last name.';
        isValid = false;
    } else {
        document.getElementById('last_name_error').textContent = '';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email_error').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email_error').textContent = '';
    }

    // Password validation
    if (password === '') {
        document.getElementById('password_error').textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, one uppercase letter, and one special character.';
        isValid = false;
    } else {
        document.getElementById('password_error').textContent = '';
    }

    // Confirm Password validation
    if (cpassword === '') {
        document.getElementById('cpassword_error').textContent = 'Confirm Password is required.';
        isValid = false;
    } else if (password !== cpassword) {
        document.getElementById('password_error').textContent = 'Passwords must match!';
        document.getElementById('cpassword_error').textContent = 'Passwords must match!';
        isValid = false;
    } else {
        document.getElementById('password_error').textContent = '';
        document.getElementById('cpassword_error').textContent = '';
    }

    // if (!passwordRegex.test(password)) {
    //     document.getElementById('password_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     isValid = false;
    // }
    // else {
    //     document.getElementById('password_error').textContent = '';
    // }

    // if (!passwordRegex.test(cpassword)) {
    //     document.getElementById('cpassword_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     isValid = false;
    // }
    // else {
    //     document.getElementById('cpassword_error').textContent = '';
    // }

    // if (password !== cpassword) {
    //     document.getElementById('password_error').textContent = 'Passwords must match!';
    //     document.getElementById('cpassword_error').textContent = 'Passwords must match!';
    //     isValid = false;
    // }
    // else {
    //     document.getElementById('password_error').textContent = '';
    //     document.getElementById('cpassword_error').textContent = '';

    // }

    // if (!passwordRegex.test(password)) {
    //     document.getElementById('password_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     isValid = false;
    // }
    // else {
    //     document.getElementById('password_error').textContent = '';
    // }

    // if (!passwordRegex.test(cpassword)) {
    //     document.getElementById('cpassword_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     isValid = false;
    // }
    // else {
    //     document.getElementById('cpassword_error').textContent = '';
    // }

    // if (password !== '' && cpassword !== '') {
    //     if (password !== cpassword) {
    //         document.getElementById('password_error').textContent = 'Passwords must match!';
    //         document.getElementById('cpassword_error').textContent = 'Passwords must match!';
    //         isValid = false;
    //     }
    //     else {
    //         document.getElementById('password_error').textContent = '';
    //         document.getElementById('cpassword_error').textContent = '';
    //     }
    // }
    // else {
    //     document.getElementById('password_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     document.getElementById('cpassword_error').textContent = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.';
    //     isValid = false;
    // }

    // Date of Birth validation
    if (dob.value.trim() === '') {
        document.getElementById('dob_error').innerHTML = 'Please enter your date of birth!';
        isValid = false;
    } else {
        document.getElementById('dob_error').innerHTML = '';
    }

    // Gender validation
    let selectedGender = '';
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break;
        }
    }
    if (selectedGender === '') {
        document.getElementById('gender_error').innerHTML = 'Please select your gender!';
        isValid = false;
    } else {
        document.getElementById('gender_error').innerHTML = '';
    }

    // Checkbox validation
    if (!checkbox.checked) {
        document.getElementById('checkbox_error').innerHTML = 'Please agree to the terms and conditions!';
        isValid = false;
    } else {
        document.getElementById('checkbox_error').innerHTML = '';
    }

    console.log("isValid: " + isValid)

    if (isValid) {
        alert("Welcome, " + firstName + " " + lastName)
    }
}