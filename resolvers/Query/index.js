const Perfil = require('./Perfil');
const Usuario = require('./Usuario');

module.exports = {
    ...Perfil,
    ...Usuario
}