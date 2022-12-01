const {Router} = require("express");
const multer = require("multer");
const rutasHabitacion = Router();
const ctrHab = require("../controller/habitaciones.controller");
const fecha = Date.now();

const rutaStorage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './public/upload/');

    },
    filename:function(req, file, callback){
        callback(null, fecha + "_" + file.originalname);
    }
});

const upload = multer({storage:rutaStorage});

rutasHabitacion.get('/', ctrHab.obtener);
rutasHabitacion.get('/:id', ctrHab.obtenerId);
rutasHabitacion.post('/', upload.single('img'), ctrHab.add);
//rutasHabitacion.put('/:id', ctrHab.edit);

module.exports = rutasHabitacion;