import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './material/button/button.component';
import { InputComponent } from './material/input/input.component';
import { DrugAndDropComponent } from './material/drug-and-drop/drug-and-drop.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DrugAndDropComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DrugAndDropComponent,
  ]
})
export class UILibSharedModule { }
