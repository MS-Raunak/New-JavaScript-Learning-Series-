function submitForm() {
   
    let name = document.forms['formMsg']['name'].value;

    let mob = document.forms['formMsg']['mobile'].value;
    let email = document.forms['formMsg']['email'].value;
    let pass = document.forms['formMsg']['password'].value;
    let cpass = document.forms['formMsg']['confirmPassword'].value;

    if(name=="" || mob=="" || email=="" || pass=="" || cpass==""){
        alert("All fields are mandatory") 
        return false;
    }
    if(mob.length < 10){
        alert("Invalid mobile length")
        return false;
    }
    if(mob.substr(0,1)!='9' && mob.substr(0,1)!='8' && mob.substr(0,1)!='7' && mob.substr(0,1)!='6'){
        alert("Invalid mobile number")
        return false;
    }
    if(pass.length < 6){
        alert("password length must be atleast 6digits!") 
        return false;
    }

    if(pass!=cpass){
        alert("Invalid password!") 
        return false;
    }
}


    
   