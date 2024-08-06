## crud-nodejs

#Ejecutar con docker
  - En el archivo .env editar DB_HOST='postgres' para acceder al nombre del contenedor de la DB
  - abrir docker
  - ejecutar docker-compose up --build por primera vez para crear contenedor, despues solo con docker-compose up

#Ejecutar sin docker
  - En el archivo .env editar DB_HOST='localhost' para acceder a la DB en local
  - ejecutar npm install para instalar todas las dependencias
  - ejecutar nodemon src\app.js para ejecutar proyecto

