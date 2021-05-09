var imported = document.createElement('script');
imported.src = './scommon.js';
document.head.appendChild(imported);

var posts = document.getElementsByClassName("postCard")
for(let i=0; i<posts.length; i++){
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
function confirmDelete(card) {
    card.remove();
    document.getElementById("confirmDeleteModal").style.display = 'none';
}
