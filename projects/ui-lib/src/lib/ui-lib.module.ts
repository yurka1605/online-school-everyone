import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular sdk
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { UiLibComponent } from './ui-lib.component';

@NgModule({
  declarations: [
    UiLibComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ],
  exports: [
    UiLibComponent
  ]
})
export class UiLibModule { }
