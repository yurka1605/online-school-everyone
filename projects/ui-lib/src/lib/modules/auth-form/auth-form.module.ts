import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { UILibSharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UILibSharedModule,
  ],
  exports: [AuthFormComponent],
})
export class AuthFormModule { }
