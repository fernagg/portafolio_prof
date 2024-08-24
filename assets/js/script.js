
function mostrarLista() {   //no me cambia el tecto del botón
    let lista = document.getElementById("lista")
    let boton =document.getElementsByTagName("button")[0];
    let display = lista.style.display;

    if (display == "none" || display == "") {
        lista.style.display = "block";
        boton.innerHTML="Ocultar Detalles";
    } else {
        lista.style.display = "none";
        boton.innerHTML="Mostrar Detalles";
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){    //no me valida, debiese arrojar un msj bajo el nombre

    $("#bEnviar").click(function(){
        let nombre = $("#fNombre").val()
        let correo = $("#femail").val()
        let mensaje = $("fMensaje").val()
    })
    if(nombre == ""){
      $("mensaje1").fadeIn();
      return false;
    }
})