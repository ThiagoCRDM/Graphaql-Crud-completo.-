const {perfil, proximoId} = require('../../data/db');


function indicePerfil(filtro) {
    if(!filtro) return -1;

    const {id, nome} = filtro;

    if(id){
        return perfil.findIndex( f => f.id === id);
    }else{
        return perfil.findIndex( f => f.nome === nome);
    }
    return -1;
    
}


module.exports = {

    novoPerfil(_, {dados}){

        const perfilExistente = perfil
        .some( p => p.nome === dados.nome);

        if(perfilExistente){
            throw new Error('Perfil já cadastrado');
        }
        
        const novoPerfil = {
            id: proximoId(),
            ...dados
        }

        perfil.push(novoPerfil);

        return novoPerfil;
    },

    excluirPerfil(_, {filtro}){
        const i = indicePerfil(filtro);

        if( i < 0 ) return null;

        const excluido = perfil.splice(i, 1);

        return excluido ? excluido[0] : null;
    },

    alterarPerfil(_, {filtro, dados}){
        
        const i = indicePerfil(filtro);

        if(i < 0) return null;

        const pf = {
            ...perfil[i],
            ...dados
        }

        perfil.splice(i, 1, pf);

        return pf;
    }


}