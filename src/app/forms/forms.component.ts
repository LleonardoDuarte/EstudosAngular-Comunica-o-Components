import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listComida: Array<{ comida: string; preco: string }> = [
    {
      comida: 'X-Salada',
      preco: 'R$8,00',
    },
    {
      comida: 'X-Bacon',
      preco: 'R$12,00',
    },
    {
      comida: 'X-Tudo',
      preco: 'R$16,00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
