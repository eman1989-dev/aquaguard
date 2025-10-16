const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {verify} = require('../security/auth');

router.get('/', verify, usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuarioId);
router.post('/', usuarioController.createUsuario);
router.post('/login', usuarioController.login);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
