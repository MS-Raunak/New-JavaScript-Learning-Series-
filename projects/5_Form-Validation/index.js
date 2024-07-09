const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
let cnfPassError = document.getElementById('cnfPassError');
let password;
let isSubmit = false;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword() && validateConfirmPassword()){
        alert("Form Submitted Successfully");
        isSubmit=true;
    }
    
    if(isSubmit) {
        clearForm();
    }
});


//Name Validation
function validateName(){
    let name = document.getElementById('name').value;
    let icon = document.querySelector('#nameIcon');

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }

    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('ffa-check');
    //icon.style.color = 'green';

    return true;
}

//Email Validation
function validateEmail(){
    let email = document.getElementById('email').value;
    let icon = document.querySelector('#mailIcon');
    
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('ffa-check');
    // icon.style.color = 'green';
    return true;
}

//Password Validation
function validatePassword(){
     password = document.getElementById('password').value;
    let icon = document.querySelector('#pwdIcon');


    if(password.length == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';

        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain atleast 1 Uppercase, 1 Lowecase, 1 Digit & 1 special character";
        passError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';

        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('ffa-check');
    // icon.style.color = 'green';

    return true;
}

//Confirm Password Validation
function validateConfirmPassword(){
    let cnfPassword = document.getElementById('cnfPassword').value;
    let cnfPassError = document.getElementById('cnfPassError');
    let icon = document.querySelector('#cnfPwdIcon');

    if (cnfPassword.length==0) {
        cnfPassError.innerHTML = "confirm password can't be empty";
        cnfPassError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }
    if (cnfPassword!=password) {
        cnfPassError.innerHTML = "Invalid password!";
        cnfPassError.previousElementSibling.classList.add('fa-xmark');
        icon.style.color = 'red';
        return false;
    }

    cnfPassError.previousElementSibling.classList.add('ffa-check');
    icon.style.color='green';
    return true;
}

//Clear form after submission
function clearForm() {
    document.getElementById('name').value = ""
    nameError.previousElementSibling.classList.add('ffa-xmark');

    document.getElementById('email').value = ""
    emailError.previousElementSibling.classList.add('ffa-xmark');

    document.getElementById('password').value = ""
    passError.previousElementSibling.classList.add('ffa-xmark');

    document.getElementById('cnfPassword').value = ""
    cnfPassError.previousElementSibling.classList.add('ffa-xmark');
    isSubmit=false;
}

// Make a validateConfirmPassword function to validate it