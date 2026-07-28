import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    }).compileComponents();

    const fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Home component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a studentName property', () => {
    expect(component.studentName).toBeDefined();
  });

  it('should have a courseName property', () => {
    expect(component.courseName).toBeDefined();
  });
});