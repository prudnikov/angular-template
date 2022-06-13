import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ConfirmDeleteModalOptions } from './confirm-delete';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteComponent implements OnInit {
  @Input()
  modalIdentifier = 'default-modal-identifier';

  @Input()
  title = 'Are you sure you want to delete?';

  @Input()
  options?: ConfirmDeleteModalOptions;

  @Input()
  autostart = true;

  @Input()
  closable = true;

  @Input()
  dismissable = true;

  @Input()
  escapable = true;

  @Output()
  confirm = new EventEmitter<void>();

  @Output()
  cancel = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
