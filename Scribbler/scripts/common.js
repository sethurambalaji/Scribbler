//SignUp() on clicking signup button
function signUp(){
    var signUpModal = document.getElementById("signUpModal");
    signUpModal.style.display = "block";
}
//Closes SignUp Modal
function closeSignUpModal(){
    var signUpModal = document.getElementById("signUpModal");
    signUpModal.style.display = "none";
}

//SignIn() on clicking SignIn Button
function signIn() {
   var signInModal = document.getElementById("signInModal");
   signInModal.style.display="block";
}
//closes SignIn Modal
function closeSignInModal(){
    var signUpModal = document.getElementById("signInModal");
    signUpModal.style.display = "none";
}

//function trigger when clicking on notAmember in signIn Modal
function notAMember() {
 closeSignInModal();
 signUp();
}
