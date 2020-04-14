import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidatonBatchEditComponent } from './liquidaton-batch-edit.component';

describe('LiquidatonBatchEditComponent', () => {
  let component: LiquidatonBatchEditComponent;
  let fixture: ComponentFixture<LiquidatonBatchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidatonBatchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidatonBatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
