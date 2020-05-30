
let id = 1.
 function proximoId() {
     return id++;
 }

const perfil = [

    {id: 1, nome: 'comum',},
    {id: 2, nome: 'administrador',}
]


const usuarios = [{

    id: proximoId(),
    nome: "Geromim",
    email: "geromin_piroca_de_foice@gmail.com",
    idade: 13,
    perfil_id: 1,
    status: 'INATIVO'

},{
    id: proximoId(),
    nome: "Tião",
    email: "tiao_patrao@gmail.com",
    idade: 42,
    perfil_id: 1,
    status: 'BLOQUEADO'
},{
    id: proximoId(),
    nome: "Marcio",
    email: "marcin_preto_vei@gmail.com",
    idade: 16,
    perfil_id:2,
    status: 'ATIVO'
}];

module.exports = {usuarios, perfil, proximoId}