require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();

// 1. Configuración mejorada de CORS para producción y desarrollo
const allowedOrigins = [
  'http://localhost:5173',
  'https://tp-final-frontend.vercel.app'  
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como apps móviles o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'La política CORS para este sitio no permite acceso desde el origen especificado.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Manejar preflight requests
app.options('*', cors());

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api', apiRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Manejar errores de CORS
  if (err.message.includes('CORS')) {
    return res.status(403).json({ error: err.message });
  }
  
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Configuración del puerto para Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`🚀 Servidor backend en puerto ${PORT}`);
  console.log(`✅ Entornos permitidos: ${allowedOrigins.join(', ')}`);
  console.log(`=================================`);
});