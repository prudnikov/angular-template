import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditModalComponent } from './item-edit-modal.component';

describe('EditModalComponent', () => {
  let component: ItemEditModalComponent;
  let fixture: ComponentFixture<ItemEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
