import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../listing.types';
import { NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-item-edit-modal',
  templateUrl: './item-edit-modal.component.html',
  styleUrls: ['./item-edit-modal.component.scss'],
})
export class ItemEditModalComponent implements OnInit {
  @Input()
  item?: Item;

  @Input()
  modal?: NgxSmartModalComponent;

  constructor() {}

  ngOnInit(): void {}
}
