# Pagina con Path Location Strategy

Aplicación de ejemplo construida con Angular para presentar las secciones de
inicio, proyectos y contacto usando rutas limpias.

- Sitio publicado: https://valentina19-07.github.io/pagina-con-Path-Location-Strategy-/
- Repositorio: https://github.com/valentina19-07/pagina-con-Path-Location-Strategy-

## Desarrollo local

Instala las dependencias y ejecuta el servidor de desarrollo:

```bash
npm ci
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Pruebas y compilación

```bash
npm test -- --no-watch
npm run build
```

## Estrategia de enrutamiento

Usa `PathLocationStrategy` (por defecto en Angular): rutas limpias sin `#`
(`/home`, `/projects`, `/contact`). GitHub Pages es un servidor estático y devuelve 404 al
recargar una ruta interna, así que el pipeline copia `index.html` como `404.html`.
Así Angular arranca y resuelve la ruta. Se navega siempre con `routerLink`, nunca con `href`.
