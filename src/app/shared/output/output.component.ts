import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'output-component',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  // O event emitter serve para informar que estamos enviando algum dado
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'gabrielle', idade: 28 },
    { nome: 'marcela', idade: 30 },
    { nome: 'izadora', idade: 31 },
  ];
  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}


