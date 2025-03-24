// Selecionando a FORM e UL ("form" e "lista")
const form = document.querySelector("form");
const lista = document.getElementById("lista")


form.addEventListener("submit", function(event){
    // previne o recarregamento da página
    event.preventDefault()

    // seleciona o nome e valor do input(o que você escreve)
    const nomeInput = document.getElementById("nome");
    const valorNome = nomeInput.value;
    // criando o elemento de LI e adicionando a classe "Button" nela
    const novoItem = document.createElement("li");
    novoItem.classList.add("button")
// Criando um elemento Input Checkbox adidcionado o Tipo e Classlist
    const novocheckBox = document.createElement("input");
    novocheckBox.type = "checkbox"
    novocheckBox.classList.add("checkbox")

    // adicionando o elemento "span" e dando a ele o texto que você escreveu
    const novoNomeitem = document.createElement("span");
    novoNomeitem.textContent = valorNome;
    // adicionando o checkbox e o span no li
    novoItem.append(novocheckBox,novoNomeitem)

    // adicionando o li no ul
    lista.append(novoItem)
    // deixando o  input vazio para o usuario escrever!
    valorNome.value = "";
});