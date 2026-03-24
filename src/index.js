import 'dotenv/config'
import express from 'express'; //otra opción si no se usa impot: const express = require('express');
//! para usar import, se debe agregar "type": "module" en el package.json
//! tambien se puede utilizar require con CommonJS, se debe agregar "type": "commonjs" en el package.json
// es preferible usar import con Modules, ya que es la forma moderna de trabajar en Node.js
import { PORT } from './config.js'; //exportar la variable PORT desde config.js que contiene el número de puerto en el que se ejecutará el servidor
import userRoutes from "./routes/users.routes.js"; //importar las rutas de usuarios desde el archivo users.routes.js
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

const app = express(); //crear una instancia de express

app.use(morgan('dev'));
app.use(express.json()); 
app.use(userRoutes) //usar las rutas de usuarios en la aplicación express, esto permite que las rutas definidas en users.routes.js estén disponibles en el servidor
app.use(authRoutes)

app.listen(PORT) //iniciar el servidor en el puerto especificado en la variable PORT
console.log(`Servidor en el puerto ${PORT}`); // imprimir un mensaje en la consola indicando que el servidor se ha iniciado correctamente

