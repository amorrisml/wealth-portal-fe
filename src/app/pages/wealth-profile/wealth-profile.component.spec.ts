import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthProfileComponent } from './wealth-profile.component';

describe('WealthProfileComponent', () => {
  let component: WealthProfileComponent;
  let fixture: ComponentFixture<WealthProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
