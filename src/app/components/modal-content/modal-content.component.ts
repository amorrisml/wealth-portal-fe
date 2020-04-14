import { Component, OnInit, Input, Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


export type ModalWindowViews = 'default' | 'compact' | 'wide-content';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  @Input() view: ModalWindowViews;
  @Input() width: number;
  @Input() footerVisible = true;

  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.dismiss();
  }
}