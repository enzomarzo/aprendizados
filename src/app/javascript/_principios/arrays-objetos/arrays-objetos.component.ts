import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays-objetos',
  templateUrl: './arrays-objetos.component.html',
  styleUrls: ['./arrays-objetos.component.scss']
})
export class ArraysObjetosComponent implements OnInit {

  codeArrayObj1 = `let pessoa = {
    'nome': 'enzo',
    'sobrenome': 'marzo'
  }

  console.log(pessoa['nome']) // enzo
  console.log(pessoa.nome)    // enzo`

  constructor() { }

  ngOnInit(): void {
  }

}
