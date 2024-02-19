import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import requisição API
import { HttpClientModule } from '@angular/common/http';

//Components
import { NewComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  exports: [
    NewComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class SharedModule {}
