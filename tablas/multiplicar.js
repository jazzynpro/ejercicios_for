function generarTablas(){
    let contenedor = document.getElementById("divTablas");
    let mensaje = document.getElementById("mensaje");
    let contenido = "";
    let numero = document.getElementById("inputNumero").value;

    // validar vacío
    if(numero === ""){
        mensaje.textContent = "⚠️ Por favor escribe un número";
        mensaje.className = "error";
        contenedor.innerHTML = "";
        return;
    }

    // validar número válido
    if(numero <= 0){
        mensaje.textContent = "⚠️ Ingresa un número mayor a 0";
        mensaje.className = "error";
        contenedor.innerHTML = "";
        return;
    }

    // mensaje correcto
    mensaje.textContent = "✅ Mostrando tabla del " + numero;
    mensaje.className = "ok";

    for(let i = 1; i <= 10; i++){
        contenido += `<div class="fila">${numero} x ${i} = ${numero * i}</div>`;
    }

    contenedor.innerHTML = contenido;
}