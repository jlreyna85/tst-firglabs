. Crear un Nuevo Directorio
Abre tu terminal y navega a la ubicación donde deseas crear tu proyecto. Luego, crea un nuevo directorio:

bash
mkdir mi-proyecto-api
cd mi-proyecto-api

2. Inicializar el Proyecto

Usa el siguiente comando para inicializar un nuevo proyecto Node.js. Esto creará un archivo package.json que manejará las dependencias y la configuración de tu proyecto.
bash
npm init -y

El -y automáticamente acepta los valores predeterminados para todas las preguntas.

3. Instalar Express

Instala Express, que es un framework para crear aplicaciones web y APIs en Node.js:
bash
npm install express

4. Crear el Archivo Principal

Crea un archivo llamado server.js (o app.js, si prefieres) en el directorio del proyecto:
bash
touch server.js

5. Configurar el Servidor Básico
Abre server.js en tu editor de texto y agrega el siguiente código para configurar un servidor básico:

javascript
------------------------------------------------------------------------
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para poder recibir datos en formato JSON

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
------------------------------------------------------------------------
6. Ejecutar el Servidor
En la terminal, ejecuta el siguiente comando para iniciar tu servidor:

bash
node server.js
Deberías ver un mensaje que dice que el servidor está escuchando en el puerto 3000.

7. Probar el Servidor
Abre tu navegador y navega a http://localhost:3000. Deberías ver "¡Hola, mundo!".

8. Agregar Rutas y Funcionalidades
A partir de aquí, puedes comenzar a agregar más rutas y funcionalidades a tu API. Por ejemplo, puedes crear rutas para manejar tareas, usuarios, etc.

Consejos Adicionales
Usa nodemon: Para facilitar el desarrollo, puedes instalar nodemon, que reinicia automáticamente el servidor cuando haces cambios en el código. Instálalo globalmente con:
bash
npm install -g nodemon

Luego, puedes ejecutar tu servidor con:
bash
nodemon server.js

¡Ahora tienes un proyecto básico en Node.js! Puedes expandirlo según tus necesidades. Si tienes más preguntas o necesitas más detalles, ¡estaré encantado de ayudarte!
