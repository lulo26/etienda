// controlador para el manejo de los prodcutos

// conectmos el controlador con su modelo correspondiente

const {response} = require("express");
let Producto = require("../models/productos");

// toda la logica de un cmd típico listartodos, listar por id, crear, actualizar, borrar...

const listartodos = async (req, res) =>{
try {
// consutar todos sin filtro

let listaProductos = await Producto.find().exec();
res.status(200).send({
    exito: true,
    listaProductos,
})
} catch(error){ 
    res.status(500).send({
        exito: false,
        mensaje: "error en la consulta",
    })
}
}

// crear nuevo

const nuevo = async (req, res) => {
    // llega el objeto en el body del request

    let datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        marca: req.body.marca,
        precio: req.body.precio,
        existencia: req.body.existencia,
        rating: req.body.rating,
        numRevisiones: req.body.numRevisiones,
        estaOfertado: req.body.estaOfertado
    }

    try {
    // instancia del modelo producto (collection)

    const productoNuevo = new Producto(datos)
    // guardamos en mongo
    productoNuevo.save() // escribe en mongo
    
    return res.send({
        estado:true,
        mensaje:"inserción exitosa !",
    })
    
    } catch (error) {
        return res.send({
            estado:false,
            mensaje:`ha ocurrido un error en la consulta ${error}`
        })
    }
}

module.exports = {
    listartodos,
    nuevo
}