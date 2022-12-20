/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const div1 = document.createElement("div")
document.body.appendChild(div1);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const divP = document.createElement("div");
const parragraph = document.createElement ("p");
divP.appendChild(parragraph);
document.body.appendChild(divP);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/
const div6p = document.createElement("div");

for (let i = 0; i < 6; i++) {
  let divSixP = document.createElement("p");
  div6p.appendChild(divSixP);
}

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/
const textP = document.createElement("p");
textP.textContent = "Soy dinámico!";
document.body.appendChild(textP);


/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
const h2Class = document.querySelector(".fn-insert-here")
h2Class.textContent = "Wubba Lubba dub dub";


/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/
const list = document.createElement ("ul") NO SE COMO SEGUIR


/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/


/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/


/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/