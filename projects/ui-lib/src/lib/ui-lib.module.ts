import { DrugAndDropComponent } from './shared/drug-and-drop/drug-and-drop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [DrugAndDropComponent],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [DrugAndDropComponent],
})
export class UiLibModule { }
