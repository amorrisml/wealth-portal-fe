import { Component, OnInit, ViewChild } from '@angular/core';
import { LeftMenuComponent } from '@app/coomponents/left-menu/left-menu.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild("leftMenu") leftMenu: LeftMenuComponent;

  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    this.leftMenu.toggle();
  }
}
