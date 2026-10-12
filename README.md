# Mi Quincena

App de presupuesto por periodo de pago (quincenal, semanal, mensual o diario): salario, gastos fijos, ahorro automático, metas, gastos variables y estado de cuenta por periodo (PDF).

- `www/` — la app (HTML/CSS/JS, funciona 100% sin conexión). Datos en el dispositivo.
- `ios/` — proyecto de Xcode generado con Capacitor.

## Web (navegador)

```bash
npm install && npm run vendor && npm run serve
```

Abre http://localhost:5173/index.html

## iOS

Requiere Xcode instalado. Después de cambiar algo en `www/`:

```bash
npm run sync   # copia www/ al proyecto iOS
npm run open   # abre Xcode
```

El Bundle Identifier (`com.miquincena.app`) se define en `capacitor.config.json` y en Xcode (Signing & Capabilities); debe ser único y quedar ligado a tu cuenta de Apple Developer.
