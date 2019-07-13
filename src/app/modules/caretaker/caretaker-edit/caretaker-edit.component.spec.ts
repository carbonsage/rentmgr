import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakerEditComponent } from './caretaker-edit.component';

describe('CaretakerEditComponent', () => {
  let component: CaretakerEditComponent;
  let fixture: ComponentFixture<CaretakerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
