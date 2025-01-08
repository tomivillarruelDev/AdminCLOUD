# Usar una imagen base de Node.js
FROM node:22-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Instalar dependencias locales (opcional, se puede manejar con volúmenes)
# COPY package*.json ./
# RUN npm install

# Exponer el puerto en el que Angular va a correr
EXPOSE 4200

# Comando por defecto para iniciar el contenedor en modo interactivo
CMD ["sh"]
