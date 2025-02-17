// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let campo = document.getElementById('amigo');
let lista = document.querySelector('#listaAmigos');
let result = document.getElementById('resultado');
let reinicio = document.querySelector('#reinicio');

//agregar amigos
function agregarAmigo() {
    //verifica si el campo esta vacio 
    if (campo.value === '') {
        alert('Por Favor, inserte un nombre')
    } else {
        //se reciben los datos del campo
        amigos.push(campo.value);
        campo.value = '';
        listaAmigos();
    }
}

function listaAmigos() {
    lista.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let nombre = document.createElement('li');
        nombre.textContent = amigo;
        lista.appendChild(nombre);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
        let i = Math.floor(Math.random() * amigos.length);
        let nombreElegido = amigos[i];
        result.textContent = `Amigo Secreto elegido es: ${nombreElegido}`;
        reinicio.classList.remove('hidden');
        reinicio.classList.add('button-draw');
        lista.innerHTML='';
    }
}

function reiniciarJuego() {
    // Reinicia la lista de amigos y la lista en el DOM
    campo.value = '';
    result.innerHTML = '';
    amigos = [];
    lista.innerHTML = '';
    reinicio.classList.add('hidden');
    reinicio.classList.remove('button-draw');
    
}
