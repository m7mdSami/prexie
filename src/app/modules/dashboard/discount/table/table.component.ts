import { Component } from '@angular/core';

@Component({
  selector: 'prexie-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tables: number[] = new Array(7)
}
