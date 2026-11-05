import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section>
      <h1>Proyectos</h1>
      <p class="lead">Una selección de ideas y experiencias digitales.</p>
      <div class="grid">
        <article class="card">
          <span class="tag">Angular</span>
          <h2>DevHub</h2>
          <p>Un sitio para presentar proyectos y facilitar la navegación.</p>
        </article>
        <article class="card">
          <span class="tag">Diseño web</span>
          <h2>Experiencias web</h2>
          <p>Interfaces claras y adaptables para distintos dispositivos.</p>
        </article>
        <article class="card">
          <span class="tag">En desarrollo</span>
          <h2>Nuevas ideas</h2>
          <p>Próximamente, más proyectos y aprendizajes para compartir.</p>
        </article>
      </div>
    </section>
  `,
})
export class Projects {}
