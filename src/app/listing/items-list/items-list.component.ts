import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Item } from '../listing.types';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent implements OnInit {
  @Input()
  items: Item[] = [];

  @Output()
  editItem = new EventEmitter<Item>();

  @Output()
  deleteItem = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}
}
