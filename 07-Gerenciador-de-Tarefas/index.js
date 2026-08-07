const listadeTarefas = [];
const nomeDaTarefa = document.querySelector("#EntradaTarefa");
const CategoriaDaTarefa = document.querySelector("#categoriaTarefa");
const Quantidade = document.querySelector("#quantidadeTarefa");
const botao = document.querySelector("#BotaoLançarTarefas");
const resultado = document.querySelector("#listaTarefas");
const ul = document.querySelector("#Pailista");

function LimparCampos() {
        nomeDaTarefa.value = "";
        CategoriaDaTarefa.value = "";
        Quantidade.value = "";
    }

botao.addEventListener('click', () => {
    const id = Date.now();
    const paragrafo = document.createElement("p");
    paragrafo.appendChild(resultado);
    document.body.appendChild(paragrafo);
    const NovaTarefa = new item(id, nomeDaTarefa.value, CategoriaDaTarefa.value, Quantidade.value, false);
    listadeTarefas.push(NovaTarefa);

    function renderizar() {
        ul.innerHTML = "";
        listadeTarefas.forEach((listadeTarefas) => {
        resultado.textContent = listadeTarefas;
    });
    }

    resultado.textContent = "As suas tarefas adicionadas foram: " + NovaTarefa.nomeDaTarefa;
    resultado.insertAdjacentHTML('afterend', `<p>${NovaTarefa.nomeDaTarefa}</p>`);
    
    return LimparCampos();
    return renderizar();
});

class item {

    constructor (id, nomeDaTarefa, CategoriaDaTarefa, Quantidade, status) {
        this.nomeDaTarefa = nomeDaTarefa;
        this.CategoriaDaTarefa = CategoriaDaTarefa;
        this.Quantidade = Quantidade;
        this.status = status;
    }
}
