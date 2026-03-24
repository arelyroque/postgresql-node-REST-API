import {Router} from 'express' 
import {getUsers, getUserId, createUser, deleteUser, updateUser} from '../controllers/users.controllers.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const router = Router();

//! Ruta para obtener todos los usuarios
router.get('/users',verifyToken, getUsers);
// es necesario hacer el llamado en el index.js para que se pueda usar esta ruta, se hace con import usersRoutes from "./routes/users.routes.js"; y luego se usa con app.use(usersRoutes);
//! ruta para obtener un usuario por su id
router.get("/users/:id", verifyToken, getUserId); 

//! Ruta para crear un nuevo usuario
router.post('/users',verifyToken, createUser,);


//! Ruta para eliminar un usuario
router.delete('/users/:id',verifyToken, deleteUser);

//! Ruta para actualizar un usuario existente
router.put('/users/:id',verifyToken, updateUser);

export default router;