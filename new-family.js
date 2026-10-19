var familyName = document.querySelector("input")
var createFamilyBtn = document.querySelector("button")

createFamilyBtn.addEventListener("click", function () {
  console.log(familyName.value)
  var loginUserId = JSON.parse(localStorage.getItem("loginUserId"))

  var familyObj = {
    name: familyName.value,
    adminId: loginUserId
  }

  var families = JSON.parse(localStorage.getItem("families"))
  if (families == null) {
    familyObj.id = 1;
    localStorage.setItem("families", JSON.stringify([familyObj]))
  } else {
    familyObj.id = families.length + 1
    families.push(familyObj)
    localStorage.setItem("families", JSON.stringify(families))
  }

  // console.log(familyObj.id)
  localStorage.setItem("currentFamilyId", JSON.stringify(familyObj.id))
})