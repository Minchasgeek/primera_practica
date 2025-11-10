const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
menosdecien = [];
medianas = [];
Largas = [];
for (let i = 0; i<movies.length; i++){
    if (movies[i].durationInMinutes < 100){
        menosdecien.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes <= 200){
        medianas.push(movies[i]);
    } else {
        Largas.push(movies[i]);
    }       
}  
console.log("Películas de menos de 100 minutos:", menosdecien);
console.log("Películas de entre 100 y 200 minutos:", medianas);
console.log("Películas de más de 200 minutos:", Largas);