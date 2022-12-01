const {Router} = require("express");
const rutasReserva = Router();
const ctrReserva = require("..//controller/reserva.controller");


//rutasReserva.get('/' , ctrReserva.obtener);
//rutasReserva.get('/:id' , ctrReserva.obtenerId);
//rutasReserva.post('/' , ctrReserva.add);
//rutasReserva.put('/:id' , ctrReserva.edit);

module.exports = rutasReserva;