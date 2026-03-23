# 1. Imagen base (Node)
FROM node:20

# 2. Crear carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del proyecto
COPY . .

# 6. Exponer el puerto (tu app usa PORT)
EXPOSE 4000

# 7. Comando para ejecutar la app
CMD ["npm", "run", "dev"]