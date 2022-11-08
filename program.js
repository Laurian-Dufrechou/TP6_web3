const fs = require("fs");
const table = require("table");
const figlet = require("figlet");

continents = [
    {nom: 'Afrique', population: 1340 },
    {nom: 'Amérique', population: 800 },
    {nom: 'Asie', population: 4641 },
    {nom: 'Europe', population: 747 },
    {nom: 'Océanie', population: 42 }
]


let pop = 0;

continents.forEach(continent => {
    console.log(continent.nom+ " " +continent.population);
    pop+= continent.population;
}); 

console.log("La population mondiale s'élève à " +pop % 10000 +" Mhabs");


const data = fs.readFileSync("./data.js", "utf8");

const dataJ = JSON.parse(data);

figlet.text('Démographie', function(err, titre) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(titre);
    console.log(table.table(dataJ));
});


