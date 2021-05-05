import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

codeColab1 = `import pandas as pd

url_dados ='https://github.com/alura-cursos/imersaodados3/blob/main/dados/dados_experimentos.zip?raw=true'
  
dados = pd.read_csv(url_dados, compression = 'zip')
dados
#primeiro importei o pandas
#depois passei o caminho onde está a tabela que eu quero ler
#por fim, eu criei uma variável que vai ler no pandas um csv. O segundo parametro, opcional, é para descompactar o zip
#a ultima linha 'dados' é para ler na tela apenas`

codeColab2 = `mapa = {'droga' : 'composto'} #substituindo droga por composto
dados.rename(columans = mapa, inplace = True) #sem o inplance o novo nome seria designado em uma nova tabela. O inplace subistitui na própria tabela
dados.tail() #visualizando os 5 ultimos dados da tabela já com o o nome trocado
`
codeColab3 = `cod_compostos = dados['composto'].value_counts().index[0:5] #O que já foi explicado acima. Só com a diferença que o index vai ler apenas os nomes, sem a somatória. 
cod_compostos #exibindo os dados na tela
dados.query('composto in @cod_compostos')
#criando uma query!! Aqui, dentro da query eu quero passar algo lógico
#estou dizendo que que quero pegar apenas a variável cod_compostos (sem o @ o python não reconheceria como variável e sim como uma string, gerando erro)`

codeColab4 = `import seaborn as sns

sns.countplot(x='composto', data=dados.query('composto in @cod_compostos'))`

codeColab5= `import seaborn as sns                   #importando a lib e dando o nome de sns (que é bem comum para essa lib)
import matplotlib.pyplot as plt         #importando outra lib. A Matpotlib, para fazer coisas como aumentar o gráfico
sns.set()                               #isso aqui é só pra python setar os gráficos pré moldados pelo seaborn (por algum motivo/bug o python deixou de gerar automaticamente)
plt.figure(figsize=(8,6))               #aumentando o gráfico com o matplotlib
ax = sns.countplot(x='composto', data=dados.query('composto in @cod_compostos')) #nesse caso eu passo o eixo x que eu quero
ax.set_title('Top 5 Compostos')         #mudando o titulo
plt.show()                              #só apagando umas infos que aparecem no inicio, pra deixar mais legível`

codeColab6=`dados.loc[:, 'g-0'].describe()
#esses dois pontos confudem. 
#se eu fizesse 0:10, pegaria da coluna 1 a coluna 9,
#se fizesse 3:9, da coluna 4 (começa com zero) a coluna 9
#se fizesse :9 pegaria da primeira coluna (não precisa do zero) até a 9
#só : pega todas colunas, da primeira a ultima
#primeiro parametro (do loc) = linha

dados.loc[:, 'g-0':'g-771'].describe().T
#descibre() vai listas as princpais métricas que o pandas estipulou
#T = transforma o que era em coluna em lin

dados.loc[:, 'g-0':'g-771'].describe().T['mean'].hist(bins=30)
#loc filtra as colunas e linhas que quero pegar
#describe vai nos dar as métricas principais de analise (média, minimo..)
#T vai transformar linhas em colunas 
#'mean' vai pegar apenas as informações do mean (que fazem parte do descibre)
#hist vai criar um gráfico. E bins é para fazer esse gráfico espaçar menos as informações
`

codeColab7=``

  constructor() { }

  ngOnInit(): void {
  }

}
