function validate()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

//username
  if (userEntered.length >= 6)
  {

    //Turn the username items green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");

    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");

    document.getElementById("usernameError").innerHTML="Success creating User Name.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

  }

  else if (userEntered.indexOf(' ') >= 0 )
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="username can not contain spacce";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");

  }

  else
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="User Name must be at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

//password
  if (passEntered.toLowerCase() == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML='Password must NOT be the word "password" regardless of (upper-/lower-) case used';
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if(passEntered.length < 6 || passEntered.length > 20 )
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if(passEntered == userEntered )
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if( passEntered != passEntered.toLowerCase() )
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain a upper case";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if( /\d/.test(passEntered) == false )
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain a number";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (/[!@#$%^&*()]/g.test(passEntered) == false)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain a special character such as !@#$%^&*()";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else
  {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");

    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");

    document.getElementById("passwordError").innerHTML="Success creating password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  }
}
