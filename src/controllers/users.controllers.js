import {pool} from '../db.js'


//!obtener todos los usuarios
export const getUsers = async (req, res) => {
    const {rows} = await pool.query("SELECT * FROM users");
    res.json(rows);
}

//!obtener un usuario por su id
export const getUserId = async (req, res)  => {
    const { id } = req.params; // se obtiene el id del usuario desde los parámetros de la ruta, esto se hace con req.params
    const {rows} = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    // si no encuentra el usuario mostrar un mensaje de error 404 usuario no encontrado
    if (rows.length === 0) {        
        return res.status(404).json({message:"User not found"});
        }
        
    res.json(rows);
    }

    //!crear un nuevo usuario
  export const createUser =  async (req, res) => {
    try {
        const data = req.body;
        const {rows} = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [data.name, data.email]
    );
        return res.json(rows[0]);
        
    } catch (error) {
        console.log(error);

        if (error?.code === "23505") {
            return res.status(409).json({message:"Emil already exist"})
        }
        return res.status(500).json({message: "Internal server error"});   
    }
};

    //!eliminar un usuario
export const deleteUser= async (req, res) => {
    const { id } = req.params;
    const {rows, rowCount} = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    console.log(rows);

    if (rowCount === 0) {
        return res.status(404).json({message: "User not found"});
    }

    return res.json('Usuario con id : '+ [id] + ', eliminado exitosamente');

}

    //!actualizar un usuario existente
 export const updateUser= async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const {rows} = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [data.name, data.email, id]
    );

    return res.json(rows[0]);
}