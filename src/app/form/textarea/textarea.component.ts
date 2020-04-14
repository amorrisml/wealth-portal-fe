import { Component, OnInit, forwardRef, Input, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'input-textarea',
  template: `
            <div class="inputgroup" #inputwrapper style="display:table; border:1px solid grey; width:100%" >
                <div style="display:table-cell; width:20px; padding-left:5px; padding-right:10px;vertical-align: top; text-align:left">
                    <i class="fa {{leftIcon}}"></i>
                </div>
                <div style="display:table-cell;">

                    <textarea [rows]="rows"
                     #inputObj
                     [cols]="cols"
                     style="width:100%"
                     [placeholder]="placeholder"
                     (keyup)="onKeyUp($event)"
                    ></textarea>


                    <div #errorMessage class="error_message"></div>
                    <div #confirmMessage class="confirm_message"></div>
                </div>
                <div style="display:table-cell;  text-align:right; padding-left:10px">
                  <span class="info"  *ngIf="tooltip">
                      <i class="fa {{icon}} cursor" (click)="iconClicked()" data-toggle="tooltip" title="{{tooltip}}"></i>
                  </span>
                </div>
            </div>
            `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit, ControlValueAccessor {

  @Input() width: '100%';
  @Input() placeholder = '';
  @Input() icon = 'fa-question';
  @Input() leftIcon = 'fa-pencil';
  @Input() rows = 5;
  @Input() cols = 50;
  @Input() tooltip;

  @ViewChild('inputObj') inputObj: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  propagateChange = (_: any) => { };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputObj.nativeElement.value = value;
    }
  }

  onKeyUp($event) {
    this.propagateChange(this.inputObj.nativeElement.value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }
}
