# NOTAS DEL PROYECTO

- Tener en cuenta si cirre el node js, habilitar ejecucion de scripts en win 11
- Ejecutamos en la consola en modo administrador : Set-ExcecutionPolicy Unrestricted
- Otra opción es : Set-ExcecutionPolicy RemoteSigned -Scope CurrentUser

======================================================================

- Usaremos 2 arquitecturas : Orientada a servicios (API REST) para el backend
- Internamente usaremos MVC (tenga en cuenta que las vistas se reemplazan por rutas)
    - Creamos las carpetas para el MVC (CONTROLERS, MODEL, ROUTES)
    - Instalamos los paquetes base : npm i nodemon express cors mongoose bcryptjs jsonwebtoken multer

    [JSON web token](https://www.npmjs.com/package/jsonwebtoken)

# DOCUMENTACIÓN DE MONGO
- [Mongo DB](https://www.mongodb.com/docs/manual/reference/method/)
- [Mongoose](https://mongoosejs.com/docs/guide.html#methods) -> (libreria que interactua entre node js y mongodb)