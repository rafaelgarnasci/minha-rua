const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");


const BASE_URL = 'https://brasilapi.com.br/api'

inputCep.onkeyup = async (evento) => {
    // Verificando se o cep cumpriu os 8 digitos
    if(inputCep.value.length < 8) {
        return;
    }
    // Fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
        // headers: {
        //     authorization: 'key'     COMO USAR UMA API PRIVADA
        // }
    });

    // extraindo o json da resposta
    const conteudoResposta = await resposta.json();

    // distribuindo os dados da resposta nos inputs do html
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;

    console.log(conteudoResposta)
    alert("Cep completo " + inputCep.value);
}
