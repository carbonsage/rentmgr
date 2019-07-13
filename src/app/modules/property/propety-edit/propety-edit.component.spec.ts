import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyEditComponent } from './propety-edit.component';

describe('PropetyEditComponent', () => {
  let component: PropetyEditComponent;
  let fixture: ComponentFixture<PropetyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropetyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
