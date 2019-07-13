import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyListComponent } from './propety-list.component';

describe('PropetyListComponent', () => {
  let component: PropetyListComponent;
  let fixture: ComponentFixture<PropetyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropetyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
