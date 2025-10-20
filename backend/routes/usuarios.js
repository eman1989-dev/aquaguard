// backend/routes/usuarios.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");
const { verify, generarToken } = require("../security/auth");

// ✅ Registrar usuario
router.post("/", async (req, res) => {
  try {
    const { nombre, apellido1, apellido2, correo, telefono, clave } = req.body;

    const existe = await Usuario.findOne({ correo });
    if (existe) return res.status(400).json({ error: "El correo ya está registrado" });

    const hashedPass = await bcrypt.hash(clave, 10);
    const nuevoUsuario = new Usuario({
      nombre,
      apellido1,
      apellido2,
      correo,
      telefono,
      clave: hashedPass,
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

// 🔐 Iniciar sesión
router.post("/login", async (req, res) => {
  try {
    const { correo, clave } = req.body;
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    const passwordValida = await bcrypt.compare(clave, usuario.clave);
    if (!passwordValida)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = generarToken(usuario);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// 🔒 Ruta protegida (ejemplo)
router.get("/perfil", verify, async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuarioId).select("-clave");
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil" });
  }
});

module.exports = router;
