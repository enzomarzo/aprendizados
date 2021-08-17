import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {

  codeReduce1 = `array = [0,5,10,15,20]
  array.reduce((acc, cur) => acc + cur)
  //resultado = 50
  `

  codeReduce2 = `words = ['aba', 'banana', 'batata', 'por', 'aprendendo']
  const theLongestWord = words.reduce((longestWord, actualWord) => {
    if (longestWord.length < actualWord.length) {
      longestWord = actualWord
    }
    return longestWord
  }, '')
  //longestWord = aprendendo
  //reduzimos o array de words em uma string com a maior palavra
  //a string vazia do final e só para garantir que a palavra atual começa com uma string vazia`

  codeReduce3 = `empregados = [
    {
      nome: 'Carlos',
      funcao: 'caixa'
    },
    {
      nome: 'Chiquinha',
      funcao: 'atendente'
    },
    {
      nome: 'Maria',
      funcao: 'caixa'
    }
  ]

  empregadoPorTipo = empregados.reduce((acc, cur) => {
    console.log(cur.funcao)
    if(acc[cur.funcao]) {
      acc[cur.funcao].push(cur.nome)
    } else {
      acc[cur.funcao] = [cur.nome];
    }
    return acc
  }, {})

  console.log(empregadoPorTipo)

  //caixa: [carlos, maria]
  //atendente: [chiquinha]`

  constructor() { }

  ngOnInit(): void {
  }

}
