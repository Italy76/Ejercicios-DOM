
let numeroMagico;

function comenzarJuego(){
    numeroMagico = getRandomArbitrary(1, 101)
    console.log(numeroMagico);
    // cambio mensaje del boton
    let btnComenzar = document.getElementById("btnComenzar")
    btnComenzar.innerHTML = "Juega!"
    btnComenzar.className = "btn btn-secondary btn-lg"
}

// retorna un numero aleatorio entre min y max (excluido)
function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

function consultarNumero(){
    let numeroIngresado = document.getElementById("numeroIngresado").value
    let mensaje = document.getElementById("msj")
    if(numeroIngresado == numeroMagico){
        mensaje.innerHTML = "Adivinaste! 🤩"
        mensaje.className = "alert alert-primary";
    }else if(numeroIngresado>numeroMagico){
        mensaje.innerHTML = "Vuelve a itentarlo, el numero magico es menor al ingresado";
        mensaje.className = "alert alert-info";
    }else{
        mensaje.innerHTML = "Vuelve a intentarlo, el numero magico es mayor al ingresado";
        mensaje.className = "alert alert-info";
    }
}