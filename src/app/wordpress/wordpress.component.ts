import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent implements OnInit {

codeHook1 = `function insere_titulo( $titulo, $post_id ) { 
  if( has_category (' urgente, $post_id) ){} 
    $titulo = 'Urgente' . $titulo; 
  }
  return $titulo;
}
//essa função recebe um parametro que iremos alterar (e que demos o nome de titulo)
//e o segundo parametro, não obrigatório, para alterar para urgente no titulo apenas o post que for urgente
//e depois fazemos um if para alterar apenas no post que for urgente

add_filter( 'the tittle' , ' insere_titulo ', 10, 2  );
//podemos colocar até 4 parametros (os dois primeiro são obrigatórios)
//param1 = o filtro(ou action) que queremos modificar
//param2 = a função que criamos para fazer algo
//param3 = prioridade. 10 é o padrão. Se colocarmos 0, dentro da lista do hook, essa será chamada primeiro. E se colocarmos algo como 999 será a ultima
//param4 = é o número de argumentos/parametros que temos na função
`

  constructor() { }

  ngOnInit(): void {
  }

}
