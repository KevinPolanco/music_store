const express = require('express')
const { create } = require("express-handlebars");
const app = express();

const hbs = create({
  partialsDir: ["views/components"],
  extname: ".hbs"
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static(__dirname + "/public"))

app.use(express.static("node_modules/bootstrap/dist"))

app.use('/', require('./routes/vistas.router'))

app.listen(3000, () => {console.log(`Server ON, in port 3000`)})