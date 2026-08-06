const listadeTarefas = [];
const nomeDaTarefa = document.querySelector("#EntradaTarefa");
const CategoriaDaTarefa = document.querySelector("#categoriaTarefa");
const Quantidade = document.querySelector("#quantidadeTarefa");
const botao = document.querySelector("#BotaoLançarTarefas");
const resultado = document.querySelector("#listaTarefas");

botao.addEventListener('click', () => {
    const id = Date.now();
    const NovaTarefa = new item(id, nomeDaTarefa.value, CategoriaDaTarefa.value, Quantidade.value, false);
    listadeTarefas.push(NovaTarefa);
    resultado.textContent = NovaTarefa.nomeDaTarefa;

});

class item {

    constructor (id, nomeDaTarefa, CategoriaDaTarefa, Quantidade, status) {
        this.nomeDaTarefa = nomeDaTarefa;
        this.CategoriaDaTarefa = CategoriaDaTarefa;
        this.Quantidade = Quantidade;
        this.status = status;
    }
}
