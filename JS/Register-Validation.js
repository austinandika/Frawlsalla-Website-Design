var txtName = document.getElementById('txt-name');
var rbGender = document.getElementsByName('gender');
var txtEmail = document.getElementById('txt-email');
var txtPassword = document.getElementById('txt-password');
var txtConfirmPass = document.getElementById('txt-confirm-password');
var cbTermCondition = document.getElementById('cb-term-condition');
var txtForm = document.getElementById('form');

var lblErrorName = document.getElementById('lbl-error-name');
var lblErrorGender = document.getElementById('lbl-error-gender');
var lblErrorEmail = document.getElementById('lbl-error-email');
var lblErrorPassword = document.getElementById('lbl-error-password');
var lblErrorConfirmPass = document.getElementById('lbl-error-confirm-password');

var effectErrorEmail = document.getElementById('txt-email');
var effectErrorName = document.getElementById('txt-name');
var effectErrorPassword = document.getElementById('txt-password');
var effectErrorConfirmPass = document.getElementById('txt-confirm-password');
var effectErrorTermCondition = document.getElementById("cb-term-condition-container");


var flag = true;
form.addEventListener('submit', (e) => {

    // Reset flag, label, and effect
    flag = true;
    resetLblError();
    resetEffectError();

    // Validation
    validateName();
    validateGenderRb();
    validateEmail();
    validatePassword();
    validateConfirmPass();
    validateTermCondition();

    if (flag == false) {
        e.preventDefault();
    }
})


function resetLblError() {
    lblErrorName.innerHTML = "";
    lblErrorEmail.innerHTML = "";
    lblErrorPassword.innerHTML = "";
    lblErrorConfirmPass.innerHTML = "";
    lblErrorGender.innerHTML = "";
}

function resetEffectError() {
    effectErrorEmail.classList.remove("error");
    effectErrorName.classList.remove("error");
    effectErrorPassword.classList.remove("error");
    effectErrorConfirmPass.classList.remove("error");
    effectErrorTermCondition.classList.remove("error");
}

function validateName(){
    if (txtName.value === '' || txtName.value == null) {
        lblErrorName.innerHTML = "Name is required";
        effectErrorName.classList.add("error");
        flag = false;
    } else if (txtName.value.length < 3) {
        lblErrorName.innerHTML = "Name length must be at least 3 characters";
        effectErrorName.classList.add("error");
        flag = false;
    }
}

function validateGenderRb() {
    var isChecked = false;
    for (i = 0; i < rbGender.length; i++) {
        if (rbGender[i].checked) {
            isChecked = true;
        }
    }

    if (isChecked == false) {
        lblErrorGender.innerHTML = "Please choose one of the option above";
        flag = false;
    }
}

function validateEmail(){
    var isValidEmail = true;
    var atEmail = txtEmail.value.indexOf('@');

    if(txtEmail.value.length == 0){
        lblErrorEmail.innerHTML = "Email is required";
        effectErrorEmail.classList.add("error");
        isValidEmail = false;
    }
    else if(txtEmail.value.length < 2){
        lblErrorEmail.innerHTML = "Please enter a valid email address";
        effectErrorEmail.classList.add("error");
        isValidEmail = false;
    }
    else if (atEmail == -1) {   // No '@' at email address
        lblErrorEmail.innerHTML = "Please enter a valid email address";
        effectErrorEmail.classList.add("error");
        isValidEmail = false;
    } 

    if(isValidEmail == true){
        var emailParts = txtEmail.value.split("@");
        var dotEmail = emailParts[1].indexOf('.');
        var dotSplits = emailParts[1].split(".");
        var dotCount = dotSplits.length - 1;
    
        if(dotEmail == -1 || dotEmail < 2 || dotCount > 2){ // at least one dot, max 2 dot after "@" and minimum 1 character after "@"
            lblErrorEmail.innerHTML = "Please enter a valid email address";
            effectErrorEmail.classList.add("error");
            isValidEmail = false;
        }
        
        for (var i = 0; i < dotSplits.length; i++) { // dot cannot be the last of the character and dots are not repeated
            if (dotSplits[i].length == 0) {
                lblErrorEmail.innerHTML = "Please enter a valid email address";
                effectErrorEmail.classList.add("error");
                isValidEmail = false;
            }
        }
    }

    if(isValidEmail == false){
        flag = false;
    }
}

function validatePassword(){
    if (txtPassword.value === '' || txtPassword.value == null) {
        lblErrorPassword.innerHTML = "Password is required";
        effectErrorPassword.classList.add("error");
        flag = false;
    } else if (txtPassword.value.length <= 8) {
        lblErrorPassword.innerHTML = "Password length must be at least 8 characters";
        effectErrorPassword.classList.add("error");
        flag = false;
    }
}

function validateConfirmPass(){
    if (txtConfirmPass.value === '' || txtConfirmPass.value == null) {
        lblErrorConfirmPass.innerHTML = "Confirm password is required";
        effectErrorConfirmPass.classList.add("error");
        flag = false;
    } else if (txtConfirmPass.value.length <= 8) {
        lblErrorConfirmPass.innerHTML = "Password length must be at least 8 characters";
        effectErrorConfirmPass.classList.add("error");
        flag = false;
    }else if (txtConfirmPass.value != txtPassword.value) {
        lblErrorConfirmPass.innerHTML = "Password didn't match";
        effectErrorConfirmPass.classList.add("error");
        flag = false;
    } 
}

function validateTermCondition(){
    if (cbTermCondition.checked == false) {
        effectErrorTermCondition.classList.add("error");
        flag = false;
    }
}

// Function to reset field when click
// function clearFieldEffect(fieldId){
//     var id = document.getElementById(fieldId)
//     id.classList.remove("error")
// }