// Gerando dados randomicos para o arquivo allTables JSON

const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 16; // 16 - 26 (exclusivos)

let fakeTables = [];
for (i = 1; i < numTables; i++) {
  const chairs = Math.floor(Math.random() * 6) + 2; // 2-8 (exclusivos)
  const name = `Table ${i}`;
  const location = ["Uberaba", "Varginha", "Lavras"][Math.floor(Math.random() * 3)]; // 0-3 (exclusivos)
  fakeTables.push({
    name: name,
    capacity: chairs,
    isAvailable: true, //true or availability ???
    location: location
  });
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);