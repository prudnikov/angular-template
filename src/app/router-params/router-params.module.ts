import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterParamsComponent } from './router-params.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RouterParamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouterParamsComponent,
      },
    ]),
  ],
})
export class RouterParamsModule {}
