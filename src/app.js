//se necesita traer express
const express = require('express');

//se trae el modulo creado para la base de datos 
const conexionBD= require('./db')

//
const app = express();

//sacar la variables de entorno 
require('dotenv').config();

//conexion a la base de datos invocamos el metoso de conexion
conexionBD();

//configuraciones 
app.set("name", "api-hotel");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost')
