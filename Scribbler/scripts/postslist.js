
//getting all postcards
var posts = document.getElementsByClassName("postCard");
//for loop for setting id attribute corresponding to their index in array
for(let  i=0; i<posts.length; i++){
    var postId = i+1 ;
    posts[i].setAttribute("id",'card'+postId);
}

/*Confirm Delete Modal

  parameter:value - id attribute set earlier in this JS file using for loop

  added event listener for yes button inside Delete Modal
 */
function confirmDeleteModal(value) {
   var card = document.getElementById(value);
   var confirmDeleteModal = document.getElementById("confirmDeleteModal").style.display = 'block';
   document.getElementById("confirmDelete").addEventListener("click", function () {
       card.parentElement.removeChild(card)
       closeConfirmDeleteModal();
   });
}

//closes Delete Modal
function closeConfirmDeleteModal(){
    document.getElementById("confirmDeleteModal").style.display = 'none';
}


/*
  function to navigate to corresponding post page

  parameter:value - id attribute set earlier in this JS file using for loop

  sessionStorage is used to store values of author,title, body content to
     display in corresponding post page
 */
function readMore(value) {
    var card = document.getElementById(value);
    var postTexts = [];
    postTexts = card.getElementsByTagName('p');
    sessionStorage.setItem('authorText',postTexts[0].textContent);
    sessionStorage.setItem('titletext',postTexts[1].textContent);
    sessionStorage.setItem('bodytext',postTexts[2].textContent);

}
