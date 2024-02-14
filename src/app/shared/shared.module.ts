import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [NewComponent, InputComponent, OutputComponent],
  exports: [NewComponent, InputComponent, OutputComponent],
  imports: [CommonModule],
})
export class SharedModule {}
