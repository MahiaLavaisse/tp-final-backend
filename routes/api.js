const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  getMe 
} = require('../controllers/authController');
const { 
  validateRegister, 
  validateLogin 
} = require('../middlewares/validation');
const { protect } = require('../middlewares/authMiddleware');

// Rutas públicas
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

// Rutas protegidas
router.get('/me', protect, getMe);

module.exports = router;