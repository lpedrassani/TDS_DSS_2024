// Construa uma função que receberá uma lista como parâmetro,
// e retornará a mesma lista de forma ordenada!;

const lista = [3, 1, 9, 8, 4, 6, 5, 0, 2, 7];


function ordenarLista(parametro) {

    var atual;
    var listaOrdenada = parametro;


    for (var i = 0; i <= parametro.lenght; i++) {

        for (var j = i; j <= parametro.lenght; j++) {
            if (j < i) {
                atual = j;
                
            }
            i = atual;

        }

        
    }
    return parametro;

}
var resultado_da_minha_funcao = ordenarLista(lista);

console.log(`essa é a lista ordenada: ${resultado_da_minha_funcao}`);