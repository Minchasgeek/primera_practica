//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

for (const country of countries1) {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
}

document.body.appendChild(ulCountries);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elemToRemove = document.querySelector('.fn-remove-me');
if (elemToRemove) {
  elemToRemove.remove(); // o elemToRemove.parentNode.removeChild(elemToRemove);
}

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('div[data-function="printHere"]');

const ulCars = document.createElement('ul');

for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
}

printHereDiv.appendChild(ulCars);


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countriesCards = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// Contenedor para las cards (opcional pero muy útil para 1.5 y 1.6)
const cardsContainer = document.createElement('div');
cardsContainer.id = 'cards-container';

countriesCards.forEach(country => {
  const cardDiv = document.createElement('div');

  const title = document.createElement('h4');
  title.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;

  cardDiv.appendChild(title);
  cardDiv.appendChild(img);

  cardsContainer.appendChild(cardDiv);
});

document.body.appendChild(cardsContainer);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';

deleteLastBtn.addEventListener('click', () => {
  const container = document.querySelector('#cards-container');
  if (container && container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});

document.body.appendChild(deleteLastBtn);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const countriesCards2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const cardsContainer2 = document.createElement('div');
cardsContainer2.id = 'cards-container-2';

countriesCards2.forEach(country => {
  const cardDiv = document.createElement('div');

  const title = document.createElement('h4');
  title.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar este';

  deleteBtn.addEventListener('click', () => {
    cardDiv.remove(); // elimina solo este div
  });

  cardDiv.appendChild(title);
  cardDiv.appendChild(img);
  cardDiv.appendChild(deleteBtn);

  cardsContainer2.appendChild(cardDiv);
});

document.body.appendChild(cardsContainer2);

