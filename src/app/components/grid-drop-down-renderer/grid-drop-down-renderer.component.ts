import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-drop-down-renderer',
  template: `
     <select (change)="selectMapping($event.target.value)">
       <option> N/A </option>
       <option *ngFor="let s of values " [value]="s" [selected]="s == this.params.value" > {{s}} </option>
      </select>
  `,
  styleUrls: ['./grid-drop-down-renderer.component.scss']
})
export class GridDropDownRendererComponent implements ICellRendererAngularComp {

  public params: any;
  public values: string;

  agInit(params: any): void {
    this.params = params;
    this.values = params.values;
    console.log(this.params);
  }
  /*
    public invokeParentMethod() {
      this.params.context.componentParent.methodFromParent(
        `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
      );
    }*/

  selectMapping(val: string) {
    console.log('val::::', val, this.params);
    this.params.value = val;
    this.params.callback(this.params.column.colDef.headerName, val);
    this.params.api.stopEditing();
    //  this.params.context.componentParent.updateMapping(this.params.colDef.headerName);
  }

  refresh(): boolean {
    return false;
  }

  getValue(): string {
    return this.params.value;
  }
}
