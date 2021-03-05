import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-datasheet-library';
  csv = [
    ["Column 1", "Column 2", "Column 3", "Column 4"],
    ["1-1", "1-2", "1-3", "1-4"],
    ["2-1", "2-2", "2-3", "2-4"],
    ["3-1", "3-2", "3-3", "3-4"],
    ["4", "5", "6", "7"]
  ]

  generateNewHeader(length: number): string[] {
    return [...(new Array(length))].map((_, index) => `Column ${index + 1}`)
  }

  onChangeCell($event): void {
    console.log('onChangeCell');
    console.log($event);
    const rowNumber = $event.rowNumber;
    const colNumber = $event.colNumber;
    const newValue = $event.newValue;
    const row = this.csv[rowNumber];
    this.csv[rowNumber] = row.map((el, index) => {
      if (index === colNumber) {
        return newValue;
      } else {
        return el;
      }
    })
  }

  onInsertColumn($event): void {
    console.log('onInsertColumn');
    console.log($event);
    const colNumber = $event
    this.csv.map(row => row.splice(colNumber, null, ""));
    this.csv[0] = this.generateNewHeader(this.csv[0].length);
  }

  onDeleteColumn($event): void {
    console.log('onDeleteColumn');
    console.log($event);
    const colNumber = $event;
    this.csv.map(row => row.splice(colNumber, 1));
  }

  onInsertRow($event): void {
    console.log('onInsertRow');
    console.log($event);
    const rowNum = $event;
    const newRow = this.csv[0].map(el => "")
    this.csv.splice(rowNum, null, newRow);
  }

  onDeleteRow($event): void {
    console.log('onDeleteRow');
    console.log($event);
    const rowNum = $event;
    this.csv.splice(rowNum, 1);
  }
}
