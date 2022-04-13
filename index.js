const express = require('express')
const app = express();
const getConection = require('./controller/user.controller')

getConection();

app.listen(3000, () => {console.log(`Server ON, in port 3000`)})