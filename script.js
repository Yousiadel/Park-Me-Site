$("#login").on("click", function(){

  var username=$("#user").val()
  var password=$("#password").val()
  localStorage.setItem("username", username)
  localStorage.setItem("password", password)
  console.log(username);
  console.log(password);
})


$("#register").on("click", function(){
  
  var username=$("#inputUserame").val()
  var email=$("#inputEmail").val()
  var password=$("#inputPassword").val()
  var confirmpassword=$("#inputConfirmPassword").val()
  localStorage.setItem("username", username)
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  localStorage.setItem("confirmpassword", confirmpassword)
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(confirmpassword);
})

