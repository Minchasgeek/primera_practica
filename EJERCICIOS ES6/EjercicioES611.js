// el siguiente javascript usa forof y forin para saber cuantas veces ha 
//do cada sonido agregado por los usuarios a favorito.

//ra ello recorre la lista de usuarios y usa forin para recoger el nombre 
// los sonidos que el usuario tenga como favoritos.

//a vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
//z que ese sonido se repita como favorito en cada usuario.

//te ejercicio es un poco complicado con los conocimientos actuales pero...a 
// vez un buen reto y oportunidad para comprender que hay muchas formas de 
//cer las cosas en javascript.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
const soundCount = {};

for (const user of users) {
    for (const sound in user.favoritesSounds) {
        if (soundCount[sound]) {
            soundCount[sound]++;
        } else {
            soundCount[sound] = 1;
        }
    }
}
console.log(soundCount);