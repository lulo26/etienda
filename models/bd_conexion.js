// Instanciar la libreria mongoose

const mongoose = require("mongoose")

const conexion = async ()=>{
    
try{
    await mongoose.connect("mongodb://0.0.0.0:27017/etienda");
    console.log("base de datos conectada");
    
    } catch (error) {
        console.log(`error en la conexión: ${error}`)
    }
}

module.exports = conexion;