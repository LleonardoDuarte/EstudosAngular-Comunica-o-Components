import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => error
    );

    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Você adicionou o item ${res.nome}`);
      return this.foodList.push(res);
    });
  }

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

  public foodListPut(value: string, id: number) {
    this.foodListService.foodListPut(value, id).subscribe(
      (res) => console.log(res),
      (error) => error
    );
  }
}
