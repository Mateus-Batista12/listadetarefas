var tarefa = document.getElementById("tarefa");
var button = document.getElementById("button");
var lista = document.getElementById("lista");
var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li");

function tarefaLength(){
    return tarefa.value.length // Retorna o tamanho da tarefa digitada pelo usuario
}

function creatElementList(){
    var li = document.createElement("li");  //Criando o li das tarefas

    li.appendChild(document.createTextNode(tarefa.value));  //adicionando a tarefa a li
    ul.appendChild(li); //adicionando a li a lista ul
    tarefa.value = ""; // resetando o texto da tarefa
    
    function crossOut(){  // função que vai mudar a cor do li quando for clicado
        li.classList.toggle('done');
    }

    li.addEventListener('click', crossOut);

    var dBtn = document.createElement("button"); //Criando o botao de deletar a tarefa
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deletListItem);

    function deletListItem(){   // criando a função de deletar a tarefa quando o botao for clicado
        li.classList.add("delete")
    }

}

button.addEventListener("click", addListAfterClick); //chamando a função do botão para quando ele for clicado
tarefa.addEventListener("keypress", addListAfterKeypress ); //chamando a funcção da tecla enter quando ela for clicada

function addListAfterClick(){  //Criando a função que vai chamar a função para adicionar a tarefa quando o botão for clicado
    if(tarefaLength()> 0)
        creatElementList();
}

function addListAfterKeypress(){  //Criando a função que vai chamar a função para adicionar a tarefa quando o enter for clicado
    if(tarefaLength()> 0)
    if(tarefaLength() > 0 && event.which === 13){
        creatElementList();
    }
}