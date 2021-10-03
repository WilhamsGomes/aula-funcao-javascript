function strings (texto1, texto2){

    maiusculas = texto1.toUpperCase();

    return maiusculas.concat(' ', texto2);

}

console.log(strings("Wilhams", "Front End"))