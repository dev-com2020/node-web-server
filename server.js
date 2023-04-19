const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

let app = express();
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + ' \n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/person", (req, res) => {
    res.render('person.hbs', {
        pageTitle: 'Person Page',
        message: 'Hello there!'
    });
  });
  
app.get("/about", (req, res) => {
  res.send({
    name: "Andrew",
    likes: ["Biking", "Cities"],
  });
app.get("/bad", (req, res) => {
    res.send({errorMessage: "<h2>Nie udało się wykonać zapytania...</h2>"   
});
  });

});


app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
    }); 
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
    });

    app.listen(3000, ()=> {
    console.log("Serwer działa na porcie 3000");
});
