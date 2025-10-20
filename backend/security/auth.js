// backend/security/auth.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

// 🔑 Generar token JWT
function generarToken(usuario) {
  return jwt.sign(
    { id: usuario._id, correo: usuario.correo },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

// 🔍 Verificar token JWT (middleware)
function verify(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuarioId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token inválido o expirado" });
  }
}

module.exports = { verify, generarToken };
