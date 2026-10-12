# Mi Quincena

App web de presupuesto por periodo de pago (quincenal, semanal, mensual o diario): salario, gastos fijos, ahorro automático, metas, gastos variables y estado de cuenta por periodo (PDF).

Sitio estático sin build: `index.html` + `vendor/` (fuentes y jsPDF locales) + PWA (`manifest.webmanifest`, `sw.js`). Los datos se guardan en el `localStorage` del navegador, en cada dispositivo.

## Ejecutar en local

```bash
python3 -m http.server 5173
```

Abre http://localhost:5173/index.html

## Publicar

Es un sitio estático: sube la carpeta completa a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages). No hay carpeta de build; el directorio a publicar es la raíz.

## Instalar en el celular

En iPhone: abrir el sitio en Safari → Compartir → "Añadir a pantalla de inicio".
En Android: menú de Chrome → "Instalar app".
