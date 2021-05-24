var exclamation = document.getElementsByClassName("error");
var form = document.getElementById('form')
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var formError = document.getElementsByClassName("form_error");
var input = document.getElementsByTagName("input");


function formValidation(event){
  for(let i = 0; i < 4; i++){
    input[i].classList.remove("error")
    input[i].classList.remove("input_text")
    formError[i].style.display = "none"
    
    if(!email.validity.valid) {
      formError[2].style.display = "block"
      email.classList.add("error")
      event.preventDefault()
    }
  
    if((input.type != "email" || input.type != "submit") && input[i].value == ""){
      input[i].style.border = "2px solid var(--red)"
      input[i].style.color = "var(--red)"
      formError[i].style.display = "block"
      input[2].placeholder = 'email@example/com'
      input[i].classList.add("error")
      event.preventDefault()
      input[i].classList.add("input_text")
    }
  }
}

form.addEventListener("submit", formValidation, false)



