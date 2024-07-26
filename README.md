# Contexto do forEach no Código


### Os parâmetros item e index dentro do método forEach são usados para acessar o valor de cada elemento do array e o índice desse elemento, respectivamente. Vamos entender suas funcionalidades específicas no contexto do código:

## Parâmetros item e index

### item: Representa o elemento atual do array que está sendo processado na iteração.
### No contexto do código, item é um objeto que representa uma tarefa, contendo duas propriedades: tarefa (o texto da tarefa) e  concluida (um booleano indicando se a tarefa foi concluída).

### index:

### Representa o índice do elemento atual no array.
### No contexto do código, index é usado para identificar a posição da tarefa no array, o que é útil para manipulações como alternar o estado de conclusão e remover tarefas.

## Funcionalidade no Código
### Construção do HTML
### Durante cada iteração do forEach, item e index são usados para construir o HTML para cada tarefa na lista:
### item:${item.tarefa}: Insere o texto da tarefa dentro de um elemento <p>.
### ${item.concluida && "done"}: Adiciona a classe done ao <li> se item.concluida for true, aplicando estilos de tarefa concluída.

### index:onclick="completed(${index})": Adiciona um evento onclick ao ícone de check que chama a função completed com o índice da tarefa. Isso permite alternar o estado de conclusão da tarefa específica.
### onclick="reset(${index})": Adiciona um evento onclick ao ícone de lixeira que chama a função reset com o índice da tarefa. Isso permite remover a tarefa específica.

# Exemplo Prático

## Suponha que o array list tenha os seguintes elementos:
``` let list = [
   { tarefa: "Estudar JavaScript", concluida: false },
   { tarefa: "Fazer exercícios", concluida: true }
 ];  
 ```

 ### Quando mostrarTarefas() é chamada, o forEach itera sobre cada elemento do array:
 ## Primeira Iteração (index = 0):
 ```
    item = { tarefa: "Estudar JavaScript", concluida: false }
 ```
 ## Gera o HTML
 ```
    <li class="list_li">
        <i class="fa-solid fa-check icon" onclick="completed(0)"></i>
        <p>Estudar JavaScript</p>
        <i class="fa-solid fa-trash icon" onclick="reset(0)"></i>
    </li>
 ```
 ## Segunda Iteração (index = 1):
 ```
    item = { tarefa: "Fazer exercícios", concluida: true }
 ```
 ## Gera o HTML
 ```
    <li class="list_li done">
        <i class="fa-solid fa-check icon" onclick="completed(1)"></i>
        <p>Fazer exercícios</p>
        <i class="fa-solid fa-trash icon" onclick="reset(1)"></i>
    </li>
 ```

 ### Após a conclusão do forEach, a variável novaLi conterá o HTML para todas as tarefas, que é então inserido no listUl (a <ul> da lista de tarefas).

 ## Resumo

 ### item: Acessa o valor atual da tarefa, permitindo exibir o texto e aplicar estilos condicionais.
 ### index: Acessa o índice da tarefa, permitindo identificar qual tarefa está sendo manipulada ao marcar como concluída ou remover.

 ### Esses parâmetros são essenciais para iterar dinamicamente sobre o array de tarefas e gerar o HTML apropriado, bem como para realizar operações específicas em tarefas individuais.