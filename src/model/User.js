const { Schema, model} = require("mongoose");

const userSchema = new Schema({
    _id:Number,
    tipodoc:String,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero:String,
    email:{
        type: String,
        unique: true,
        required: [true, 'El correo es obligaorio']
    },
    telefono:Number,
    paisorigen:String,
    password:String,
    tipouser:String,
    img:String,
    reserva:[{
        type:Schema.Types.ObjectId,
        ref:'Reserva'
    }]
})

module.exports = model ("User", userSchema);