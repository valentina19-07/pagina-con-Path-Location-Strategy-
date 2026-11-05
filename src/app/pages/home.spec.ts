import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  it('should render the PathLocationStrategy tag', async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('PathLocationStrategy');
  });
});
