import { NgModule } from '@angular/core';
import { NgDatasheetComponent } from './ng-datasheet.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NgDatasheetComponent],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    CommonModule,
  ],
  exports: [NgDatasheetComponent]
})
export class NgDatasheetModule { }
