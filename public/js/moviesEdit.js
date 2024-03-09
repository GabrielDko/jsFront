
    function mostrarOpciones() {
        var opciones = document.getElementById('opciones');
        if (opciones.style.display === 'none') {
          opciones.style.display = 'block';
        } else {
          opciones.style.display = 'none';
        }
      }
      
      function cambiarFondo(color) {
        document.body.style.backgroundColor = color;
        document.body.style.color = 'white';
        document.getElementById('opciones').style.display = 'none';
      }
      
      function removerFondo(){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('opciones').style.display = 'none';
      }
      






