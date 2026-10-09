import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// "Planta" o componente App dentro da tag <app-root> do index.html.
// index.html é só uma casca vazia até esta linha rodar.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
