import { Component, ElementRef, Input, Output, OnInit, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';


import {InputBase} from '../input-base';
import { Validation } from '@app/model/model';
import { ValidationService } from '@app/services/validation.service';

@Component({
  selector: 'input-text',
  template:`<div *ngIf="label"><label>{{label}}</label></div>
            <div class="inputgroup" #inputwrapper style="display:table; border:1px solid grey; width:100%" >
                <div style="display:table-cell; width:20px; padding-left:5px; padding-right:10px; text-align:left">
                    <i class="fa {{leftIcon}}"></i>
                </div>
                <div style="display:table-cell;">
                    <input type="{{type}}"
                          #inputObj
                          style="width:100%"
                          [placeholder]="placeholder"
                          (keyup)="onKeyUp($event)"
                          (blur)="onblur(inputObj.value)"
                          validation='[{"rule": "isValidEmail(value)", "message":"This is not a valid email"}]'
                    />
                    <div #errorMessage class="error_message"></div>
                    <div #confirmMessage class="confirm_message"></div>
                </div>
                <div style="display:table-cell;  text-align:right; padding-left:10px">
                  <span class="info"  *ngIf="tooltip">
                      <i class="fa {{icon}} cursor" (click)="iconClicked()" data-toggle="tooltip" title="{{tooltip}}"></i>
                  </span>
                </div>
            </div>
            `
})
export class TextComponent implements OnInit {
  private valid: boolean;

  @Input() label: string;
  @Input() tooltip: string;
  @Input() id: string;
  @Input() width: '100%';
  @Input() placeholder = '';
  @Input() icon = 'fa-question';
  @Input() leftIcon = 'fa-pencil';
  @Input() type = 'text';
  @Input() validations: Validation[];

  @Output()
  val: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  keyUp: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  iconPress: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('inputObj') inputObj: ElementRef;
  @ViewChild('inputwrapper') inputwrapper: ElementRef;
  @ViewChild('errorMessage') errorWrap: ElementRef;
  @ViewChild('confirmMessage') confirmWrap: ElementRef;

  constructor(private validationService: ValidationService) {
    if( !this.width) {
       this.width = '100%';
       
    }
  }

  ngOnInit() { }

  getInputNativeElement(): any {
    return this.inputObj.nativeElement;
  }

  onblur(val) {
    this.val.emit(val);
  }

  iconClicked() {
    this.iconPress.emit('hit');
  }

  isValid() {
      return this.isValid;
  }

  onKeyUp( $event) {
    this.keyUp.emit($event);
  }

  validate(): boolean {
    let notFound = false;
    const validation = this.validations.find(v => {
      if (this.validationService.validationExists(v.key)) {
        return !this.validationService.validate(v.key, this.getValue());
      } else {
        notFound = true;
        return true;
      }
    });

    if (notFound) {
      this.setError(`${validation.key} not found`);
      return false;
    } else if (validation) {
      this.setError(validation.message);
      return false;
    } else {
      this.clearError();
      return true;
    }
  }

  setVerified (message: string) {
    this.valid = true;
    
   /* $(this.confirmWrap.nativeElement).text(message)
    $(this.inputwrapper.nativeElement).css("border-color","green")*/
  }

  getValue() {
    return this.inputObj.nativeElement.value
  }

  clearError() {
    this.valid = true;
    /*$(this.errorWrap.nativeElement).text("")
    $(this.inputwrapper.nativeElement).css("border-color","black")*/
  }

  setError(message: string) {
    /*this.valid = false;
    $(this.errorWrap.nativeElement).text(message)
    $(this.inputwrapper.nativeElement).css("border-color","red")*/
  }

}
