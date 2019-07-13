import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyDetailComponent } from './propety-detail.component';

describe('PropetyDetailComponent', () => {
  let component: PropetyDetailComponent;
  let fixture: ComponentFixture<PropetyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropetyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
