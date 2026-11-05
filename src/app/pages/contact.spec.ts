import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Contact } from './contact';

describe('Contact', () => {
  it('should render the contact section', async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Contacto');
    expect(fixture.nativeElement.textContent).toContain('Hablemos de tu próximo proyecto');
  });
});
