import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [EditModalComponent],
  imports: [CommonModule, NgxSmartModalModule],
  exports: [EditModalComponent],
})
export class EditModalModule {}
