/*
function triggers when page loads
Data fetched from session storage to be added as inner text of
Post container html skeleton tags
title,authorname and body content are fetched
* */
function dataLoading() {
    document.getElementById('edit-heading').innerText = sessionStorage.getItem('titletext');
    document.getElementById('author').innerText = sessionStorage.getItem('authorText');
    var bodyContent = sessionStorage.getItem('bodytext').replaceAll('\n','');
    document.getElementById('edit-contentText').innerText = bodyContent;
}

/*
Edit Function
when edit clicked
    setting attribute contenteditable=true
    edit buttons changes to save
    contents get edited
when save clisked
    removing attribute contenteditable
    save button changed to edit
 *
 */
function onEdit() {
  var editButton;
  editButton = document.getElementById('edit-button');
  var headingBlock = document.getElementById('edit-heading');
  var postContent = document.getElementById('edit-contentText');
  if(editButton.innerText==='Edit'){
      headingBlock.setAttribute('contenteditable','true');
      postContent.setAttribute('contenteditable','true');
      headingBlock.setAttribute('class','edit-heading editable');
      postContent.setAttribute('class','edit-contentText editable');
      editButton.innerHTML = 'Save<i class="fa fa-save" style="padding-left: 4px;"></i></button>';
  }
  else{
      editButton.innerText = 'Edit' ;
      headingBlock.removeAttribute('contenteditable');
      postContent.removeAttribute('contenteditable');
      headingBlock.setAttribute('class','edit-heading');
      postContent.setAttribute('class','edit-contentText');
      editButton.innerHTML = 'Edit<i class="fa fa-edit" style="padding-left: 4px;"></i></button>';
  }
}


var numberOfClicks=0;//tracking number of clicks on like button
/*like function
 varies  for 0click , 1 click,2+ click
 */

function postLiked(){
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}

/*
comment function
 */
function addComments(id){
    if(id.value!==""){
        var addEventName = id.value +'<br>';
        var comments = document.getElementById('userComments');
        var innerHTMLContent = document.getElementById('addComments').innerHTML ;
        document.getElementById('addComments').innerHTML = '<p>'+addEventName+'</p>'+innerHTMLContent;
        comments.value = comments.defaultValue;
    }
}




