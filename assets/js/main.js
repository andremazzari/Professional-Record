//Objeto com a lista de profissionais
var profissionais = new Profissionais();



function atualiza_tabela() {
    //Obtem valores do formulario
    var dados_profissional = {
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

function excluir_profissional(id_profissional) {
    //remove profissional da lista
    profissionais.deleteProfissional(id_profissional);
    //remove linha da tabela
    let row = document.getElementById(`profissional-${id_profissional}`);
    row.parentNode.removeChild(row);
}