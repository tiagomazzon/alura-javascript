
const exibirValorTotalDosLivrosDisponiveis = (valorTotal) => {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}

const filtrarPorCategoria = (categoria) => livros.filter(livro => livro.categoria == categoria);

const filtrarPorDisponibilidade = () => livros.filter(livro => livro.quantidade > 0);

const filtrarLivros = (evento) => {
    const elementoBtn = document.getElementById(evento.target.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    exibirLivrosNaTela(livrosFiltrados);

    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
};

const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
    // não é necessário passar o evento ou 'e' ao associar o handler no listener
    btn.addEventListener('click', filtrarLivros);
});

