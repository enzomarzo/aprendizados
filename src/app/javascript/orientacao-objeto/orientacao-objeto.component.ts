import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientacao-objeto',
  templateUrl: './orientacao-objeto.component.html',
  styleUrls: ['./orientacao-objeto.component.scss']
})
export class OrientacaoObjetoComponent implements OnInit {

  oo1=`sacar(valor) {
    if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor;
    }
  }`

  oo2=`sacar(valor) {
    return valor;
    if (this._saldo >= valor) {
        this._saldo -= valor;
    }
}
//Se fizermos isso, que é passando o return no inicio do código (apenas sendo didatico) o if não tem validade nenhuma, ou seja, tudo que acontecer abaixo do return não será executado. 
`
  oo3=`depositar(valor) {
    if(valor <= 0) {
        return;
    }
    this._saldo += valor;
}
//por isso, nesse caso acima, se a condição do if for true, obteremos o retorno (que é não fazer nada), e a linha de baixo 'this.saldo...' não será executada
` 

  constructor() { }

  ngOnInit(): void {
  }

}
