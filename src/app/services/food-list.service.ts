import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  // O private signifca que quem pode ter acesso a esta lista é apenas este componente FoodListService
  private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];

  constructor() {}

  // Esta função serve justamente para que se possa pegar as informaçoes da lista porem pelo método e nao pela função diretamente
  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }
}
