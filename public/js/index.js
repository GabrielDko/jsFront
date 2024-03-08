window.addEventListener('load', ()=>{
    let welcome = document.querySelector('h2');
    let userName = prompt('Ingrese su nombre.')
    if(userName == null){
        welcome.innerText += 'invitado';
    } else {
        welcome.innerText += userName;
    }
    welcome.style.textTransform = 'uppercase';

    let link = document.querySelector('a').style.color = '#E51B3E';

    let backgroundConfirm = confirm('¿Desea colocar un fondo de pantalla?')

    if(backgroundConfirm){
        document.body.classList.add('fondo') 
    }

    let texts = document.querySelectorAll('p');

    texts.forEach((text,index) => {
        if(index % 2 == 0){
            text.classList.add('destacadoPar')
        } else {
            text.classList.add('destacadoImpar')
        }
    })


    document.querySelector('main').style.display = 'block';




})