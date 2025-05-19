const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db'); // 👈 Aquí se importa la conexión

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ PROBAR CONEXIÓN A LA BASE DE DATOS
db.query('SELECT 1')
  .then(() => console.log('✅ Conexión a la base de datos exitosa'))
  .catch(err => console.error('❌ Error de conexión a la base de datos:', err));

// 🔌 Rutas
app.use('/api/animales', require('./routes/animales'));
app.use('/api/plantas', require('./routes/plantas'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/reportes', require('./routes/reportes'));
app.use('/api/tratamientos', require('./routes/tratamientos'));

// 🔊 Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
