// //Passo 1

// const botoes = document.querySelectorAll('.botoes')

// botoes.forEach(botao, indice) => {
//     //Passo 3
//     botao.addEventListener("click", () => {
        
//         const botaoSelecionado = document.querySelector(".botao.selecionado");
        
//         botaoSelecionado.classList.remove("selecionado");
        
//         //Passo 2
        
//         botao.classList.add("selecionado");
//         console.log(botao);
//     });
// });

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersonagem();

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}