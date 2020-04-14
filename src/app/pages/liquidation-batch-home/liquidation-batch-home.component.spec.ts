import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationBatchHomeComponent } from './liquidation-batch-home.component';

describe('LiquidationBatchHomeComponent', () => {
  let component: LiquidationBatchHomeComponent;
  let fixture: ComponentFixture<LiquidationBatchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationBatchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationBatchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
