var modal = document.getElementById('id01');
$("#login").on("click", function () {

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var modal = document.getElementById('id02');
  var username = $("#user").val()
  var password = $("#password").val()
  localStorage.setItem("username", username)
  localStorage.setItem("password", password)
  console.log(username);
  console.log(password);
})


$("#register").on("click", function () {

  var username = $("#inputUserame").val()
  var email = $("#inputEmail").val()
  var password = $("#inputPassword").val()
  var confirmpassword = $("#inputConfirmPassword").val()
  var LicensePlateNumber = $("#inputLicensePlateNumber")
  var carmake = $("#CarMake")
  var carcolor = $("#CarColor")
  localStorage.setItem("username", username)
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  localStorage.setItem("confirmpassword", confirmpassword)
  localStorage.setItem("licenseplatenumber",licenseplatenumber)
  localStorage.setItem("carmake",carmake)
  localStorage.setItem("carcolor",carcolor)
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(confirmpassword);
  console.log(licenseplatenumber);
  console.log(carmake);
  console.log(carcolor);
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}