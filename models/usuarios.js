const{Schema, model} = require ("mongoose")

const ususarioSchema = Schema(
    {
            nombre: {
              type: String,
              required: true,
            },
            email: {
              type: String,
              required: true,
            },
            passwordHash: {
              type: String,
              required: true,
            },
            telefono: {
              type: String,
              required: true,
            },
            esAdmin: {
                type: Boolean,
                default: false,
            },
            direccion: {
                type: String,
                default: "",
            }
        
    }
)