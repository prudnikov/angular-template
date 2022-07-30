import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdChildComponent } from './id-child.component';
import { RouterModule } from '@angular/router';
import { IdChildResolver } from './id-child.resolver';

@NgModule({
  declarations: [IdChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IdChildComponent,
        resolve: { idChild: IdChildResolver },
      },
    ]),
  ],
})
export class IdChildModule {}
