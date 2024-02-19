import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FoodList } from '../module/food-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  // O private signifca que quem pode ter acesso a esta lista é apenas este componente FoodListService
  private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];

  private url: string = 'http://localhost:3000/'; //list-food

  constructor(private http: HttpClient) {}

  // Esta função serve justamente para que se possa pegar as informaçoes da lista porem pelo método e nao pela função diretamente
  // public foodList() {
  //   return this.list;
  // }

  // Aqui eu crio a mesma função de cima porem utilizando a chamada nos dados do server fake
  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  // Aqui é o método antes do uso do service
  // public foodListAdd(value: string) {
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.url}list-food`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListPut(value: string, id: number): Observable<FoodList> {
    return this.http
      .put<FoodList>(`${this.url}list-food/${id}`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }

  // aqui já é usando o server
  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
