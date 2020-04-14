import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalViewComponent } from './withdrawal-view.component';

describe('WithdrawalViewComponent', () => {
  let component: WithdrawalViewComponent;
  let fixture: ComponentFixture<WithdrawalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
