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


// buscar por id o por otro parametro

const buscarxid = async(req, res) =>{
// recibimos el parametro por el cual debe busar y eliminar

let id = id

/* let id = {
    id: req.params.id,
}
 */
try{
    // Logica de buscar y mostrar el resultado del query
    let consulta = await Producto.findById(id).exec();
    return res.send({
        estado: true,
        mensaje: "inserción exitosa",
        consulta,
    })
} catch (error){
    return res.send({
        estado: true,
        mensaje: "error, no fue posible encontrar el resgistro",
        consulta,
    })
}

}

// Actualizar de acuerdo al id del producto

const actualizarxid = async (req, res)=>{
// recibe el parámetro de la consulta

let id = req.params.id;

// payload que viene en el body :: los datos que manda el formulario

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
 let consulta = await Producto.finByIdAndUpdate(id, datos).exec()
 return res.send({
    estado: true,
    mensaje: "documento editado",
    consulta
 })
} catch (error) {
    
}

}

// Borrar de acuerdo al id 

/* const borrarxid = async(req, res) =>{
    // recibimos el parametro
    let id = req.params.id

    try {
        let consulta = await Producto.findByIdAndDelete(id).exec();
        return res.send({
            estado: true,
            mensaje: "borrado exitoso!",
            consulta,
        })
    } catch (error){
        return res.send({
            estado: true,
            mensaje: "error",
            consulta,
    })
  } 
} */

  const borrarxid = async(req, res) =>{
    // recibimos el parametro
    let id = req.params.id

    try {
        let consulta = await Producto.findOneAndDelete({_id: id}).exec();
        return res.send({
            estado: true,
            mensaje: "borrado exitoso!",
            consulta,
        })
    } catch (error){
        return res.send({
            estado: true,
            mensaje: "error",
            consulta,
    })
  } 
}

module.exports = {
    listartodos,
    nuevo,
    buscarxid,
    borrarxid,
    actualizarxid
}