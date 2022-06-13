import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteComponent } from './confirm-delete.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [ConfirmDeleteComponent],
  imports: [CommonModule, NgxSmartModalModule],
  exports: [ConfirmDeleteComponent],
})
export class ConfirmDeleteModule {}
