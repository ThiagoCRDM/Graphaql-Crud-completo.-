const {perfil} = require('../data/db');

module.exports = {

    perfil(usuario){
        const slcs = perfil.filter(p => p.id === usuario.perfil_id);
        return slcs ? slcs[0] : null;
    }
}