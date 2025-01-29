let amigos = [];


function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    if (nombre === '' || !regex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios entre palabras)');
        return;
    }
    amigos.push(nombre);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
}


function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un/(a) amigo/(a) antes de sortear.');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Su amigo secreto es: ${amigo}`;
    resultado.appendChild(li);
}
