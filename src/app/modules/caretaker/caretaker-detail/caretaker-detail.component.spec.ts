import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakerDetailComponent } from './caretaker-detail.component';

describe('CaretakerDetailComponent', () => {
  let component: CaretakerDetailComponent;
  let fixture: ComponentFixture<CaretakerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
