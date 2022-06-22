import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ItemEditFormComponent } from './item-edit-modal/item-edit-form.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FilterComponent } from './filter/filter.component';
import { ConfirmDeleteModule } from '../confirm-delete/confirm-delete.module';
import { EditModalModule } from '../edit-modal/edit-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemRowComponent } from './items-list/item-row/item-row.component';

@NgModule({
  declarations: [
    ListingComponent,
    ItemEditFormComponent,
    ItemsListComponent,
    FilterComponent,
    ItemRowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListingComponent }]),
    NgxSmartModalModule.forChild(),
    ConfirmDeleteModule,
    EditModalModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ListingModule {}
