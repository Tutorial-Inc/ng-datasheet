import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDatasheetModule } from 'projects/ng-datasheet/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDatasheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
