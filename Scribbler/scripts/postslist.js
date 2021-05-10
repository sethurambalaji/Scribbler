
var posts = document.getElementsByClassName("postCard");
for(let  i=0; i<posts.length; i++){
    var postId = i+1 ;
    posts[i].setAttribute("id",'card'+postId);
}



function confirmDeleteModal(value) {
   var card = document.getElementById(value);
   var confirmDeleteModal = document.getElementById("confirmDeleteModal").style.display = 'block';
   document.getElementById("confirmDelete").addEventListener("click", function () {
       card.parentElement.removeChild(card)
       closeConfirmDeleteModal();
   });
}
function closeConfirmDeleteModal(){
    document.getElementById("confirmDeleteModal").style.display = 'none';
}

function readMore(value) {
    var card = document.getElementById(value);
    var postTexts = [];
    postTexts = card.getElementsByTagName('p');
    sessionStorage.setItem('authorText',postTexts[0].textContent);
    sessionStorage.setItem('titletext',postTexts[1].textContent);
    sessionStorage.setItem('bodytext',postTexts[2].textContent);

}
