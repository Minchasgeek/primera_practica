const fs = require("fs");


const INPUT_CSV = "data.csv";
const OUTPUT_JSON = "output.json";

try {
  // 1) Leer el CSV (obtenemos un string)
  const csvText = fs.readFileSync(INPUT_CSV, "utf-8");

  // 2) Separar por filas usando "\n"

  const lines = csvText.replace(/\r/g, "").split("\n");

  // Quitamos líneas vacías (por ejemplo, un \n al final del archivo)
  const filteredLines = lines.filter((line) => line.trim() !== "");

  if (filteredLines.length === 0) {
    throw new Error("El CSV está vacío o no tiene filas válidas.");
  }

  // 3) Primera línea: cabeceras 
  const headers = filteredLines[0].split(";").map((h) => h.trim());

  // 4) Resto de líneas: datos
  const dataLines = filteredLines.slice(1);

  // 5) Convertir cada fila a objeto
  const result = dataLines.map((line) => {
    const values = line.split(";").map((v) => v.trim());

    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? ""; // si falta una columna, ponemos ""
    });

    return obj;
  });

  // 6) Escribir JSON 
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(result, null, 2), "utf-8");

  console.log(`Generado ${OUTPUT_JSON} con ${result.length} registros.`);
} catch (err) {
  console.error(" Error:", err.message);
}
