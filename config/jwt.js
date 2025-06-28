const jwt = require('jsonwebtoken');

// CORRECCIÓN: Elimina los exports individuales y usa solo module.exports

// Generar token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
};

// Verificar token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// Exporta como objeto
module.exports = { generateToken, verifyToken };