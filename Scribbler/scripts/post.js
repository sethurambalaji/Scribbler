function dataLoading() {
    document.getElementById('edit-heading').innerText = sessionStorage.getItem('titletext');
    document.getElementById('author').innerText = sessionStorage.getItem('authorText');
    document.getElementById('edit-contentText').innerText = sessionStorage.getItem('bodytext');
}


