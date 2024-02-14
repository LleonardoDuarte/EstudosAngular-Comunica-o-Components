import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Leonardo Dev', idade: 28 },
    { nome: 'joao Dev', idade: 32 },
    { nome: 'jose Dev', idade: 35 },
  ];

  public nome: string = '';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 3000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'maria', idade: 25 });
  }
  public onClickRemoveList() {
    this.list.pop();
  }
  public onClickEventList(e: MouseEvent) {
    console.log(e);
  }
}
