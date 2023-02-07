function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
      document.getElementById("message").innerHTML = "Please fill in both fields.";
    }
  }
  