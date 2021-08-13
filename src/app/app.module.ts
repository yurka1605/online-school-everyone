// Angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// NgRX
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

// Components
import { AppComponent } from '@app/app.component';

// Interceptors
import { HttpInterceptorProviders } from '@app/http-interceptors';

// Reducers
import { reducers, metaReducers } from '@app/store/reducers';

// Services

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    CoreModule,
  ],
  providers: [
    ...HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
