const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
// Operador lógico que retorna com dados salvos, ou string vazia, 
// utilizando localStorage.getItem, modificando o valor de `string` com JSON.parse()
const items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((elemento) => {
    criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    const existe = items.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    };

    if(existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        items[items.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    }
    else{
        itemAtual.id = items[items.length - 1] ? (items[items.length - 1]).id + 1 : 0;
        criaElemento(itemAtual);
        items.push(itemAtual);
    }
    localStorage.setItem("items", JSON.stringify(items));

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    });

    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();

    //remover item do Array
    items.splice(items.findIndex(elemento => elemento.id === id) ,1);

    //escrever no localStorage
    localStorage.setItem("items", JSON.stringify(items));
}