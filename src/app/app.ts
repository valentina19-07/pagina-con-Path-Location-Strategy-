import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="topbar">
      <a class="brand" routerLink="/home">DevHub <small>{{ modo }}</small></a>
      <nav>
        <a routerLink="/home" routerLinkActive="active">Inicio</a>
        <a routerLink="/projects" routerLinkActive="active">Proyectos</a>
        <a routerLink="/contact" routerLinkActive="active">Contacto</a>
      </nav>
    </header>
    <main>
      <router-outlet />
    </main>
    <footer>© 2026 DevHub · Arquitectura de Software</footer>
  `,
})
export class App {
  readonly modo = 'Path';
}
