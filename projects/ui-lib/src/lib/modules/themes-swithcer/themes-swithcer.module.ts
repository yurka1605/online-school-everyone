import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesSwithcerComponent } from './themes-swithcer.component';


@NgModule({
  declarations: [ThemesSwithcerComponent],
  imports: [
    CommonModule
  ],
  exports: [ThemesSwithcerComponent]
})
export class ThemesSwithcerModule { }
