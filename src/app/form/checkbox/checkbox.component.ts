import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'checkbox',
  template: `<label class="pure-material-checkbox">
                <input #inputObj 
                      type="checkbox"
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
  

  constructor() { }

  ngOnInit() {

    if( this.value  === true) {
      this.inputObj.nativeElement.checked = true;
    }
  }



}
