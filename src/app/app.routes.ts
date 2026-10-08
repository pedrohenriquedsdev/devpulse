import { Routes } from '@angular/router';

export const routes: Routes = [
  // BASICAMENTE UMA COMBINAÇÃO DE CAMINHO + RESULTADO
  // loadComponent ao invés de component -> CADA TELA BAIXA SEU PRÓPRIO CÓDIGO SÓ QUANDO ACESSADA
  { path: '', loadComponent: () => import('./features/search/search-page/search-page').then(m => m.SearchPage) },
  { path: 'perfil/:username', loadComponent: () => import('./features/profile/profile-page/profile-page').then(m => m.ProfilePage) },
];
