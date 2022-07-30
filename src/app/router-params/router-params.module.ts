import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterParamsComponent } from './router-params.component';
import { RouterModule } from '@angular/router';
import { routes } from './router-params.routes';
import { IdComponent } from './id/id.component';

@NgModule({
  declarations: [RouterParamsComponent, IdComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RouterParamsModule {}
