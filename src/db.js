const mongoose =require('mongoose')

//Conexion

const conexionBD =async ()=>{
    const url= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mbdmpfs.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

    try {
        const DB =await mongoose.connect(url);
        console.log("conexion sartisfactoria" , DB.connection.name);
    } catch (error) {
        console.log(error);
    }
}
//para dejar disponible este modulo
module.exports = conexionBD;
