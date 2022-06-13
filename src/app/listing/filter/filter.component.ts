import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemFilter } from '../listing.types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output()
  filterChange = new EventEmitter<ItemFilter>();

  constructor() {}

  ngOnInit(): void {}
}
