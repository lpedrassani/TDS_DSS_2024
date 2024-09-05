//Ex1/////////////////////////////////////////////////////////////////////////////////////
var nome = "Guilherme";

function textSize(text){

    var textSize = text.length;

    return textSize;
}

//Ex2/////////////////////////////////////////////////////////////////////////////////////

function trace(text){

    var dashedText = '';

    for(var i=0;i<text.length;i++)
        {
            dashedText += text[i];
            if(i<(text.length-1))
                {
                    dashedText += '-';
                }
            
        }

        return dashedText;
}

//Ex3/////////////////////////////////////////////////////////////////////////////////////

function captal(text){

    for(i=0;i<text.lenght;i++)
        {
            console.log(text);
        }
}


//////////////////////////////////////////////////////////////////////////////////////////
console.log(`O tamanho do texto é: ${textSize(nome)}`);
console.log(trace(nome));
console.log(captal(nome));