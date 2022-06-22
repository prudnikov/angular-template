import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Item } from '../../listing.types';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemRowComponent implements OnInit {
  @Input()
  item!: Item;

  @Output()
  editItem = new EventEmitter<Item>();

  @Output()
  deleteItem = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}
}
