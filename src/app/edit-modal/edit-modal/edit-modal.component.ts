import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ConfirmDeleteModalOptions } from '../../confirm-delete/confirm-delete';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModalComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
