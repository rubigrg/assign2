function main(){
    
    var myForm = document.getElementById("login");
    myFOrm.addEventListener("submit");
}

function validateForm(event){
    var myForm = document.getElementById("form");
    
    if(myForm.firstname.value == ""){
       document.getElementById("firstNameError").style.display="block";
       }
    else{
        document.getElementById("firstNameError").style.display="inline";
    }
    
    if(myForm.lastName.value == ""){
        document.getElementById("lastNameError").style.display="block";
    }
    else{
        document.getElementById("lastNameError").style.display="inline";
    }
    
    if(myForm.email.value == ""){
        document.getElementById("emailError").style.display="block";
    }
    esle {
        document.getElementById("emailError").style.display="inline";
    }
    
    of(myForm.phoneNumer.value == ""){
        document.getElementById("phoneNumberError").style.display="block";
    }
    else{
        document.getElementById("phoneNumberError").style.display="inline";
    }
    
    if(myForm.comments.value == ""){
        document.getElementById("comments").style.display="block";
    }
    esle{
        document.getElementById("comments").style.display="inline";
    }
}