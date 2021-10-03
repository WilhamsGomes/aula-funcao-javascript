function compararString (palavra){

    let repeticao = 0;

    let texto = "Oi, tudo tudo tudo bem?"
    let convertor = texto.split(" ")

     for (num = 0; num<=convertor.length; num++){
         
        if (palavra == convertor[num]){
            repeticao++;
        }

     } return repeticao

}

console.log(compararString("tudo"))