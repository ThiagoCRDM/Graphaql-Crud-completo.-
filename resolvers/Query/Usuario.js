const {usuarios} = require('../../data/db');

module.exports = {
    usuarios(){
        return usuarios;
    },

    usuario(_, {id}){
        const selecionados = usuarios
        .filter(u => u.id === id);
        return selecionados ? selecionados[0] : null;
    },
}