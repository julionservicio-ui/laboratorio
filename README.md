# Santana Management — Herramienta de Información Fiscal

Aplicación web para intentar leer el código QR de una Constancia de Situación Fiscal o una Cédula de Identificación Fiscal y organizar la información recuperada en JSON y una tabla. La interfaz está personalizada para Santana Management.

## Ejecutar localmente

Requiere Node.js 20 o compatible.

```bash
npm install
npm run dev
```

## Compilar y probar

```bash
npm run build
npm run preview
```

El resultado de compilación se genera en `dist/`.

## Publicar en Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

`netlify.toml` incluye esta configuración.

## Limitaciones

La aplicación intenta leer la URL de validación del QR desde el navegador. La consulta puede fallar si el SAT bloquea solicitudes desde el navegador, cambia su página o no devuelve el contenido esperado. No es una herramienta oficial del SAT y los resultados deben verificarse.

## Licencia y atribución

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` y conserva el aviso de copyright y las condiciones requeridas al redistribuirlo. La personalización de la interfaz no implica autoría original del código de terceros.
