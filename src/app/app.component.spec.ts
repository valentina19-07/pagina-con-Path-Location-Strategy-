import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { Home } from './pages/home';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Path' modo`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.modo).toEqual('Path');
  });

  it('should render the page navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('Inicio');
    expect(compiled.querySelector('nav')?.textContent).toContain('Proyectos');
    expect(compiled.querySelector('nav')?.textContent).toContain('Contacto');
  });

  it(`should use the 'PathLocationStrategy' on the home page`, () => {
    const fixture = TestBed.createComponent(Home);
    expect(fixture.componentInstance.estrategia).toEqual('PathLocationStrategy');
  });
});
