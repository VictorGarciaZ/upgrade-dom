/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
const showMe = document.querySelector(".showme");
console.log(showMe);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
const pillado = document.querySelector("#pillado");
console.log(pillador);


/*1.3 Usa querySelector para mostrar por consola todos los p*/
const parragraph = document.querySelectorAll("p");
console.log(parragraph);

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/
const classPokemon = document.querySelectorAll(".pokemon")
console.log(classPokemon);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe"*/
const attr = document.querySelectorAll("[data-function='testMe']") //DUDA RESUELTA EN CLASE ("LAS COMILLAS DENTRO Y FUERA DE []")
console.log(attr);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe"*/
const attr = document.querySelector ("[data-function='testMe']") //DUDO RESUELTA EN CLASE   
console.log(attr[2]);