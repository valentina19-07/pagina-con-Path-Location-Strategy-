import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  it('should render the projects section', async () => {
    await TestBed.configureTestingModule({ imports: [Projects] }).compileComponents();
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Proyectos');
    expect(fixture.nativeElement.textContent).toContain('DevHub');
  });
});
