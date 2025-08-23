let amigos = [];
const inputElement = document.getElementById("amigo");

inputElement.addEventListener('input',function(){
        value = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,''); //Si entra un número en el input, no lo escribe.
    });

function actualizarLista() {
    //Limpiar la lista
    const listaElem = document.getElementById("listaAmigos");
    listaElem.innerHTML = '';

    //Obtengo cada amigo en una lista
    let strAmigo = '';
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        strAmigo = `${strAmigo}<li>${amigo}</li>`;
    }
    //Los inserto en la lista del documento
    listaElem.innerHTML = strAmigo;
}

function agregarAmigo() {
    let txtAmigo = inputElement.value; //Obtengo la variable ya previamente controlada para que solo tenga letras

    if(txtAmigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(txtAmigo);
        inputElement.value = '';
        actualizarLista();
    }
}

function sortearAmigo() {
    const resultadoElem = document.getElementById("resultado");

    if(amigos.length != 0) {
        const indice = Math.floor(Math.random()*amigos.length);
        let sorteado = amigos[indice];

        resultadoElem.innerHTML = `El amigo secreto sorteado es: ${sorteado}`;
        amigos = [];
        actualizarLista();
    }
}