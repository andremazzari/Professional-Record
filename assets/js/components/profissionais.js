class Profissionais {
    constructor() {
        this.num_profissionais = 0;
        this.lista_profissioais = [];
        this.max_id = 0;
        this.map_index_id = [];
    }

    getProfissionais() {
        return this.lista_profissioais
    }

    addProfissional(dados_profissional) {
        //adiciona um id para o profissional
        dados_profissional.id = ++this.max_id;
        //adiciona o profissional na lista
        this.lista_profissioais.push(dados_profissional)
        this.map_index_id.push(dados_profissional.id)

        //Cria nova linha para a tabela
        let row = document.getElementById('tabela-profissionais').insertRow(-1);

        let sufixo_linha;
        if (this.lista_profissioais.length % 2 == 0) {
            sufixo_linha = "par";
        } else {
            sufixo_linha = "impar";
        }
        
        row.setAttribute('class', 'linha-profissional linha-profissional-' + sufixo_linha);
        row.setAttribute('id', 'profissional-' + (this.max_id).toString());

        //nome
        row.insertCell(0).innerText = dados_profissional.nome;
        //sobrenome
        row.insertCell(1).innerText = dados_profissional.sobrenome;
        //idade
        row.insertCell(2).innerText = dados_profissional.idade;
        //linguagem
        row.insertCell(3).innerText = dados_profissional.linguagem;
        //experiencia
        row.insertCell(4).innerText = dados_profissional.experiencia;
        //excluir
        row.insertCell(5).innerHTML = `<div class="botao-excluir" onclick="excluir_profissional(${this.max_id})"><span class="simbolo-excluir material-symbols-outlined">close</span></div>`;
    }

    deleteProfissional(id) {
        let index = this.map_index_id.indexOf(id);
        this.lista_profissioais.splice(index, 1);
        this.map_index_id.splice(index,1);
        this.atualizaCores();
    }

    atualizaCores() {
        let sufixo_linha;
        for (var index in this.map_index_id) {
            if (index % 2 == 0) {
                sufixo_linha = "par";
            } else {
                sufixo_linha = "impar";
            }

            let row = document.getElementById('profissional-' + (this.map_index_id[index]).toString())
            row.setAttribute('class', 'linha-profissional linha-profissional-' + sufixo_linha);
        }
    }

    constroi_lista() {
        var html_string = "";
        var primeiro = true;

        
        
        for (var index in this.lista_profissioais){
            if (primeiro == true) {
                html_string += this.lista_profissioais[index];
                primeiro = false
            } else {
                html_string += this.lista_profissioais[index] + "</br>";
            }
        }
        console.log(html_string)

        var row = document.getElementById('lista-profissionais').insertRow(-1);

        row.insertCell(0).innerText
        
    }
}