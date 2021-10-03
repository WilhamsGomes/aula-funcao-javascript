var estados = ["PE", "SP", "BA", "RN", "RJ"]
var capitais = ["Recife", "São Paulo", "Salvador", "Natal", "Rio de Janeiro"]


function juntarArray(estados, capitais){


    let juntar = estados.concat(capitais);
    
    let convertor = juntar.join(" - ")

    return convertor

}

console.log(juntarArray(estados, capitais))

