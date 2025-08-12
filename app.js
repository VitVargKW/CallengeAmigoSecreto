// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


const agregarAmigo = () => {
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim()
    nombre === "" ?  alert("Por favor, inserte un nombre") :  (amigos.push(nombre)); 
    entrada.value = ""; 
    listaAmigos()
}

const listaAmigos= () => {
    let listado =  document.getElementById("listaAmigos");
    listado.innerHTML = "";
    for (let i = 0 ; i< amigos.length; i++) {
        listado.innerHTML += `<li>${amigos[i]}</li>`
    }
}

const sortearAmigo = () => {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0 ) {
        resultado.innerHTML = "No hay listado para sortear";
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = amigos[indice];
}