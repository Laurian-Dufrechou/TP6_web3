

// le module http est n ́ecessaire et devra ˆetre install ́e
 const http = require('http');
 const fs = require("fs");
 const table = require("table");
 const request = require('request');
 const Table = require('table-builder');

 let tabDate = [];
 var app = http.createServer(function(req, res) {
 // l’entˆete de la r ́eponse : 200 = OK
 res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
 if(req.url != "/"){
    code = req.url.split('/')[1]
    var url = 'https://geo.api.gouv.fr/communes?codePostal='+ code+"&fields=nom,population";
    request(url, (error, response, body ) => {
        const communes = JSON.parse(body);

        var headers = { "nom" : "Commune", "population": "Population"};

        const tab = new Table({'class': 'some-table'})
        .setHeaders(headers) // see above json headers section
        .setData(communes) // see above json data section
        .render();

        res.write(tab)
        res.end();
    });
 }
 });

 // le serveur  ́ecoute sur le port 3000
 app.listen(3000);