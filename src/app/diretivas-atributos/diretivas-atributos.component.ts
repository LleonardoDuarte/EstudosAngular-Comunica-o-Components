import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = '20px';
  public border = 'red';
  public nome: string = '';
  public list: Array<{ nome: string }> = [];
  public ngtemplateboolean: boolean = false;
  public pipe: string = 'Exemplo de pipe |,deixando tudo uppercase';
  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      // ngClass
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      // ngStyle
      if (this.heightPx === '20px') {
        this.heightPx = '50px';
        this.border = '1px solid blue';
      } else {
        this.heightPx = '20px';
        this.border = '1px solid red';
      }

      if (this.ngtemplateboolean) {
        this.ngtemplateboolean = false;
      } else {
        this.ngtemplateboolean = true;
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
