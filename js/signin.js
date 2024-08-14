function submitForm(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    google.script.run.withSuccessHandler(handleSignIn).signIn(email, password);
  }

  function handleSignIn(result) {
    if (result === true) {
      window.location.href = 'movie.html'; 
    } else {
      alert("Invalid email or password");
    }
  }