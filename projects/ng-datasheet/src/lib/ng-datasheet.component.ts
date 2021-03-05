import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface OnChangeCell {
  newValue: any;
  oldValue: any;
  rowNumber: number;
  colNumber: number;
}
type RowNumber = number
type ColNumber = number

@Component({
  selector: 'ng-datasheet',
  templateUrl: 'ng-datasheet.component.html',
  styleUrls: ['./ng-datasheet.component.scss']
})

export class NgDatasheetComponent implements OnInit {
  @Input() data: any[][];

  @Output() onChangeCell: EventEmitter<OnChangeCell> = new EventEmitter<OnChangeCell>();
  @Output() onInsertColumn: EventEmitter<ColNumber> = new EventEmitter<ColNumber>();
  @Output() onDeleteColumn: EventEmitter<ColNumber> = new EventEmitter<ColNumber>();
  @Output() onInsertRow: EventEmitter<RowNumber> = new EventEmitter<RowNumber>();
  @Output() onDeleteRow: EventEmitter<RowNumber> = new EventEmitter<RowNumber>();

  dropdownBtnIcon = faCaretDown
  showColDropDownMenu = null
  showRowDropDownMenu = null

  constructor() { }

  ngOnInit() {
  }

  toggleColDropDownMenu(colNumber) {
    if (this.showColDropDownMenu === null) {
      this.showColDropDownMenu = colNumber
    } else {
      this.showColDropDownMenu = null
    }
  }

  toggleRowDropDownMenu(rowNumber) {
    if (this.showRowDropDownMenu === null) {
      this.showRowDropDownMenu = rowNumber
    } else {
      this.showRowDropDownMenu = null
    }
  }

  onChangeCellValue(event, cell) {
    const newValue = event.target.value
    const onChangeCell: OnChangeCell = {...cell, newValue}
    this.onChangeCell.emit(onChangeCell)
  }

  onClickedInsertColumn(colNumber) {
    this.toggleColDropDownMenu(colNumber);
    this.onInsertColumn.emit(colNumber)
  }

  onClickedDeleteColumn(colNumber) {
    this.toggleColDropDownMenu(colNumber);
    this.onDeleteColumn.emit(colNumber)
  }

  onClickedInsertRow(rowNumber) {
    this.toggleRowDropDownMenu(rowNumber);
    this.onInsertRow.emit(rowNumber)
  }

  onClickedDeleteRow(rowNumber) {
    this.toggleRowDropDownMenu(rowNumber);
    this.onDeleteRow.emit(rowNumber)
  }

}
