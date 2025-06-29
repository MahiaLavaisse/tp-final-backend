# TP Final Backend - API de Autenticación

## 📌 Descripción del Proyecto
API RESTful para gestión de usuarios con autenticación JWT, registro seguro y envío de emails de confirmación. Implementa seguridad con bcrypt, validación de datos y conexión a MongoDB Atlas.

**Características principales:**
- Registro con hash de contraseña bcrypt
- Autenticación con JWT y rutas protegidas
- Envío de emails con Nodemailer
- Validación de datos en endpoints
- Manejo centralizado de errores
- CORS configurado para seguridad

**Endpoints principales:**
- `POST /api/auth/register`: Registro de usuarios
- `POST /api/auth/login`: Autenticación con JWT
- `GET /api/users/me`: Datos de usuario (protegido)

**Despliegue:**  
https://tp-final-backend-i11u.onrender.com

## 🛠️ Librerías Usadas
| Librería | Versión | Propósito |
|----------|---------|-----------|
| Express | 4.18.3 | Framework web |
| Mongoose | 8.3.1 | Conexión con MongoDB |
| Bcrypt | 5.1.1 | Hashing de contraseñas |
| JWT | 9.0.2 | Autenticación |
| Nodemailer | 6.9.13 | Envío de emails |
| CORS | 2.8.5 | Seguridad |
| Dotenv | 16.4.5 | Variables de entorno |

## 💡 Dificultades y Aprendizajes
1. **Seguridad y Autenticación**
   - Implementación de middleware de autenticación JWT
   - Protección de rutas sensibles
   - Manejo seguro de tokens

2. **Persistencia de Datos**
   - Modelado de esquemas con Mongoose
   - Validación de datos antes de guardar
   - Conexión con MongoDB Atlas

3. **Envío de Emails**
   - Configuración de Nodemailer con Gmail
   - Manejo de plantillas HTML para emails
   - Gestión de credenciales seguras

4. **Validación de Entradas**
   - Desarrollo de middlewares de validación
   - Manejo de errores estructurados
   - Respuestas API estandarizadas

5. **Despliegue en Render**
   - Configuración de variables de entorno
   - Gestión de puertos dinámicos
   - Solución de problemas de CORS en producción
