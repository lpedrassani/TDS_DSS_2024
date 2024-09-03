function mediaPonderada(a,b,c){

    if(a == undefined || b == undefined || c == undefined){
        return "Todos os parametros são obrigatórios!"
    }else if (typeof a !== "number"){
        return "O parametro 'a' não é numérico!"
    }else if (typeof b !== "number"){
        return "O parametro 'b' não é numérico!"
    }else if (typeof b !== "number"){
        return "O parametro 'c' não é numérico!"
    }

    return (a+b+c)/3;
}

console.log(mediaPonderada(8,7,9));