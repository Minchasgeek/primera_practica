//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button = document.getElementById('btnToClick');

button.addEventListener('click', (event) => {
  console.log(event); // Muestra toda la info del evento click
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.getElementById('myInput');

input.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
input.addEventListener('input', (event) => {
  console.log(event.target.value);
});
