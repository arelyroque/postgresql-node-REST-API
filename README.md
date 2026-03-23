# 🚀 REST API - Users CRUD con Node.js, Express y PostgreSQL

## 📌 Descripción del Proyecto

Este proyecto es una **API RESTful** desarrollada con **Node.js y Express**, conectada a una base de datos **PostgreSQL**, que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una entidad `users`.

El objetivo de este proyecto es servir como base estructurada para el desarrollo de aplicaciones backend escalables, siguiendo buenas prácticas de organización de código y conexión a base de datos.

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular por capas:

```bash
backend
│
├── src
│   ├── database
│   │   └── db.js              # Conexión a PostgreSQL
│   │
│   ├── controllers
│   │   └── users.controllers.js   # Lógica de negocio
│   │
│   ├── routes
│   │   └── users.routes.js        # Definición de rutas
│   │
│   ├── config.js             # Configuración general
│   └── index.js              # Punto de entrada del servidor
│
├── .env                      # Variables de entorno
├── db.sql                    # Script de base de datos
├── package.json
└── .gitignore
```

### 🔎 Explicación de la arquitectura

- **Routes** → Define los endpoints (URLs)
- **Controllers** → Contienen la lógica de negocio (qué hace cada endpoint)
- **Database** → Maneja la conexión a PostgreSQL
- **Config** → Centraliza configuraciones reutilizables
- **index.js** → Inicializa el servidor Express

---

## 🧰 Tecnologías Utilizadas

- Node.js → Entorno de ejecución backend  
- Express.js → Framework para crear la API  
- PostgreSQL → Base de datos relacional  
- pg (node-postgres) → Cliente para conectarse a PostgreSQL  
- morgan → Middleware para logs HTTP  
- dotenv → Manejo de variables de entorno  

---

## 📦 Dependencias Principales

```json
"dependencies": {
  "express": "^5.2.1",
  "morgan": "^1.10.1",
  "pg": "^8.20.0"
}
```

### 🔧 ¿Para qué sirve cada una?

- **express** → Crear rutas y manejar peticiones HTTP  
- **pg** → Conectarse y ejecutar consultas en PostgreSQL  
- **morgan** → Mostrar logs de las peticiones HTTP  
- **dotenv** → Leer variables del archivo `.env`  

---

## ⚙️ Instalación del Proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <nombre-del-proyecto>
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

👉 Esto descarga todas las librerías necesarias definidas en `package.json`.

---

### 3️⃣ Configurar variables de entorno

Crear el archivo `.env` en la raíz del proyecto:

```env
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=tu_base_de_datos
```

👉 Estas variables permiten conectar la API con PostgreSQL.

---

### 4️⃣ Crear la base de datos

Ejecuta el archivo `db.sql` en PostgreSQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   
);
```

---

## ▶️ Ejecución del Proyecto

### 🔹 Modo desarrollo (recomendado)

```bash
npm run dev
```

👉 Ejecuta el servidor con recarga automática.

---

### 🔹 Modo normal

```bash
npm start
```

👉 Inicia el servidor sin recarga automática.

---

## 🌐 URL Base

```
http://localhost:4000/users
```

---

## 🔗 Endpoints disponibles

| Método | Endpoint        | Descripción               |
|--------|---------------|---------------------------|
| GET    | /users         | Obtener todos los usuarios |
| GET    | /users/:id     | Obtener usuario por ID    |
| POST   | /users         | Crear usuario             |
| PUT    | /users/:id     | Actualizar usuario        |
| DELETE | /users/:id     | Eliminar usuario          |

---

## 🧪 Ejemplo de Request (POST)

```json
{
  "name": "Juan",
  "email": "juan@example.com"
}
```

---

## ⚠️ Posibles errores comunes

### ❌ Error: password authentication failed
👉 Revisar usuario y contraseña en `.env`

### ❌ Error: ECONNREFUSED
👉 PostgreSQL no está activo

---

## 🛠️ Recomendaciones

- Usar Postman o Thunder Client para probar endpoints  
- Verificar que PostgreSQL esté corriendo  
- Validar credenciales del `.env` si hay errores  

---

## 📌 Futuras mejoras

- Autenticación con JWT  
- Validaciones con middleware  
- Dockerización  
- Documentación con Swagger  
- Manejo de errores centralizado  

---

## 👩‍💻 Autor

Desarrollado por **Arely Roque** 🚀  