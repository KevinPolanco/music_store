require('dotenv').config()
const express = require('express')
const routerApi = require('./routes')
const { create } = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;

const hbs = create({
  partialsDir: ["views/components"],
  extname: ".hbs"
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static(__dirname + "/public"))

app.use(express.static("node_modules/bootstrap/dist"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routerApi(app);

app.listen(PORT, () => {console.log(`Server ON, in port ${PORT}`)})