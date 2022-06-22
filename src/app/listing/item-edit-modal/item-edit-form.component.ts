import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../listing.types';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-edit-form',
  templateUrl: './item-edit-form.component.html',
  styleUrls: ['./item-edit-form.component.scss'],
})
export class ItemEditFormComponent implements OnInit {
  @Input()
  item?: Item;

  @Output()
  changesSaved = new EventEmitter<Item>();

  form = new FormGroup({
    id: new FormControl<null | number>(null),
    name: new FormControl<string>(''),
  });

  constructor() {}

  ngOnInit(): void {
    if (this.item === undefined)
      console.warn('app-item-edit-form require `item` input.');
    if (this.item) this.form.reset(this.item);
  }

  handleSubmit($event: MouseEvent) {
    $event.preventDefault();

    this.changesSaved.emit({
      ...this.item,
      id: this.item?.id ?? 0,
      name: 'new name',
    });
  }

  handleReset($event: MouseEvent) {
    $event.preventDefault();
  }

  handleCancel($event: MouseEvent) {
    $event.preventDefault();
  }
}
