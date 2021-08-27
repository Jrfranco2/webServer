require("dotenv").config();
const express = require("express");
var hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Jonathan Franco",
    titulo: "Curso Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Jonathan Franco",
    titulo: "Curso Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Jonathan Franco",
    titulo: "Curso Node",
  });
});

app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

app.listen(port, () => {
  console.log(`App listening at por: ${port}`);
});
