
function signUp(){
    var signUpModal = document.getElementById("signUpModal");
    signUpModal.style.display = "block";
}
function closeSignUpModal(){
    var signUpModal = document.getElementById("signUpModal");
    signUpModal.style.display = "none";
}
function signIn() {
   var signInModal = document.getElementById("signInModal");
   signInModal.style.display="block";
}
function closeSignInModal(){
    var signUpModal = document.getElementById("signInModal");
    signUpModal.style.display = "none";
}
function notAMember() {
 closeSignInModal();
 signUp();
}
function createPost() {
  var createPostModal=document.getElementById("createPostModal");
    createPostModal.style.display="block";
}
function closeCreatePostModal() {
    var createPostModal=document.getElementById("createPostModal");
    createPostModal.style.display="none";
}