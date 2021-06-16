import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {

  codePhp1 = `<?php

  $idade = 15;
  $mensagem = $idade < 18 ? ´Você é menor de idade : 'Você é maior de idade';
  echo $mensagem

  /**
   * Poderia ser escrito com if else
   * if ($idade >= 18) {
   *    echo "você é maior de idade"
   *  } else {
   *    echo "você é menor de idade
   *  }
   *
   * O php consegue ler o if else sem as {}, mas é boa prática sempre colocar as chaves. O elseif ele também consegue ler tudo junto, mas também é boa prática dar o espaço
   */
  `

  codePhp2 =  `$letras = ["E", "n", "z"]; // criando um array
$letras[] = "o";  // uma simples forma de adicionar item ao final do array
for($i=0 ; $i < count($letras) ; "i++") {
  echo "$letras[$i]";
} // interessante que aqui a forma de contar o array é com count($array) ao invés de array.length do js
`

  codePhp3=`
$contas = [
  1 => "Enzo";
  2 => "Carlos";
  3 => "Carla";
];
//esse 1, 2 e 3 são as ´chaves´ do meu array associativo. Podem ser int ou string. Se for string e eu quiser adicionar um novo item, eu não consigo adicionar como no exemplo acima, eu precisaria passar a sequencia que eu quero dentro do array, por exemplo

$contas = [
  "Pessoa01" => "Enzo",
  "Pessoa02" => "Carlos"
];
$contas["Pessoa03"] = "Carla";
`

  codePhp4=`
$info = array('Café', 'marrom', 'cafeína');
list($bebida, $cor, $substancia) = $info;
echo "$bebida é $cor e $substancia o faz especial.\n";
//primeiro passei um array e depois, na mesma ordem, eu passei abaixo (através da função list) a variável que a cada item do array (que é o $info) se refere. Assim eu posso chamar essa variável e ela vai identificar o local em que está no array

//também podemos trocar o list() por [] => que é como um array
$info = array('Café', 'marrom', 'cafeína');
[$bebida, $cor, $substancia] = $info;
echo "$bebida é $cor e $substancia o faz especial.\n";
`

  codePhp5 = `<?php
  //código em PHP
  //mais código em PHP
  ?>
  Código em HTML
  <?php
  /código em PHP novamente..
  `
  codePhp6 =`<?php

  $string = 'Açucar e Limão';

  echo strlen($string) . PHP_EOL;     // strlen = string length = tamanho do string
  echo strtoupper($string);           // strtoupper = String To Upper = Formatar a String em letras maiusculas

  //resultado
  //16
  //AçUCAR E LIMãO
  ?>
  `
  codePhp7 = `<?php

  $string = 'Açucar e Limão';

  echo mb_strlen($string) . PHP_EOL;     // strlen = string length = tamanho do string
  echo mb_strtoupper($string);           // strtoupper = String To Upper = Formatar a String em letras maiusculas

  ?>`

  codePhp8 =`<?php

  class Conta {
    public string $cpfTitular;
    public string $nomeTitular;
    public float $saldo;
  }
  //criando uma classe (que é o modelo)
  //a tipagem dos atributos das classes passou a ser possível a partir da versão 7.4 do php

  $conta001 = new Conta();
  //criando um objeto.

  $conta001 -> nomeTitular: "Enzo Marzo"
  $conta001 -> saldo: 10000000.00
  `

  codePhp9 =`//com if + else
  function formatDate($date)
  {
    $format = DateTime::ATOM;

    if($date instanceof DateTime) {
      $d = date -> format ( $format )
    } elseif (is_numeric($date)) {
      $d = date($format, $date)
    } else {
      $d = (string) $date;
    }
    return $d;
  }`

  codePhp10 = `//sem if + else
  function formatDate($date)
  {
    if ($date instanceof DateTime) {
      return date -> format ( $format )
    }

    if (is_numeric($date)) {
      return date($format, $date)
    }

    return (string) $date

  }`

  codePhp11 = `class Conta {

    private string $nome;
    private string $CPF;
    private double $saldo;
    public static $numeroDeContas = 0
    //o Static significa que o numero de contas não é um atributo das instancias e sim um atributo da classe em sí.

    public function __construct(string $CPF, string $nome)
    {
      $this -> CPF = $cpf;
      $this -> nome = $nome;
      $this -> saldo = -;
      %Conta::numeroDeContas; // com :: eu acesso atributo static
      //o atributo static não acesso com o this, pois o this acessa a instância. Ou seja, quando eu crio o new ContaEnzo() o this vai se referir ao ContaEnzo. E o atributo static se refere ao modelo 'Conta' e não a ContaEnzo().
    }

  }`


  constructor() { }

  ngOnInit(): void {
  }

}
