import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ItemEditModalComponent } from './edit-modal/item-edit-modal.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FilterComponent } from './filter/filter.component';
import { ConfirmDeleteModule } from '../confirm-delete/confirm-delete.module';

@NgModule({
  declarations: [
    ListingComponent,
    ItemEditModalComponent,
    ItemsListComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListingComponent }]),
    NgxSmartModalModule.forChild(),
    ConfirmDeleteModule,
  ],
  exports: [],
})
export class ListingModule {}
