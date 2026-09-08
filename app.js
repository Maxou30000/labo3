var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.send('Hello world!');
});

app.get('/contact', function (req, res) {
    res.send(`
    <h1>Page de contact</h1>

    <table>
      <tr>
        <th>Nom</th>
        <th>Adresse</th>
        <th>Téléphone</th>
      </tr>
      <tr>
        <td>Maxim Jacquet</td>
        <td>244 Rue Northcliffe</td>
        <td>123 456 7890</td>
      </tr>
    </table>
    <a href="/">Retour à l'accueil</a>
  `);
});


app.get('/module', function (req, res) {
    res.send(`
    <h1>Modules</h1>
    <br>
    <a href="/module/1">Module 1</a><br>
        <a href="/module/2">Module 2</a><br>
        <a href="/module/3">Module 3</a><br>
        <a href="/module/4">Module 4</a><br>
        <a href="/module/5">Module 5</a><br>
        <a href="/module/6">Module 6</a><br>
    <a href="/">Retour à l'accueil</a>
`);
});

// GÉNÉRÉ PAR COPILOT INTÉGRÉ
app.get('/module/:numero', function (req, res) {
    var numero = Number(req.params.numero);
// GÉNÉRÉ PAR COPILOT INTÉGRÉ

    if (!Number.isInteger(numero) || numero < 1 || numero > 6) {
        return res.send(`
    <h1>Module Inconnu </h1>
    <a href="/module">Retour aux modules</a>
    <br>
    <a href="/">Retour à l'accueil</a>
`);
    }

// GÉNÉRÉ PAR COPILOT INTÉGRÉ
    res.render('module', { numero: numero });
});
// GÉNÉRÉ PAR COPILOT INTÉGRÉ

app.use(function (req, res) {
    res.writeHead(404);
    res.end("Erreur 404: Page introuvable!")
});

app.listen(8080);
console.log("Le serveur est lancé sur le port 8080");
