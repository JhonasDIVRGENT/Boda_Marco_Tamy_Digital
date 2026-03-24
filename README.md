# Boda Marco & Tamy — Invitación digital

Sitio estático (Vite + React) pensado para publicarse en [Netlify](https://www.netlify.com/).

## Editar contenido

1. Abre [`src/content/invitationConfig.js`](src/content/invitationConfig.js).
2. Cambia textos, enlaces (`mapsUrl`, `formUrl`, `music.spotifyUrl`) y rutas de imágenes.
3. **Fotos:** coloca archivos en `public/images/` y usa rutas del tipo `/images/nombre.jpg` en `hero.imageSrc` y `closing.imageSrc`.
4. **Audio:** coloca tu MP3 en `public/audio/` y apunta `music.src` a `/audio/tu-cancion.mp3`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build y Netlify

```bash
npm run build
```

En Netlify: **Build command** `npm run build`, **Publish directory** `dist`. El archivo `netlify.toml` ya incluye esta configuración.

## Estructura útil

- `src/components/envelope/` — Pantalla inicial del sobre.
- `src/components/sections/` — Bloques del scroll (hero, fecha, vestimenta, etc.).
- `src/styles/globals.css` — Colores y tipografías globales.
