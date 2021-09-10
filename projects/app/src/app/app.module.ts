import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core/core.module';

import { AppComponent } from '@app/app.component';

import { InMemoryDataService } from './shared/services/api/in-memory-data-service.service';

import { HttpInterceptorProviders } from '@app/http-interceptors';

import { AppEffects, reducers, metaReducers } from '@app/store';

// Services

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    EffectsModule.forRoot(AppEffects),
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
      // autoPause: true,
    }),
  ],
  providers: [
    ...HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
