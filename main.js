//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
const tarefas = []
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const perguntas1 = prompt("Me diz 1ª a coisa que tu precisa fazer")
const perguntas2 = prompt("Me diz 2ª a coisa que tu precisa fazer")
const perguntas3 = prompt("Me diz 3ª a coisa que tu precisa fazer")   
// c) Imprima o array no console
tarefas.push(perguntas1, perguntas2, perguntas3)
console.log(tarefas)
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const indice = parseInt(prompt("digite aqui o numero da tarefas que vc realizou, lol"))
tarefas.splice(indice -1,1) // o primeiro valor (-1) é pra mdiminuir o valor digitado, e 1 simboliza QUANTOS serão removidos
console.log(tarefas)
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).



// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b