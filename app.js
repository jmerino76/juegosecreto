let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

//tener cuidado cuando declaramos variables y se utilizan en el llamado de una funcion, deben estar declaradas antes
//Javascript ejecuta lineal el programa
 //para buscar coincidencias en VS se usa control + F 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {/* en HTML se puede bucar con el queryselector, pero 
    tambien exite el getElementById que permite a cada nombre del HTML ponerun ID unico
    lo cual permite tener mas ordenado y facil de identificar */
    let numeroDeUsuario = parseInt(document.getElementById("vUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
            }else {
                asignarTextoElemento('p','El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    return;
}
function limpiarCaja(){
    document.querySelector('#vUsuario').value = '';
    
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    //si ya sorteamos todos los numeros
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        document.querySelector('#btnIntento').setAttribute('disabled','true');
       
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
            /* esto es recursividad, que nos permite
         llamar a la misma funcion dentro de la funcion, en este caso es reutilizar
         la funcion que ya hemos hecho, si no se deja condicion de salida, entrara
         en un loop el programa, se debe tener cuidado con eso cuando se usa recursividad */
         

    }   
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}
 
function reiniciarJuego(){
    //limpiar caja, 
    limpiarCaja();
    //indicar mesaje de intervalo de numero
    // reiniciar el contador, indicar intervalo de numeros
    //generar numero aleatorio
    //desabilitar boton de nuevo juego
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');


} 


condicionesIniciales();
