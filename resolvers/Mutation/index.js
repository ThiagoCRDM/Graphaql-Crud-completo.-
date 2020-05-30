const usuario = require('./Usuarios');
const perfil = require('./Perfil');

module.exports = {
    ...usuario,
    ...perfil,
}