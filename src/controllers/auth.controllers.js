import { pool } from '../db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// 🔐 Registrar usuario
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const { rows } = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, hashedPassword]
        )

        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario" })
    }
}

// 🔑 Login
export const login = async (req, res) => {
    try {
        console.log("🔥 LOGIN EJECUTADO")

        const { email, password } = req.body

        const { rows } = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        console.log("👤 USER:", rows[0])

        if (rows.length === 0) {
            return res.status(401).json({ message: "Usuario no encontrado" })
        }

        const user = rows[0]

        const validPassword = await bcrypt.compare(password, user.password)

        console.log("🔑 PASSWORD OK?:", validPassword)

        if (!validPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" })
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        console.log("🎟 TOKEN:", token)

        res.json({ token })

    } catch (error) {
        console.log("❌ ERROR LOGIN:", error)
        res.status(500).json({ message: "Error en login" })
    }
}