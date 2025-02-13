// instanciamos la capa modelo correspondiente

let Usuarios = require('.../models/ususarios')

// funciones de la libreria - metodos de la clase

const listartodos = async (req, res) =>{
try {
// consutar todos sin filtro

let listaUsuarios = await Usuarios.find().exec();
res.status(200).send({
    exito: true,
    listaUsuarios,
})
} catch(error){ 
    res.status(500).send({
        exito: false,
        mensaje: "error en la consulta",
    })
}
}

module.exports ={
    listartodos
}