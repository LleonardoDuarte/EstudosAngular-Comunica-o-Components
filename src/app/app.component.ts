import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h2>Diretivas estruturais</h2>
    <diretivas-estruturais></diretivas-estruturais>
    <diretivas-atributos>
      <h2>Posso colocar onde quiser com ng-content</h2>
    </diretivas-atributos>
    <new-component></new-component>
    <input-component [contador]="addValue"></input-component>
    <br />
    <button (click)="add()">Add</button>
    <hr />
    <ng-template [ngIf]="getDados" ]>
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <output-component (enviarDados)="setDados($event)"></output-component>
    <hr />
    <h1>Services</h1>
    <food-list></food-list>
    <food-add></food-add>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public addValue: number = 1;
  public getDados: { nome: string; idade: number } | undefined;

  constructor() {}

  ngOnInit(): void {}

  public add() {
    this.addValue += this.addValue;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}

// Comentario do @input: Nesse exemplo eu criei uma variavel contador dentro do input.ts e coloquei como @input, dentro do app module eu chamo essa variavel direto do seletor como property binding e coloquei uma outra variavel chamada addvalue, e dentro do proprio app module criei a variavel addvalue e coloquei o valor que eu quisesse. Apos isso criei um botao que soma + o valor atual dele sempre que clicar. Importante salientar que quando se clica e atualiza o valor ele atualiza o valor inicial do componente filho que no caso é o contador que foi criado no input component ts

//Comentario do @output: No caso do output, diferente do input nos fizemos a função direto no componente e nao no app module, para esse exemplo foi criado uma lista que foi chamada no HTML pelo ngfor e criado um botao com evento de click para pegar os dados e enviar esta lista, o output entra como o enviador dos dados onde importamos o EventEmitter que é um "enviador" de dados e dentro da função do click chamamos a variavel que contem o EventEmitter que habilita o .emit ao qual passamos o que queremos enviar, que nesse exemplo foi a lista. Após isso para resgatar os dados dentro do app component no seletor do outout iremos criari um event binding com o nome da função que criamos para enviar os dados (enviarDados nesse caso) e como valor passamos o nome de uma nova função. Ainda dentro do app component criaremos uma varaivel para receber nome e idade porem usaremos o pipe| para colocar como undefined, apos isso criaremos a função que passamos como valor no seletor e iremos receber o event atraves da variavel que criamos com nome e idade, apos isso chamamos atraves do ng-template direto no seletor do app component estes dois dados, ou seja, quando clicarmos no botao enviar dados ele ira exibir na interpolação os dados recebidos.
