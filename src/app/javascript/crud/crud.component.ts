import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  codeCrud1 = `fetch('https://api.github.com/users/enzomarzo/followers')
  .then(function (res))
    return res.json()
  //fetch => vai buscar alguma coisa em algum lugar, geralmente um arquivo JSON com dados
  //O Fetch retorna uma promisse. O 'then' é para lidar com essa promisse de retorno
  //Então ao buscar esse JSON, pegar a resposta e retornar essa resposta convertida em formato json.

  //também pode ser escrita com arrow function
  //.then ((res) => return res.json())
  `

  codeCrud2 = `fetch('https://api.github.com/users/enzomarzo/followers')
  .then((res) => res.json())
  .then((newRes) => console.log(newRes))

  //Dois then? É, o primeiro vai pegar a resposta no servidor e transformar em um json. Mas ainda assim retorna uma promissa e não o JSON detalhado como queremos.
  //o segundo then vai trabalhar nessa promessa, pegando essa resposta e transformar essa resposta no arquivo json que queremos`

  codeCrud3 = `fetch('https://api.github.com/users/enzomarzo/followers')
  .then((res) => res.json())
  .then((newRes) => newRes)
  .catch((err) => console.log(err))

  //e se eu digitar o endereço incorreto no fetch? Pra isso serve o .catch, para pegar esse erro e tratá-lo.
  `

  constructor() { }

  ngOnInit(): void {
  }

}
