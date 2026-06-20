# Playwright-Template

Framework de automatización E2E basado en **Playwright** y **TypeScript**, diseñado con una estructura modular utilizando **Page Object Model (POM)** y **Fixtures** personalizados.

## 📁 Estructura del Proyecto

* `src/pages/`: Lógica de negocio encapsulada en Page Objects (ej. `LoginPage.ts`).
* `src/fixtures/`: Extensión del contexto de Playwright (`baseFixture.ts`).
* `src/tests/`: Suite de pruebas automatizadas (`.spec.ts`).
* `playwright.config.ts`: Configuración de la matriz de ejecución multidispositivo.

## 🚀 Instalación

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Instalar navegadores:
   ```bash
   npx playwright install
   ```

## 🛠️ Comandos de Ejecución

El proyecto incluye scripts personalizados en `package.json` para facilitar la ejecución por navegador:

| Comando | Descripción |
| :--- | :--- |
| `npm run test:all` | Ejecuta la suite completa en todos los dispositivos configurados. |
| `npm run test:chrome` | Ejecuta pruebas solo en el motor **Chromium**. |
| `npm run test:firefox` | Ejecuta pruebas solo en el motor **Firefox**. |
| `npm run test:webkit` | Ejecuta pruebas solo en el motor **WebKit (Safari)**. |
| `npm run test:ui` | Abre el modo interactivo (Playwright UI) para depuración. |

## ⚙️ Configuración de Proyectos
El proyecto está configurado para probar la URL: [https://angular-dashboard-lime.vercel.app/](https://angular-dashboard-lime.vercel.app/)

Se han definido 9 proyectos de prueba cubriendo:
* **Navegadores**: Chromium, Firefox, WebKit.
* **Dispositivos**: Escritorio (Desktop), Tablets y Móviles.

## 📊 Reportes
Al finalizar la ejecución, Playwright genera un reporte HTML. Puedes visualizar el último reporte generado con:
```bash
npx playwright show-report
```

O consultar la carpeta playwright-report para abrir el archivo index.html