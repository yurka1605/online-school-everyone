import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app-shared/shared.module';

import { AuthComponent } from './pages/auth/auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ]),
  ],
  exports: [AuthComponent],
  providers: [],
})
export class AuthModule { }
