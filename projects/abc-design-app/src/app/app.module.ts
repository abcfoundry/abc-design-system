import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbcCoreUiModule } from '@abc-foundry/abc-core-ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbcCoreUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
