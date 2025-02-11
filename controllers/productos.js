// controlador para el manejo de los prodcutos

// conectmos el controlador con su modelo correspondiente

let Producto = require("../models/productos");

// tola la logica de un cmd tipico listartodosm, listarpor id, crear, actualizar, borrar...

const listartodos = async (req, res) =>{
try {
// consutar todos sin filtro

let listaProductos = Producto.find().exec();
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

module.exports = {
    listartodos
}