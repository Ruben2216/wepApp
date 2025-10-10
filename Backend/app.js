import express from "express";
import cors from "cors";
import { insertarEstudiantes, obtenerEstudiantes } from '/home/jose/taller3/backs/login/models/dbpgAdmin.js'
// const session = require('express-session');
// const bodyParser = require('body-parser');
// import  authController from './controllers/authController';

const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

app.get ('/', (req, res) => {
    res.send ('<h1>Hola mundo API REST</h1>');
});

// app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
// app.use(express.static('public'));


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/login.html');
// });
// app.post('/login', authController.login);
// app.get('/dashboard', authController.dashboard);

app.post ('/api/save', function(req, res) {
    const { documento, nombre, apellido, telefono, correo } = req.body;
    console.log(`Documento: ${documento}, Nombre: ${nombre}, Apellido: ${apellido}, Teléfono: ${telefono}, Correo: ${correo}`);
    res.json({ message: 'Datos recibidos correctamente' });

    console.log (req.body);
    
    insertarEstudiantes(documento, nombre, apellido, telefono, correo);
    
});

app.get('/api/save', (req, res) => {
    obtenerEstudiantes () ;
    // res.json ({})
    
   
});



app.listen(4000, function() {
    console.log('Servidor corriendo en http://localhost:4000');
});