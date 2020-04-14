import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationBatchViewComponent } from './liquidation-batch-view.component';

describe('LiquidationBatchViewComponent', () => {
  let component: LiquidationBatchViewComponent;
  let fixture: ComponentFixture<LiquidationBatchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationBatchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationBatchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
