// modelo para la coleccion producto
// destructuring de la clase mongoose -- solo traigo los metodos que me importan

const {Schema, model, Collection} = require('mongoose')

// creamos el schema

const productoSchema = Schema({
        nombre: {
            type: String,
            required: false,
        },
        descripcion: {
            type: String,
            default: "",
        },
            imagen: {
            type: String,
            default: "",
        },
            imagenes: [
            {
                type: String,
            },
        ],
        marca: {
            type: String,
            default: "",
        },
        precio: {
            type: Number,
            default: "",
        },
        existencia: {
            type: Number,
            required: false,
            min: 0,
            max: 255,
        },
        rating: {
            type: Number,
            default: 0,
        },
        numRevisiones: {
            type: Number,
            default: 0,
        },
        estaOfertado: {
            type: Boolean,
            default: false,
        },
        fechaCreacion: {
            type: Date,
            default: Date.now,
        },
    },
 {Collection: "producto"}
);

module.exports = model("Producto", productoSchema)