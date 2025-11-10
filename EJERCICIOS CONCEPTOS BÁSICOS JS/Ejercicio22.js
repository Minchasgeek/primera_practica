// Usa un for para recorrer todas las comidas que no sean veganas y reemplazarlas por el array de frutas, no uses frutas duplicadas.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule.splice(i, 1, ...fruits.map((fruit) => ({ name: fruit, isVegan: true })));
    i += fruits.length - 1; // Ajustar el índice para evitar saltarse elementos
  } 
}
console.log(foodSchedule);