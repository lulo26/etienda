// instanciamos la capa modelo correspondiente
let bcrypt = require("bcryptjs")
let Usuarios = require("../models/usuarios")
let jwt = require('jsonwebtoken')

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
/**    
@description funcion que hace la creación o registro de los usuarios en el sistema
@author Lulo
@param req la petición con la data del formulario o registro de usuario
@param res falso si no existe el ususario, true y mensaje de exito si se crea, false y mensaje de error si no ingresó
@version 01 -24-02-2025
@callback funcion asincronica que ejecuta la api
*/
const registro = async (req, res) => {
    //recibir la data
    
    let data = {
    nombre: req.body.nombre,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    telefono: req.body.telefono,
    esAdmin: req.body.esadmin,
    direccion: req.body.direccion,
    zip: req.body.zip,
    ciudad: req.body.ciudad,
    pais: req.body.pais,
    };
    
    let usuarioExiste = await Usuarios.findOne({ email: req.body.email });
    
    if (usuarioExiste) {
    return res.send({
    estado: false,
    mensaje: "el usuario ya esta registrado en el sistema",
    });
    }
    
    try {
    //objeto
    let usuarioNuevo = new Usuarios(data);
    usuarioNuevo.save();
    res.send({
    estado: true,
    mensaje: "usuario creado",
    });
    } catch (error) {
    res.send({
    estado: false,
    mensaje: "usuario No creado",
    error,
    });
    }
    };
    
/**    
@description funcion que hace el login o ingreso al sistema con autenticación de 2 factores
@author Lulo
@param req la petición con usuario y password
@param res falso si no existe el ususario, si existe devuelve true y el token en formato con json
@version 01 -24-02-2025
@callback funcion asincronica que ejecuta la api
@function registro en el sistema
@class Usuarios
*/

    //login tradicional : autenticacion de un factor
    const login = async function(req, res) {
    // recibir data: user / pass
    
    let data = req.body.email;
    //validar que el usuario exista en la bd
    let usuarioExiste = await Usuarios.findOne({ email: data });
    //console.log(usuarioExiste);
    if (!usuarioExiste) {
    return res.send({
    estado: false,
    mensaje: "usuario no existe en la Bd !",
    });
    }


    // validar las credenciales
    if (usuarioExiste && bcrypt.compareSync(req.body.password, usuarioExiste.passwordHash))
    {

        // autentificacion de 2 factores con generacion del token

        const token = jwt.sign({
            userId: usuarioExiste.id,
            isAdmin:  usuarioExiste.esAdmin,
        },
        "seCreTo",
        {expiresIn: "4h"}
    )

        // generar token

        return res.send({
            estado: true,
            mensaje: "ingreso exitoso al sistema",
            usuarioExiste,
        })
    } else {
        return res.send({
            estado: false,
            mensaje: "credenciales erroneas, intente de nuevo",
        })
    }
}

module.exports = {
    listartodos,
    registro,
    login
}