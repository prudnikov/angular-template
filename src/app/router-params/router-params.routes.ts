import { RouterParamsComponent } from './router-params.component';
import { Routes } from '@angular/router';
import { IdComponent } from './id/id.component';
import { IdResolverResolver } from './id-resolver.resolver';

export const routes: Routes = [
  {
    path: '',
    component: RouterParamsComponent,
    children: [
      {
        path: ':id',
        component: IdComponent,
        resolve: { idResolverValue: IdResolverResolver },
        children: [
          {
            path: 'child',
            loadChildren: () =>
              import('./id-child/id-child.module').then((m) => m.IdChildModule),
          },
        ],
      },
    ],
  },
];
