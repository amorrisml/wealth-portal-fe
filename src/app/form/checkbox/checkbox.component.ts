import { Component, OnInit, Input, ViewChild, ElementRef,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'checkbox',
  template: `<label class="pure-material-checkbox">
                <input #inputObj 
                      type="checkbox"
                      (change)="changeValue($event)"
                      value="{{value}}"
                >
                <span class="{{class}}" >{{label}}</span>
              </label>`,
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() class: string;
  @Input() value: boolean;

  @ViewChild('inputObj') inputObj: ElementRef;
  
  @Output()
  chg: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

    if( this.value  === true) {
      this.inputObj.nativeElement.checked = true;
    }
  }

  changeValue(event) {
    console.log(event.target.checked);
    this.chg.emit(event.target.checked);
  }
}
