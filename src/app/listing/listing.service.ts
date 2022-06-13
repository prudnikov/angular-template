import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from './listing.types';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private items: Item[] = [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
  ];

  private itemsSubject$ = new BehaviorSubject<Item[]>([]);

  // REAL: retrieved from the NgRX Store.
  items$: Observable<Item[]> = this.itemsSubject$.asObservable();

  constructor() {}

  loadItems() {
    // REAL: Dispatch NgRX Action.
    this.itemsSubject$.next(this.items);
  }

  deleteItem(item: Item) {
    const items = this.items.filter((_item) => _item.id !== item.id);
    this.items = items;
    this.itemsSubject$.next(items);
  }
}
