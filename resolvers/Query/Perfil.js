const {perfil} = require('../../data/db');

module.exports = {
    perfis(){
        return perfil;
    },

    perfil(_, {id}){
        const slcs = perfil.filter(p => p.id === id);

        return slcs ? slcs[0] : null;
    }
}