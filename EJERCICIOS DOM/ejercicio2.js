//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement('div');
const pDentro = document.createElement('p');

pDentro.textContent = 'Hola, soy un párrafo dentro de un div';
divConP.appendChild(pDentro);

document.body.appendChild(divConP);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divConSeisP = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo número ${i}`;
  divConSeisP.appendChild(p);
}

document.body.appendChild(divConSeisP);


//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Insert = document.querySelector('h2.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(element => {
  element.remove(); // o element.parentNode.removeChild(element);
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div');

const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';

// Insertamos la p antes del segundo div
divs[0].parentNode.insertBefore(pMiddle, divs[1]);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');

divsInsertHere.forEach(div => {
  const pInside = document.createElement('p');
  pInside.textContent = 'Voy dentro!';
  div.appendChild(pInside);
});
