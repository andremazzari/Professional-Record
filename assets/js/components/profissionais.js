class Profissionais {
    constructor() {
        this.num_profissionais = 0;
        this.lista_profissioais = [];
        this.max_id = 0;
        this.map_index_id = [];
        this.linguagens = ['', 'Javascript', 'PHP', 'Java', 'Golang', 'Python', 'C#', 'C++'];
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
        //editar
        row.insertCell(5).innerHTML = `<div class="botao-editar botao-linha" onclick="editar_profissional(${this.max_id})"><span class="simbolo-botao-linha material-symbols-outlined">edit</span></div>`
        //excluir
        row.insertCell(6).innerHTML = `<div class="botao-excluir botao-linha" onclick="excluir_profissional(${this.max_id})"><span class="simbolo-botao-linha material-symbols-outlined">close</span></div>`;
    }

    construir_select(linguagem_selecionada) {
        let html_string = '<select id="atualizar-linguagem" class="input-atualizar">';

        for (let index in this.linguagens) {
            html_string += `\n<option value="${this.linguagens[index]}"`;
            if (this.linguagens[index] == linguagem_selecionada) {
                html_string += ' selected';
            }
            html_string += `>${this.linguagens[index]}</option>`;
        }

        html_string += '\n</select>';

        return html_string;
    }

    linha_editar(id_profissional) {
        let index = this.map_index_id.indexOf(id_profissional);
        let dados_profissional = this.lista_profissioais[index];

        let row = document.getElementById('profissional-' + (id_profissional).toString())

        //nome
        row.cells[0].innerHTML = `<input value="${dados_profissional.nome}" id="atualizar-nome" class="input-atualizar" type="text"/>`;
        //sobrenome
        row.cells[1].innerHTML = `<input value="${dados_profissional.sobrenome}" id="atualizar-sobrenome" class="input-atualizar" type="text"/>`;
        //idade
        row.cells[2].innerHTML = `<input value="${dados_profissional.idade}" id="atualizar-idade" class="input-atualizar" type="number" min="0"/>`;
        //linguagem
        row.cells[3].innerHTML = this.construir_select(dados_profissional.linguagem);
        //experiencia
        row.cells[4].innerHTML = `<input value="${dados_profissional.experiencia}" id="atualizar-experiencia" class="input-atualizar" type="number" min="0"/>`;
        //confirmar edicao
        row.cells[5].innerHTML = `<div class="botao-confirmar-edicao botao-linha" onclick="confirmar_edicao(${id_profissional})"><span class="simbolo-botao-linha material-symbols-outlined">check</span></div>`
        //cancelar edicao
        row.cells[6].innerHTML = `<div class="botao-cancelar-edicao botao-linha" onclick="sair_da_edicao(${id_profissional})"><span class="simbolo-botao-linha material-symbols-outlined">replay</span></div>`;
    }

    sair_da_edicao(id_profissional) {
        let index = this.map_index_id.indexOf(id_profissional);
        let dados_profissional = this.lista_profissioais[index];

        let row = document.getElementById('profissional-' + (id_profissional).toString())

        //nome
        row.cells[0].innerText = dados_profissional.nome;
        //sobrenome
        row.cells[1].innerText = dados_profissional.sobrenome;
        //idade
        row.cells[2].innerText = dados_profissional.idade;
        //linguagem
        row.cells[3].innerText = dados_profissional.linguagem;
        //experiencia
        row.cells[4].innerText = dados_profissional.experiencia;
        //editar
        row.cells[5].innerHTML = `<div class="botao-editar botao-linha" onclick="editar_profissional(${id_profissional})"><span class="simbolo-botao-linha material-symbols-outlined">edit</span></div>`
        //excluir
        row.cells[6].innerHTML = `<div class="botao-excluir botao-linha" onclick="excluir_profissional(${id_profissional})"><span class="simbolo-botao-linha material-symbols-outlined">close</span></div>`;
    }

    confirmar_edicao(dados_atualizados, id_profissional) {
        let index = this.map_index_id.indexOf(id_profissional);
        
        this.lista_profissioais[index] = dados_atualizados;
        sair_da_edicao(id_profissional);
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