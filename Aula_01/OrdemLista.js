// Construa uma função que receberá uma lista como parâmetro,
// e retornará a mesma lista de forma ordenada!;

const lista = [3, 1, 9, 8, 4, 6, 5, 0, 2, 7];


function ordenarLista(parametro) {

    var maior;
    var atual;


    for (var i = parametro[0]; i <= parametro.lenght; i++) {

        for (var j = parametro[i]; j <= parametro.lenght; j++) {
            atual = parametro[j];
            if (parametro[j] < parametro[i]) {
                atual = parametro[j];
            }
        }

        parametro[i] = atual;
    }


return parametro;

}
var resultado_da_minha_funcao = ordenarLista(lista);

console.log(`essa é a lista ordenada: ${resultado_da_minha_funcao}`);