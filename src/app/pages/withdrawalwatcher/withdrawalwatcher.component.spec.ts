import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalwatcherComponent } from './withdrawalwatcher.component';

describe('WithdrawalwatcherComponent', () => {
  let component: WithdrawalwatcherComponent;
  let fixture: ComponentFixture<WithdrawalwatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalwatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalwatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
