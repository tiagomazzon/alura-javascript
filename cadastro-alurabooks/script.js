async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = "";
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }
        const cidade = document.querySelector("#cidade");
        const logradouro = document.querySelector("#endereco");
        const estado = document.querySelector("#estado");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

var cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));