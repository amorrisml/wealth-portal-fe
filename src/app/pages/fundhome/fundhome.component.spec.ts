import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundhomeComponent } from './fundhome.component';

describe('FundhomeComponent', () => {
  let component: FundhomeComponent;
  let fixture: ComponentFixture<FundhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
