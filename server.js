const express = require("express");
const hbs = require("hbs");

let app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/person", (req, res) => {
    res.render('person.hbs', {
        pageTitle: 'Person Page',
        message: 'Hello there!',
        currentYear: new Date().getFullYear(),
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
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.listen(3000, ()=> {
    console.log("Serwer działa na porcie 3000");
});
