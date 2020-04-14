import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryTypeComponent } from './fund-category-type.component';

describe('FundCategoryTypeComponent', () => {
  let component: FundCategoryTypeComponent;
  let fixture: ComponentFixture<FundCategoryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
