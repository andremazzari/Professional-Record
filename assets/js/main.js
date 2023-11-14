//Objeto com a lista de profissionais
var profissionais = new Profissionais();



function atualiza_tabela() {
    //Obtem valores do formulario
    let dados_profissional = {
        nome: document.getElementById('form-nome').value,
        sobrenome: document.getElementById('form-sobrenome').value,
        idade: document.getElementById('form-idade').value,
        linguagem: document.getElementById('form-linguagem').value,
        experiencia: document.getElementById('form-experiencia').value
    }

    //Inclui novo profissional
    profissionais.addProfissional(dados_profissional);

    //profissionais.constroi_lista();
}

function editar_profissional(id_profissional) {
    profissionais.linha_editar(id_profissional);
}

function excluir_profissional(id_profissional) {
    //remove profissional da lista
    profissionais.deleteProfissional(id_profissional);
    //remove linha da tabela
    let row = document.getElementById(`profissional-${id_profissional}`);
    row.parentNode.removeChild(row);
}

function sair_da_edicao(id_profissional) {
    profissionais.sair_da_edicao(id_profissional);
}

function confirmar_edicao(id_profissional) {
    //Obtem valores de atualização
    let dados_atualizados = {
        nome: document.getElementById('atualizar-nome').value,
        sobrenome: document.getElementById('atualizar-sobrenome').value,
        idade: document.getElementById('atualizar-idade').value,
        linguagem: document.getElementById('atualizar-linguagem').value,
        experiencia: document.getElementById('atualizar-experiencia').value,
        id: id_profissional
    }

    profissionais.confirmar_edicao(dados_atualizados, id_profissional);
}

function limpar_formulario() {
    document.getElementById('form-nome').value = '';
    document.getElementById('form-sobrenome').value = '';
    document.getElementById('form-idade').value = '';
    document.getElementById('form-linguagem').value = '';
    document.getElementById('form-experiencia').value = '';
}