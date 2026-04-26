function generarTablas(){
    let contenedor = document.getElementById("divTablas");
    let contenido = "";
    let numero= document.getElementById("inputNumero").value;
    let numeroInt=parseInt(numero);

    for(let i=1; i<=10; i++){
        contenido=contenido+"<div class='fila'>" +numeroInt+ " x " +i+ " = " +(numeroInt*i) + "</div>" ;
    }
    contenedor.innerHTML = contenido;
}