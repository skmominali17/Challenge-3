const emailInput = document.getElementById("email");
const form = document.querySelector(".email-form");
const output = document.querySelector(".output");
const errorIcon = document.querySelector(".error");

function ValidateEmail(input){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.match(regex)){
        return true;
        }else{
        return false;
        }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = emailInput.value;
    if(ValidateEmail(input)){
        if(input.length < 25){
            output.innerHTML = "Sent successfully";
            output.style.color = "green";
            errorIcon.style.display = "none";
        }
        
    }
    else{
        output.innerHTML = "Invalid email.";
        output.style.color = "red";
        errorIcon.style.display = "block";
        
    }

});