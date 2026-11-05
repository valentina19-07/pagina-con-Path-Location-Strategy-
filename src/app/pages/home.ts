import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <span class="tag">{{ estrategia }}</span>
      <h1>Ideas digitales, construidas con intención.</h1>
      <p class="lead">
        Un espacio para explorar proyectos, conocer el enfoque de trabajo y
        conversar sobre nuevas ideas.
      </p>
      <a class="btn" routerLink="/projects">Ver proyectos</a>
      <a class="btn btn-outline" routerLink="/contact">Hablemos</a>
    </section>
  `,
})
export class Home {
  readonly estrategia = 'PathLocationStrategy';
}
