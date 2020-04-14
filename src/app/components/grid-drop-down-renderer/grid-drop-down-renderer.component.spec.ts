import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDropDownRendererComponent } from './grid-drop-down-renderer.component';

describe('GridDropDownRendererComponent', () => {
  let component: GridDropDownRendererComponent;
  let fixture: ComponentFixture<GridDropDownRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDropDownRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDropDownRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
