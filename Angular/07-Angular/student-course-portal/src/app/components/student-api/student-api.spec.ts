import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApi } from './student-api';

describe('StudentApi', () => {
  let component: StudentApi;
  let fixture: ComponentFixture<StudentApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentApi],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
