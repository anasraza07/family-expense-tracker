var email = document.getElementById("email")
var password = document.getElementById("password")
var loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function () {
  // console.log(email.value, password.value)
  if (!email.value || !password.value) {
    displayError("All fields are required!")
    return;
  }

  var users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    displayError("Email or password is incorrect!")
    return;
  } else {
    var isCredentials = false
    var loginUserId = null;
    for (var i = 0; i < users.length; i++) {
      var user = users[i]
      if (user.email == email.value && user.password == password.value) {
        isCredentials = true;
        loginUserId = user.id
        break;
      }
    }

    if (!isCredentials) {
      displayError("Email or password is incorrect!")
      return;
    } else {
      displaySuccess("Login successful.")
      localStorage.setItem("loginUserId", loginUserId)
    }
  }

  window.location.href = "./family.html"
})

function displayError(message) {
  var alertMessageElem = document.querySelector(".alert-message");
  alertMessageElem.style.color = "red";
  alertMessageElem.innerText = message;
  setTimeout(function () {
    alertMessageElem.innerText = ""
  }, 3000)
}

function displaySuccess(message) {
  var alertMessageElem = document.querySelector(".alert-message");
  alertMessageElem.style.color = "green";
  alertMessageElem.innerText = message;
  setTimeout(function () {
    alertMessageElem.innerText = ""
  }, 3000)
}