window.addEventListener('load', function () {

    const h1Element = document.querySelector('h1');
    h1Element.innerText = 'LISTADO DE PELÍCULAS';
    h1Element.style.color = 'white';
    h1Element.style.backgroundColor = 'teal';
    h1Element.style.padding = '20px';
    let darkModeConfirm = confirm('¿Desea modo oscuro?')

    if (darkModeConfirm) {
        document.body.style.backgroundColor = '#7f7f7f';
        document.body.classList.add('fondoMoviesList');

        const links = this.document.querySelectorAll('a');
        
        links.forEach(link => {
            link.style.color = 'white';
        });
    }




})