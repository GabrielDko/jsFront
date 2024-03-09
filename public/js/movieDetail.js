window.addEventListener('load', function(e){

    let body = this.document.querySelector('body');

    const miCheckbox = document.getElementById('miCheckbox');

miCheckbox.addEventListener('change', function() {
    if (this.checked) {
       body.style.backgroundColor = '#232323';
       body.style.color = 'white';

    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});



})