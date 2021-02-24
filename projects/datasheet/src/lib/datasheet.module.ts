import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatasheetComponent } from './datasheet.component';



@NgModule({
  declarations: [DatasheetComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [DatasheetComponent]
})
export class DatasheetModule { }
