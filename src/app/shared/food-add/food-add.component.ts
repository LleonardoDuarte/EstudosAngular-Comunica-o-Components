import { Component, OnInit } from '@angular/core';
//Service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {}

  public listAddValue(value: string) {
    return this.foodListService.foodListAdd(value).subscribe(
      (res) => this.foodListService.foodListAlert(res),
      (error) => error
    );
  }
}
