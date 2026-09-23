// procura o elemntO que possui o id "item"
let item = document.getElementById("item");

// procura o elemento que possui o id "lista"
let lista = document.getElementById("lista");

// procura o elemento que possui o id "busca"
let busca = document.getElementById("busca");

// procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar");

//cria uma matriz vazia para guardar os itens // é a casinha
let itens = [];

// quando clicar no botão adicionar, executa a função adicionar
adicionar.addEventListener("click", BtnAdicionar);

// quando o usuário digitar no campo busca, executa a função buscar()
busca.addEventListener("keyup", buscar);

function BtnAdicionar(){
    // adicionar o valor digitado no array // pega a galinha e leva pra casinha
    itens.push(item.value);

    // cria uma nova tag <li> // cria uma etiqueta vazia
    let li = document.createElement("li");

    // cria um texto com o valor digitado // prga o nome "galinha" do usuário
    let texto = document.createTextNode(item.value);

    // coloca o texto dentro da tag <li> // coloca o nome "galinha" na etiqueta
    li.appendChild(texto);

    // coloca o <li> dentro da lista <ul> // leva a galinha até o curral com a etiqueta
    lista.appendChild(li);

    // LIMPA O INPUT // limpa o caminho para a próxima galinha
    item.value = ""; 

}


// Faz o Enter funcionar no teclado
item.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        BtnAdicionar();
    }
});


function buscar(){

    // pega o valor digitado e converte para maiúsculas // a denise falou "boi"
    let nome = busca.value.toLowerCase();

    // busca todas as tags <li> da página // vai até o curral
    let itensLista = document.getElementsByTagName("li");

    // percorre todos os itens da lista // percorre o curral
    for(let i = 0; i < itensLista.length; i++){

        // pega o texto do item atual e converte para maiúsculas // nesse caso, as etiquetas ficarão maiúsculas no momento em que o elvis percorrer cada animal
        let texto = itensLista[i].textContent.toLocaleLowerCase();
        if(texto.includes(nome)){
            itensLista[i].style.display = "block";
        }
        else{
            itensLista[i].style.display = "none";
        }

    }
}