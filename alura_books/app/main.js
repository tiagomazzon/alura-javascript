
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = []

const getLivros = async () => {
    const res = await fetch(endpointAPI);

    livros =  await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);
            
    exibirLivrosNaTela(livrosComDesconto);
};

getLivros();

