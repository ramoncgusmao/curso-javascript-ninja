/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'ramon', function(){}, {'ramon':10}, [1,3,4]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function(argumento){
    arr.push(argumento);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([1,'esteto', true]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('o segundo elemento do segundo array é '+ arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 9;
while(num++ < 20){
    console.log(num%2 ? '' : num );
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
console.log( 'Números pares entre 10 e 20:' );
var num = 9;
while(num++ < 20){
    console.log(num%2 ? num:'');
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(num = 100; num < 121; num++){
    console.log(num%2 ? '' : num );
}


console.log( 'Números ímpares entre 111 e 125:' );
console.log( 'Números pares entre 100 e 120:' );
for(num = 111; num < 126; num++){
    console.log(num%2 ? num : '');
}
