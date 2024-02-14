# Instalar uma versão especifica do angular

npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@1.4.1

# Anotações gerais.

-Para mais dinamismo na página o professor fez as seguintes alterações:

-deletou os arquivos app.component.html e app.component.scss

-no arquivo app.component.ts apagou o templateURL e o styleURLs

-criou um template e chamou a rota <router-outlet></router-outlet>

# ngOnInit

-Para chamar o ngOnInit no export devemos colocar um implements OnInit e importar ele pelo mesmo local de import do componente. apos isso ja podemos chamar ele dentro do export

-O void caracteriza que nao terá nenhum retorno

# ngOnChange

- Executado sempre que um valor de um controle de entrada dentro do componente é alterado

-O ngOnChanges só é invocado quando há alteração através do @input(), sem ele nao irá funcionar

# ngDoCheck() e filhos:

- ngDoCheck(): Sempre que os componentes inicializam e verificam os valores ele é chamado

--- # ngAfterContentInit(): Invocado quando se tem a realização de alguma projeção de conteudo, apertar um botão por exemplo.

--- # ngAfterContentChecked(): Invocado quando o contentInit detecta alteração

--- # ngAfterViewInit(): Invocado quando todos os componentes forem visualizados

---# ngAfterViewChecked(): Invocado quando todos os componentes ja forem verificados pelo viewInit

# ngOnDestroy()

- É usado sempre que destruimos algum componente

# @input()

- O input sempre vem antes da declaração da sua variavel e ele serve para que voce consiga realizar mudanças dos dados em outros arquivos com esta mesma variavel, entao se eu declaro por exemplo uma variavel title com nome "ola", porem quero alterar direto pelo seletor, obrigatoriamente eu preciso colocar @input() antes da variavel, se nao o angular nao ira realizar a alteração desejada.

# Data Binding

- Data Binding basicamente são formas de se trabalhar com dados e exibilos atraves de algumas opções

--- interpolation {{}}

--- Property binding <button [disabled]='disabled'>Button<button> || <img [src]='itemImageUrl'>

--- Event Binding <button (click)='calc()'>Button<button>

--- two way data binding <input [(ngModel)]='nome'> Este modelo escuta e executa ao mesmo tempo

informação importante, para usar o two way bindin deve-se importar o formsModule no app.module

# Diretivas de atributo

Alteram a aparencia ou comportamento de um elemento, componente ou diretiva

- ngClass: adiciona e remove um conjunto de classes css

- ngStyle: adiciona ou remove um conjnto de estilos HTML

- ngModel: adiciona vinculação de dados bidirecionais a um elemento de formulário HTML

# Diretivas estruturais

Moldam ou remodelam a estrutura do DOM, adicionando, removendo e manipulando os elementos do host aos quais estão anexados

- ngIf: condicionalmente cria ou descarta visualização de modelo

- ngFor: repete um nó para cada item de uma lista

- ngSwitch: um conjunto de diretivas que alternam entre visões alternadas.

- ngSwitchDefault: Deixa uma mensagem padrao que pode ser o aviso do que digitar, um erro, etc...

# Diretivas de atributos

- ngClass: adiciona classe css ao componente HTML, pode ser usado para fazer validações também ex:<p [ngClass]="{ active: true, disabled: false }">texto</p>

- ngStyle: assim como o ng class adiciona classe ao componente css e pode fazer validações.

- ngModule: A diretiva [(ngModel)] é uma diretiva bidirecional que utiliza-se em input de formulario, para usar este model é necessario dentro do arquivo app.module.ts realizar o import do FormsModule e coloca-lo dentro dos imports, caso contrario o ngmodel ira acusar erro, segue import:import { FormsModule } from '@angular/forms';

- ng-template: O ng template serve para que possamos encapsular dados para realizar validações atraves de ng if e isso ser realizado antes do carregamento da DOM

- ng-content:Serve para poder mostrar o conteudo HTML adicionado direto no APP component sem precisar de um seletor de componente, alem disso voce pode direcionar o conteudo para onde voce quiser.

- pipes: O pipe é responsavel por pegar as informações das interpolations e poder modificalas, para usar o pipe basta voce dentro da interpolation ou dentro da tag HTML usar a barra | que representa o pipe

# Module (@ngModule)

- Module é um mecanismo para agrupar components,diretivas,pipes e serviços relacionados,de forma a combinar com outros modulos para criar um app

- Para conseguirmos realizar o uso dos componentes dentro de um novo moduo devemos seguir alguns passos, primeiro devemos dentro do modulo criado realizar o exports do seu componente, exemplo: exports: [NewComponentComponent], após isso devemos importar nosso module dentro do module principal da página, o app.module, para isso dentro do app module iremos em imports e colocaremos a importação do modulo lá

# Comunicação entre componentes

- A comunicação entre componentes basicamente usa o @input e @output , como os nomes sugerem o input serve para a entrada de dados e o output para a saida, em uma cascata de cima para baixo as informaçoes dos componentes pais sao passadas aos componentes filhos atraves do input, quando um componente filho deseja voltar informaçoes acima usa-se o output


