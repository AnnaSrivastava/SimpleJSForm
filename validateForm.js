const validateForm = () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let pincode = document.getElementById("pincode");
  let country = document.getElementById("country");

  if (name.value == "") {
    alert("Please enter name!");
    name.focus();
    return false;
  }
  if (email.value == "" || !validateEmail(email.value)) {
    alert("Please enter email!");
    email.focus();
    return false;
  }
  if (pincode.value == "" || isNaN(pincode.value) || pincode.value.length != 5) {
    alert("Please enter pincode");
    pincode.focus();
    return false;
  }
  if (country.value == "-1") {
    alert("Please enter country!");
    return false;
  }
  return true;
};

const validateEmail = (email) => {
  //regex
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
