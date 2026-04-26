function generarTablas(){
    let contenedor = document.getElementById("divTablas");
    let contenido = "";
    for(let i=1; i<=10; i++){
        contenido=contenido+"<div class='fila'> 5 x " +i+ " = " +(5*i) + "</div>" ;
    }
    contenedor.innerHTML = contenido;
}