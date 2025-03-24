// Selecionando a FORM e UL ("form" e "lista")
const form = document.querySelector("form");
const lista = document.getElementById("lista");


form.addEventListener("submit", function(event){
    // previne o recarregamento da página
    event.preventDefault()

    // seleciona o nome e valor do input(o que você escreve)
    const nomeInput = document.getElementById("nome");
    const valorNome = nomeInput.value;
    // criando o elemento de LI e adicionando a classe "Button" nela
    const novoItem = document.createElement("li");
    novoItem.classList.add("cont-lista");
    setTimeout(function(){
    novoItem.style.opacity = "1"
    }, 1);
// Criando um elemento Input Checkbox adicionado o Tipo e Classlist e adicionando o elemento "span" e dando a ele o texto que você escreveu
const novocheckBox = document.createElement("input");
novocheckBox.type = "checkbox"
novocheckBox.classList.add("checkbox");

    const novoNomeitem = document.createElement("span");
    novoNomeitem.textContent = valorNome;
    novoNomeitem.prepend(novocheckBox);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    
    deleteButton.innerHTML = '<img src="./assets/lata de lixo.svg" alt="">';

    
    const iconeFechar = document.createElement("button");
    iconeFechar.classList.add("delete-btn");

    iconeFechar.innerHTML = '<img src="./assets/X de fechar.svg" alt="">';

    const itemDeletado = document.createElement("li");
    itemDeletado.classList.add("cont-lista-alt");
  

  const Error = document.createElement("img");
    Error.src = "./assets/Erro.svg";
    Error.alt = "icone de erro";
    Error.width = 20;
    Error.height = 20;

    const errorText = document.createElement("span")
    errorText.textContent= `O Item ${valorNome} foi removido.`;
    errorText.prepend(Error);


    itemDeletado.append(errorText ,iconeFechar);

    //remove o item ao clicar no icone da lata de lixo
    deleteButton.addEventListener("click", function() {
        novoItem.remove();

        lista.append(itemDeletado);
    

            setTimeout(function(){
                itemDeletado.remove()
            }, 4000);
        
        setTimeout(function(){
            itemDeletado.style.opacity = "1"
            }, 5);

            });
            

    iconeFechar.addEventListener("click", function() {
        itemDeletado.remove();

    });
    // adicionando o checkbox e o span no li
    novoItem.append(novoNomeitem,deleteButton);

    // adicionando o li no ul
    lista.append(novoItem);

    // deixando o  input vazio para o usuario escrever!
    valorNome.value = "";
});