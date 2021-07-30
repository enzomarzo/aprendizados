import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {

codeReact1 = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
//<Welcome> é um componente.
//o React chama o <Welcome> com {name: 'Sara'} como 'props.
//A function Welcome vai buscar a props (Sara) e retorna um elemento <h1>
//O react atualiza o DOM (renderiza na página)
`

codeReact2 = `import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"

import

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>  //o exact, que é igual a exact={true}, serve para dizer que a rota "", o caminho inicial do meu site tem que ser exatamente o "" para não termos conflitos.
      <Route path="/rooms/new" component={NewRoom}/>
    </BrowserRouter>
    );
}

export default App;
`

codeReactImutabilidade = `var employee = {name: 'Carlos', position: ' developer senior'}

//alterando a variável diretamente
employee.position = 'tech lead'

//alterando com a imutabilidade
var NewEmployeePosition = Object.assign({}, employee, {position: 'tech lead'});
`

codeProps1 = `function Hello(props) {
  return <h1> Olá, $/{props.name} </h1>
}

<Hello name = "Enzo"/>
`

codeStyledComponent = `const Title = styled.h1 \`
  font-size: 1.2rem;
  text-align: center;
\`

  export const Button = styled.button \`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  background: $\{props => props.primary ? 'black' : 'white'};
  //ou seja, se passarmos o <Button primary>Botão</Button> nosso botão
  //será preto. Se passarmos <Button>Botão</Button>, será branco
\`
`

  constructor() { }

  ngOnInit(): void {
  }

}
