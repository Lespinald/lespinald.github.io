const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

//creacion de la api con las rutas
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})
//Start de server
app.listen(5000, () => { console.log("Server starter on port 5000")})