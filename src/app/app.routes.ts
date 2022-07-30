import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'router-params',
    loadChildren: () =>
      import('./router-params/router-params.module').then(
        (m) => m.RouterParamsModule
      ),
  },
];
