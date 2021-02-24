import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatasheetModule } from 'projects/datasheet/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DatasheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
