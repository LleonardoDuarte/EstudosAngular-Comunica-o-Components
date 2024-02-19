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

- Para conseguirmos realizar o uso dos componentes dentro de um novo modulo devemos primeiro importar o componente no modulo que voce quer e colocar este componente no declarations e criar um exports e colocar la tambem, exemplo:

declarations:[component],
exports:[component],

feito isso voce vai ate o app module e importa o seu module, importando ele voce vai nos imports e declara ele lá, apartir dai voce ja pode usar o seletor no app component.

# Comunicação entre componentes

- A comunicação entre componentes basicamente usa o @input e @output , como os nomes sugerem o input serve para a entrada de dados e o output para a saida, em uma cascata de cima para baixo as informaçoes dos componentes pais sao passadas aos componentes filhos atraves do input, quando um componente filho deseja voltar informaçoes acima usa-se o output

# Service

- Services são úteis para salvar regras de negócio, pegar informações advindas do servidor (API) (seja por get, post, put, etc...), atualizar e mandar informações a outros componentes.

- Nas versões mais atuais do angular o service ja vem com o @injectable como 'root' entao ele ja funcionará em toda aplicação, sem necessidade de importar nada.

- Para fazer a injeção de dependencia do nosso service em outro componente dentro do constructor no valor devemos colocar uma variavel publica ou privada dar um nome e chamar o nome do service, exemplo: Constructor(private foodListService: FoodListService){}, alem disso importar o service nos imports.

- Para chamar o método que contem as informaçoes da lista no nosso service no meu componente, primeiro devo criar uma variavel tipada (public foodList: Array<string> = [];) depois no ngOnInit eu chamo essa variavel dizendo que ela é = ao service.nomedométodo ( this.foodList = this.foodListService.foodList();) apartir dai posso usar o método no HTML para pegar as informaçoes.

# Comunicação entre componentes sem uso de input e output (usando services)

- Para que haja a comunicação entre dois componentes nos precisamos utilizar a injeção de dependencia no componente e criar a função desejada dentro do nosso service.

# Subscribe

- Subscribe é uma forma e enviar dados atraves de inscrição, voce emite os dados atraves de um eventEmitter no seu server e pode receber os dados atraves de inscrição no seu componente dentro do ngOnInit., exemplo:

  <!-- Server -->

  public emitEvent = new EventEmitter();

  public foodListAlert(value: string) {
  return this.emitEvent.emit(value);
  }

  <!-- Component/ngOnInit -->

      this.foodListService.emitEvent.subscribe(
        (res) => alert(`Você adicionou o item ${res}`)

  );

# Fake Server e Requisição get

- É possivel realizar a criação de um server fake para testes e outras coisas sem precisar necessariamente de criar um teste, para isso deve-se ter instalado no computador o json-server (npm install -g json-server) e depois depois na mesma hierarquia do projeto deve-se criar um arquivo db.json e apartir dai colocar os dados lá.

- Após colocar os dados para iniciar o servidor devemos estar na pasta do arquivo json e digitar no terminal json-server --watch db.json onde ele irá startar o server para que seja usado e poder pegarmos os dados

- Para que nos possamos realizar a requisição API na nossa API fake primeiro dentro do seu módulo onde contem os componentes que voce irá usar os dados da API deve-se importar o httpClientModule e colocar nos imports, apartir dai ja podemos usar.

- Para usar os dados do server fake agora que ja temos o import no module, iremos no nosso service e criaremos primeiro uma variavel private como url (private url:string = 'http://localhost:3000'), depois criaremos uma injeção de dependencia no constructor trazendo o import do httpClient (private:http = httpClient) e apartir dai chamar p método para uso dos dados.
  <!-- Exemplo: -->

  public foodList(): Observable<Array<FoodList>> {
  return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
  (res) => res,
  (error) => error
  );
  }

- Vale lembrar que é necessario tipar a nossa requisição, para isso chamamos o Observable para ficar "escutando" a requisição e depois atraves dos <> devemos criar uma tipagem a parte com os dados que queremos trazer, também vale comentar que o pipe seria o "qual o proximo passo".

- Na chamada da nossa requisição via component teremos que mudar tanto a variavel criada quanto o método de chamada, segue os exemplos

<!-- Variavel -->

public foodList: Array<FoodList> = []; aqui tiramos o array como string e trazemos nossa tipagem ou qualquer coisa.

  <!-- ngOnInit -->

      this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => error
    );

# Requisição Post

- Exemplo de requisição com post:

  public foodListAdd(value: string): Observable<FoodList> {
  return this.http
  .post<FoodList>(`${this.url}list-food`, { nome: value })
  .pipe(
  (res) => res,
  (error) => error
  );
  }

  - Vale lembrar que para que esta requisição funcione é necessario que o recebedor da informação tenha o subscribe() senão não irá funcionar

  # Requisição Put

  Exemplo de aplicação put via http

  # Requisição Delete

    <!-- Service -->

  public foodListPut(value: string, id: number): Observable<FoodList> {
  return this.http
  .put<FoodList>(`${this.url}list-food/${id}`, { nome: value })
  .pipe(
  (res) => res,
  (error) => error
  );
  }

    <!-- Component -->

      public foodListPut(value: string, id: number) {
      this.foodListService.foodListPut(value, id).subscribe(
        (res) => console.log(res),
        (error) => error
      );

  }

  - Vale lembrar que a função put está sendo passada como um evento keyup.enter no input do html
  Exemplo de aplicação de delete via http

    <!-- Service -->

  public foodListDelete(id: number): Observable<FoodList> {
  return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
  (res) => res,
  (error) => error
  );
  }

    <!-- Component -->

  public foodListDelete(id: number) {
  return this.foodListService.foodListDelete(id).subscribe(
  (res) => {
  this.foodList = this.foodList.filter((item) => {
  return id !== item.id;
  });
  },
  (error) => error
  );
  }

  - Vale lembrar que a função put está sendo passada como um evento no botão de delete

# Sobre rotas e mudança de página no angular

- Para realizar a mudança de página no angular cria-se uma nova rota no arquivo app routes e o path devera ser o que voce deseja que seja colocado no / e no component devera ser o novo componente, exemplo de duas rotas:
  export const route:Routes = [

{
path:'',
component: HomeComponent
}
{
path: 'chat',
component: PaginaComprasComponent
}
]

- Quando quisermos adicionar a função de mudar de página para um botao por exemplo deve-se criar o evento no botao, no component ts deve-se no constructor importar o router e colocar o caminho no botao, exemplo:
  <button (click)='MudarPagina()'></button>

Constructor(private router:Router){}

public MudarPagina(){
this.router.navigate('PaginasComprasComponent')
}

Apartir dai quando se clicar no botao ele direcionara para a página desejada
