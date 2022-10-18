const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors');
const userRoutes = require('./routes/user');
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/strategin").then(
          () => {console.log('Connecté à la base de donnée de MongoDB') },
          err => { console.log('Erreur lors de la connexion à la bdd'+ err)}
);

app.use('/api/auth', userRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
  
  
  module.exports = app;