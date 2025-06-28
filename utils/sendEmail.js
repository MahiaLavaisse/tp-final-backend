const nodemailer = require('nodemailer');

exports.sendWelcomeEmail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Bienvenido a nuestra plataforma',
    html: `
      <h1>¡Hola ${name}!</h1>
      <p>Gracias por registrarte en nuestra aplicación.</p>
      <p>Tu cuenta ha sido creada exitosamente.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};