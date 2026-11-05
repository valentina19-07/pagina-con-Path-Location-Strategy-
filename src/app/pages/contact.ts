import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h1>Contacto</h1>
      <p class="lead">
        ¿Tienes una idea o un proyecto en mente? Será un gusto conocerlo y
        explorar cómo convertirlo en una experiencia digital.
      </p>
      <article class="card">
        <h2>Hablemos de tu próximo proyecto</h2>
        <p>Conoce primero el trabajo y las ideas que están en marcha.</p>
        <a class="btn" routerLink="/projects">Explorar proyectos</a>
      </article>
    </section>
  `,
})
export class Contact {}
