import { Component, OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  message :String
  private confirmEvent: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    
  }

  getConfirmationEventEmiter() : EventEmitter<String>{
    return this.confirmEvent
  }
  



}
