const {Int32} = require('bson');
const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    telefono: {type: Int32, required: true, unique: true},
    clave: {type: String, required: true},
    fechaRegistro: {type: Date, default: Date.now}
});

const Usuario = model('Usuario', usuarioSchema);
module.exports = Usuario;