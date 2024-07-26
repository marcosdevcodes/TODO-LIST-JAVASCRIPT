

// Carregamento da Página:
// Quando a página é carregada, o navegador lê o código JavaScript.
// O código começa selecionando os elementos HTML que serão manipulados
// Esses elementos são selecionados para que possamos adicionar eventos e 
// manipular seus conteúdos.
// Aqui esta 3 variaveis constante que seleciona os elementos do HTML
const button = document.querySelector(".button_add");
const input = document.querySelector(".input_task");
const listUl = document.querySelector(".list_ul");

let list = [];  //Inicializa um array vazio chamado list para armazenar as tarefas.


////====================== PRIMEIRA FUNÇÃO QUE VAI PEGAR O VALOR QUE FOI DIGITADO NO INPUT ======================

// Um evento de clique é adicionado ao botão "Add". Quando o botão é 
// clicado, a função pegarValorInput é chamada.
function pegarValorInput(){// Quando o botão é clicado, a função pegarValorInput é executada.
    // O valor do campo de entrada (input.value) é adicionado ao array list como um objeto com 
    // duas propriedades: tarefa (o texto da tarefa) e concluida (inicialmente false).
    list.push({
        tarefa: input.value, // tarefa e concluida são duas propriedade de um objeto
        concluida: false
    });

    input.value = "";   //O campo de entrada é limpo (input.value = "").
    mostrarTarefas();   //A função mostrarTarefas é chamada para atualizar a lista exibida.
}


//====================== SEGUNDA FUNÇÃO QUE VAI AMOSTRAR AS TAREFA NA TELA ==========================

// A função mostrarTarefas percorre cada item da lista e constrói o HTML para exibir as tarefas.
function mostrarTarefas(){
    let novaLi = "";
    // Os parâmetros item e index dentro do método forEach são usados para acessar o valor de 
    // cada elemento do array e o índice desse elemento, respectivamente. Vamos entender suas
    //  funcionalidades específicas no contexto do código:


    // index:Representa o índice do elemento atual no array.
    // No contexto do código, index é usado para identificar a posição da tarefa no array, o que é
    // útil para manipulações como alternar o estado de conclusão e remover tarefas.
    list.forEach( (item, index) => {  
        // item:Representa o elemento atual do array que está sendo processado na iteração.
        // No contexto do código, item é um objeto que representa uma tarefa, contendo duas propriedades: 
        // tarefa (o texto da tarefa) e concluida (um booleano indicando se a tarefa foi concluída).
        

        //list.forEach((item, index) => {...}): Para cada item da lista, um novo elemento <li> é criado.
        //Se a tarefa estiver concluída (item.concluida), a classe done é adicionada ao <li>, aplicando o estilo de tarefa concluída.
        //Os ícones de check e lixeira são adicionados com eventos onclick que chamam as funções completed e reset, respectivamente, passando o índice da tarefa.

        //${item.tarefa}: Insere o texto da tarefa dentro de um elemento <p>
        //${item.concluida && "done"}: Adiciona a classe done ao <li> se item.concluida for true, aplicando estilos de tarefa concluída.
        novaLi = novaLi + `
            <li class="list_li ${item.concluida && "done"}">    
                <i class="fa-solid fa-check icon" onclick="completed(${index})"></i>
                
                <p>${item.tarefa}</p>

                <i class="fa-solid fa-trash icon" onclick="reset(${index})"></i>
            </li>
        `;
    });
    listUl.innerHTML = novaLi;  //O HTML gerado é inserido no listUl (a <ul> da lista de tarefas).

    localStorage.setItem('listItem', JSON.stringify(list)); //A lista é salva no localStorage para persistência.
}

//Quando o ícone de check é clicado, a função completed é chamada com o índice da tarefa.
function completed(index){
    //O estado concluida da tarefa é alternado (se estava false, vira true; se estava true, vira false).
    list[index].concluida = !list[index].concluida;
    mostrarTarefas();   //A função mostrarTarefas é chamada para atualizar a exibição da lista.
}


//Quando o ícone de lixeira é clicado, a função reset é chamada com o índice da tarefa.
function reset(index){
    list.splice(index, 1);  //A tarefa é removida do array list usando splice.
    mostrarTarefas();   //A função mostrarTarefas é chamada para atualizar a exibição da lista.
}


//Quando a página carrega, a função recarregarTarefas é chamada.
function recarregarTarefas(){
    //Verifica se há tarefas salvas no localStorage. Se houver, elas são carregadas para o array 
    const tarefaLocalStorage = localStorage.getItem('listItem');
    //list e a função mostrarTarefas é chamada para exibi-las.
    if(tarefaLocalStorage){
        list = JSON.parse(tarefaLocalStorage);
    }
    mostrarTarefas();

}
recarregarTarefas();
//Um evento de clique é adicionado ao botão "Add". Quando o botão é clicado, a função pegarValorInput é chamada.
button.addEventListener("click", pegarValorInput);