var txtName = document.getElementById('txt-name')
var rbGender = document.getElementsByName('gender')
var txtEmail = document.getElementById('txt-email')
var txtPassword = document.getElementById('txt-password')
var txtConfirmPass = document.getElementById('txt-confirm-password')
var cbTermCondition = document.getElementById('cb-term-condition')
var txtForm = document.getElementById('form')
var lblErrorName = document.getElementById('lbl-error-name')
var lblErrorGender = document.getElementById('lbl-error-gender')
var lblErrorEmail = document.getElementById('lbl-error-email')
var lblErrorPassword = document.getElementById('lbl-error-password')
var lblErrorConfirmPass = document.getElementById('lbl-error-confirm-password')


var flag = true
form.addEventListener('submit', (e) => {
    
    resetLblError()

    if (txtName.value === '' || txtName.value == null){
        lblErrorName.innerHTML = "Name is required"
        flag = false
    } else if (txtName.value.length < 3){
        lblErrorName.innerHTML = "Name length must be at least 3 characters"
        flag = false
    }
    
    CheckRadioValue()

    var atEmail = txtEmail.value.indexOf('@')
    var dotEmail = txtEmail.value.indexOf('.')
    if (atEmail < 1){
        lblErrorEmail.innerHTML = "Enter a valid email address"
        flag = false
    } //else if (dotEmail >= atEmail && dotEmail <= atEmail + 2){
       // lblErrorEmail.innerHTML = "Enter a valid email address"
       // flag = false
 //   } 
    else if (dotEmail < 1){
        lblErrorEmail.innerHTML = "Enter a valid email address"
        flag = false
    }



    if(txtPassword.value === '' || txtPassword.value == null){
        lblErrorPassword.innerHTML = "Password is required"
        flag = false
    } else if (txtPassword.value.length <= 8){
        lblErrorPassword.innerHTML = "Password length must be at least 8 characters"
        flag = false
    }

    if(txtConfirmPass.value === '' || txtConfirmPass.value == null){
        lblErrorConfirmPass.innerHTML = "Password didn't match"
        flag = false
    } else if(txtConfirmPass.value != txtPassword.value){
        lblErrorConfirmPass.innerHTML = "Password didn't match"
        flag = false
    } else if (txtConfirmPass.value.length <= 8){
        lblErrorConfirmPass.innerHTML = "Password didn't match"
        flag = false
    }

    if(cbTermCondition.value == 'none'){
        document.getElementById("cb-term-condition").className+= " error"
        alert(ocument.getElementById("cb-term-condition").className)
    }

    if (flag == false){
    e.preventDefault()
    flag = true
    }
})


function resetLblError(){
    lblErrorName.innerHTML = ""
    lblErrorEmail.innerHTML = ""
    lblErrorPassword.innerHTML = ""
    lblErrorConfirmPass.innerHTML = ""
    lblErrorGender.innerHTML = ""
}

function CheckRadioValue() {
      var isChecked = false
    for(i = 0; i < rbGender.length; i++) {
        if(rbGender[i].checked){
            isChecked = true
        }
    }

    if(isChecked == false){
        lblErrorGender.innerHTML = "Please choose one of the option above"
        flag = false
    }
}