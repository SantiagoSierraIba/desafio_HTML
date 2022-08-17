const texto = document.getElementById("texto")
const fondo = document.getElementById("fondo")

function cambiarTexto(){
    texto.innerText=prompt("Ingresa el texto que deseas ver: ")
}

function cambiarFondo(){
    selcolor=parseInt(prompt("Si quieres cambiarlo a Rojo ingresa 1 \n Si quieres cambiarlo a Verde ingresa 2 \n Si quieres cambiarlo a Amarillo ingresa 3"))
    if (selcolor==1){
        fondo.style.backgroundColor='red';
    }
    else if(selcolor==2){
        fondo.style.backgroundColor='green';
    }
    else{
        fondo.style.backgroundColor='yellow';
    }
    
}
escoger=parseInt(prompt("Escoge la acción que deseas realizar \n 1. Cambiar el texto \n 2. Cambiar el color del fondo"))

if (escoger==1){
    cambiarTexto()
}
else{
    cambiarFondo()
}


