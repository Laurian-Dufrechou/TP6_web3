

// le module http est n ́ecessaire et devra ˆetre install ́e
 const http = require('http');
 const fs = require("fs");
 const table = require("table");

 let tabDate = [];
 var app = http.createServer(function(req, res) {
 // l’entˆete de la r ́eponse : 200 = OK

 const now = new Date;
 const heure = ""+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
 const date = ""+now.getDay()+"/"+now.getMonth()+"/"+now.getFullYear();
 tabDate.push([date + " à " + heure, req.url]);
 // les donn ́ees `aenvoyer au client en r ́eponse `aune requˆete
 if (req.url == "/save"){
    //save des dates
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    fs.writeFile("./horodates.json", JSON.stringify(tabDate), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
 } else if (req.url == "/display"){
    console.log(tabDate.length);
    if (tabDate.length > 0) {
        response = table.table(tabDate);
    }
    res.writeHead(418, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write(response)
 }else{
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
 }
 res.end();
 });

 // le serveur  ́ecoute sur le port 3000
 app.listen(3000);