function dataLoading() {
    document.getElementById('edit-heading').innerText = sessionStorage.getItem('titletext');
    document.getElementById('author').innerText = sessionStorage.getItem('authorText');
    var bodyContent = sessionStorage.getItem('bodytext').replaceAll('\n','');
    document.getElementById('edit-contentText').innerText = bodyContent;
}

function onEdit() {
  var editButton;
  editButton = document.getElementById('edit-button');
  var headingBlock = document.getElementById('edit-heading');
  var postContent = document.getElementById('edit-contentText');
  //var editIcon = editButton.getElementsByTagName('i')[0];
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
      //editIcon.setAttribute('class','fa fa-edit');
      editButton.innerHTML = 'Save<i class="fa fa-edit" style="padding-left: 4px;"></i></button>';
  }
}

