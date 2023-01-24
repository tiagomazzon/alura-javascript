
let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getLivrosAPI()

async function getLivrosAPI() {

    const res = await fetch(endpointAPI);

    livros = await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);
    
    exibirLivrosNaTela(livrosComDesconto);
}

