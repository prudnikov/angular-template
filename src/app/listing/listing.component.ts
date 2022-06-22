import { Component, OnInit } from '@angular/core';
import { Item, ItemFilter } from './listing.types';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  editingItem: null | Item = null;
  deletingItem: null | Item = null;

  items = this.listingService.items$;

  // @ViewChild('deleteItemTemplate', { read: TemplateRef, static: true })
  // deleteItemTemplate!: TemplateRef<any>;

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.loadItems();
  }

  editItem(item: Item) {
    this.editingItem = item;
  }

  handleEditItem(item: Item) {
    this.editingItem = item;
  }

  handleDeleteItem(item: Item) {
    this.deletingItem = item;
  }

  handleFilterChange(itemFilter: ItemFilter) {
    console.log('Filter changed:', itemFilter);
  }

  handleDeleteItemConfirmed(item: Item) {
    console.log('Delete ', item);
    this.listingService.deleteItem(item);
    this.deletingItem = null;
  }

  handleItemChangesSaved(item: Item, editingItem: Item) {
    console.log('Editing saved:', item, editingItem);
  }
}
