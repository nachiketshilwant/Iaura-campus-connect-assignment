import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentDetailsComponent } from './student-details.component';

describe('studentDetailsComponent', () => {
  let component: studentDetailsComponent;
  let fixture: ComponentFixture<studentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ studentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(studentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
