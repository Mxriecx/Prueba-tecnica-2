🎰 Proyecto: API de Ruleta – Node.js + Express + MongoDB

Este proyecto implementa una API REST de una ruleta, permitiendo:

✔️ Crear ruletas
✔️ Abrir ruletas
✔️ Realizar apuestas (número o color)
✔️ Cerrar la ruleta y calcular ganadores
✔️ Listar ruletas creadas

Incluye también pruebas automatizadas con Jest + Supertest, sin necesidad de conectarse a una base de datos real (mediante mocks).

🚀 Tecnologías utilizadas

Node.js

Express

MongoDB con Mongoose

Jest → pruebas unitarias / integración

Supertest → pruebas HTTP

Babel → soporte para ESModules en Jest

📦 Instalación

Clonar el repositorio:

git clone https://github.com/tu-repo/ruleta-backend.git
cd ruleta-backend


Instalar dependencias:

npm install


Crear archivo .env (si aplicas DB):

MONGO_URI=mongodb://localhost:27017/ruleta
PORT=3000


Ejecutar el servidor:

npm start

🎯 Endpoints principales
🟡 1. Crear ruleta

POST /ruletas

Crea una nueva ruleta con estado cerrada.

Respuesta:

{
  "mensaje": "Ruleta creada",
  "ruletaId": "64b3f2..."
}

🟢 2. Abrir ruleta

PUT /ruletas/:id/abrir

Permite comenzar a recibir apuestas.

Respuesta:

{
  "mensaje": "Ruleta abierta correctamente"
}

🔵 3. Apostar

POST /ruletas/:ruletaId/apostar

Puedes apostar a:

tipo: "numero" → debe incluir numero

tipo: "color" → debe incluir "rojo" o "negro"

Ejemplo:

{
  "tipo": "numero",
  "numero": 7,
  "valorApostado": 50
}


Respuesta:

{
  "mensaje": "Apuesta registrada",
  "apuesta": {
    "_id": "10",
    "tipo": "numero",
    "numero": 7,
    "valorApostado": 50
  }
}

🔴 4. Cerrar ruleta

PUT /ruletas/:id/cerrar

Genera un número ganador entre 0–36 y calcula ganancias:

Apuesta por número → multiplica por 5

Apuesta por color → multiplica por 1.8

Ejemplo:

{
  "mensaje": "Ruleta cerrada",
  "numeroGanador": 12,
  "colorGanador": "rojo",
  "resultados": [ ... ]
}

📄 5. Listar ruletas

GET /ruletas

Devuelve todas las ruletas creadas.

🧪 Pruebas automatizadas

El proyecto incluye pruebas con:

✔️ Jest
✔️ Supertest
✔️ Mocks de Mongoose
✔️ Sin conexión a base de datos

Ejecutar tests:

npm run test


Ejemplo de pruebas incluidas:

Crear una ruleta

Abrir ruleta

Apostar en ruleta abierta

Esto garantiza que el funcionamiento base del sistema es correcto.

🧠 Funcionamiento interno
✔️ Estados de la ruleta

cerrada → se puede crear pero no apostar

abierta → permite registrar apuestas

cerrada (final) → se genera número ganador y se calculan ganadores

✔️ Apuestas permitidas

Apuesta por número (0–36)

Apuesta por color (“rojo” / “negro”)

Valor máximo permitido: 10.000