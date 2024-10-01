function validate(event){
  var names = document.getElementById('names').value
  var male = document.getElementById('male')
  var female = document.getElementById('female')
  var email = document.getElementById('email').value
  var phone = document.getElementById('phoneNumber').value
  var address = document.getElementById('address').value
  var error = 0


  if(names == ''){
    document.getElementById('name-error').textContent = "Please input your name"
    error++
  } else{ 
    document.getElementById('name-error').textContent = ""
  }

  if(!male.checked && !female.checked){
    document.getElementById('gender-error').textContent = "Please input your gender"
    error++
  } else{
    document.getElementById('gender-error').textContent = ""
  }

  if(email == ''){
    document.getElementById('email-error').textContent = "Please input your email"
    error++
  } else if(email.split('@')[0] == ""){
    document.getElementById('email-error').textContent = "Please don't start with @"
    error++
  } else if(!email.endsWith('@gmail.com')){
    document.getElementById('email-error').textContent = "Please use your google account"
    error++
  } else{ 
    document.getElementById('email-error').textContent = ""
  }

  if(phone == ''){
    document.getElementById('phone-error').textContent = "Please input your phone"
    error++
  } else if(phone.length < 10 || phone.length > 12){
    document.getElementById('phone-error').textContent = "Phone is invalid (length is not between 10-12)"
    error++
  } else{
    document.getElementById('phone-error').textContent = ""
  }

  if(address == ''){
    document.getElementById('address-error').textContent = "Please input your address"
    error++
  } else if(address.length < 20){
    document.getElementById('address-error').textContent = "address is too short!"
    error++
  } else{
    document.getElementById('address-error').textContent = ""
  }

  if(error > 0){
    event.preventDefault()
  }
}

function validateAddress(){
  var address = document.getElementById('address').value
  document.getElementById('address-count').textContent = address.length + " (min: 20)"

  if(address.length >= 20){
    document.getElementById('address-count').style.color = '#24252a'
  } else{
    document.getElementById('address-count').style.color = 'red'
  }
}