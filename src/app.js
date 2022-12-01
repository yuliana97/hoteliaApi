//se necesita traer express
const express = require('express');

//se trae el modulo creado para la base de datos 
const conexionBD= require('./db');

//archivos de rutas
const rutasHab = require('./routes/habitacion.routes');
const rutasUser = require('./routes/user.routes');
const rutasReser = require('./routes/reserva.routes');

const app = express();

//sacar la variables de entorno 
require('dotenv').config();

//conexion a la base de datos invocamos el metoso de conexion
conexionBD();

//configuraciones 
app.set("name", "api-hotel");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//midleware
app.use(express.json());

//llamar las rutas
app.use(express.static('public'));
app.use('/public',express.static('public/upload'));

app.use('/habitaciones', rutasHab);
app.use('/reserva', rutasReser);
app.use('/user', rutasUser);


module.exports = app;