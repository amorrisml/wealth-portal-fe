import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivewealtheventlistenerComponent } from './drivewealtheventlistener.component';

describe('DrivewealtheventlistenerComponent', () => {
  let component: DrivewealtheventlistenerComponent;
  let fixture: ComponentFixture<DrivewealtheventlistenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivewealtheventlistenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivewealtheventlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
