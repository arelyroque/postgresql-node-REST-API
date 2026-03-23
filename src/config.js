//!uso process.env.PORT para que utilice el puerto que asigna la nueve al despegar el proyecto 
//sino recibe un puerto, utilizará el puerto 4000
// sirve para asignar un puerto ya sea local o en la nube
export const PORT = process.env.PORT || 4000;

//lee las variables de entorno desde config
export const DB_USER = process.env.DB_USER
export const DB_HOST = process.env.DB_HOST
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE = process.env.DB_DATABASE
export const DB_PORT = process.env.DB_PORT

