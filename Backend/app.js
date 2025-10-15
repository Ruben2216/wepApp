import express from "express";
import cors from "cors";
import estudianteRoutes from "./routes/estudianteRoutes.js";
// const session = require('express-session');
// const bodyParser = require('body-parser');
// import  authController from './controllers/authController';

const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send ('<h1>Hola mundo API REST</h1>');
});

// app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
// app.use(express.static('public'));


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/login.html');
// });
// app.post('/login', authController.login);
// app.get('/dashboard', authController.dashboard);

app.use('/api', estudianteRoutes);



app.listen(4000, function() {
    console.log('Servidor corriendo en http://localhost:4000');
});