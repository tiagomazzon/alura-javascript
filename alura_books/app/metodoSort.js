
const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', () => {

    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    
    exibirLivrosNaTela(livrosOrdenados);
})