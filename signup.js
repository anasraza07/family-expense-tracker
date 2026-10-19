var fullName = document.getElementById("full-name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var signupBtn = document.querySelector("button")

signupBtn.addEventListener("click", function () {
  // console.log(fullName.value, email.value, password.value)
  if (!fullName.value || !email.value || !password.value) {
    displayError("All fields are required!")
    return;
  }

  var userObj = {
    fullName: fullName.value,
    email: email.value,
    password: password.value
  }

  var users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    userObj.id = 1
    localStorage.setItem("users", JSON.stringify([userObj]))
    displaySuccess("Signup successful.")
  } else {
    // user.id = users.length + 1
    var isUserExist = false
    for (var i = 0; i < users.length; i++) {
      var user = users[i]
      if (user.email == email.value) {
        isUserExist = true;
        break;
      }
    }

    if (isUserExist) {
      displayError("Email already exist!")
    } else {
      userObj.id = users.length + 1
      users.push(userObj)
      localStorage.setItem("users", JSON.stringify(users))
      displaySuccess("Signup successful.")
    }

  }

  window.location.href = "./login.html"
})

function displayError(message) {
  var alertMessageElem = document.querySelector(".alert-message");
  alertMessageElem.style.color = "red";
  alertMessageElem.innerText = message;
  setTimeout(function () {
    alertMessageElem.style.display = "none"
  }, 3000)
}

function displaySuccess(message) {
  var alertMessageElem = document.querySelector(".alert-message");
  alertMessageElem.style.color = "green";
  alertMessageElem.innerText = message;
  setTimeout(function () {
    alertMessageElem.style.display = "none"
  }, 3000)
}


