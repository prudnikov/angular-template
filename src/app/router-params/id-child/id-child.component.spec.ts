import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdChildComponent } from './id-child.component';

describe('IdChildComponent', () => {
  let component: IdChildComponent;
  let fixture: ComponentFixture<IdChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
