
// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Escoge un numero del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaxico = 4; 


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log("Tipo de dato Usuario: " + typeof(numeroDeUsuario));
    console.log("#Usuario: " + numeroDeUsuario);

    // console.log("Tipo de dato NSecreto: " + typeof (numeroSecreto));
    console.log("#Secreto: " + numeroSecreto);

    console.log('Numero de intentos: ' + intentos);
    // console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número!, en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

        //El usuario no acerto.
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor.');          
        }else{
            asignarTextoElemento('p','El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    //Forma 2
    document.querySelector('#valorUsuario').value = '';

    // Forma 1
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaxico) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros secretos.
    if (listaNumerosSorteados.length === numeroMaxico) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    } else {

        //Sí el numero generado, está incluido en la lista. 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    // let numeroSecreto = Math.floor(Math.random()*10)+1;
    // return numeroSecreto;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!.');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaxico}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar La Caja
    //Indicar mensaje de inicio/ intervalo de números.
    //Generar el número Secreto Aleatorio.
    //Reiniciar contador intentos.
    //Desabilitar el botón de nuevo juego.
    
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


condicionesIniciales();