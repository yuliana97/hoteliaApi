const app = require('./app');
//se genera una conexion 
app.listen(process.env.PORT || 3000), Function (){
    console.log("Express escuchando por el puerto ", this.address().port, app.settings.env);
}