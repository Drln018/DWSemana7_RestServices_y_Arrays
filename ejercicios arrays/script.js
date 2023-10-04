function performOperation() {
    const operation = document.getElementById("operation").value;
    let result = '';

    switch (operation) {
        case "toString":
            const coloresToString = ['verde', 'amarillo', 'azul'];
            result = coloresToString.toString();
            break;

        case "join":
            const coloresJoin = ['verde', 'amarillo', 'azul'];
            result = coloresJoin.join('-');
            break;

        case "concat":
            const primerosNumeros = [1, 2, 3];
            const segundosNumeros = [4, 5, 6];
            const combinado = primerosNumeros.concat(segundosNumeros);
            result = JSON.stringify(combinado);
            break;

        case "push":
            const buscadoresPush = ['chrome', 'firefox', 'edge'];
            buscadoresPush.push('safari', 'opera mini');
            result = JSON.stringify(buscadoresPush);
            break;

        case "pop":
            const buscadoresPop = ['chrome', 'firefox', 'edge'];
            const ultimoElemento = buscadoresPop.pop();
            result = `Elemento eliminado: ${ultimoElemento}<br>Arreglo resultante: ${JSON.stringify(buscadoresPop)}`;
            break;

        case "shift":
            const buscadoresShift = ['chrome', 'firefox', 'edge'];
            const primerElemento = buscadoresShift.shift();
            result = `Elemento eliminado: ${primerElemento}<br>Arreglo resultante: ${JSON.stringify(buscadoresShift)}`;
            break;

        case "unshift":
            const buscadoresUnshift = ['chrome', 'firefox', 'edge'];
            buscadoresUnshift.unshift('safari');
            result = JSON.stringify(buscadoresUnshift);
            break;

        case "splice":
            const coloresSplice = ["verde", "amarillo", "azul", "púrpura"];
            const menosColores = coloresSplice.splice(0, 3);
            result = `Elementos eliminados: ${JSON.stringify(menosColores)}<br>Arreglo resultante: ${JSON.stringify(coloresSplice)}`;
            break;

        default:
            result = 'Selecciona una operación válida.';
    }

    document.getElementById("result").innerHTML = result;
}
