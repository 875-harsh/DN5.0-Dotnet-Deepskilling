import { TestBed } from '@angular/core/testing';
import { PipesDemo } from './pipes-demo';

describe('PipesDemo', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesDemo]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PipesDemo);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});