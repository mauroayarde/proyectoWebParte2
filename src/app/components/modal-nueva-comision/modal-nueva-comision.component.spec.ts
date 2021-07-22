import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaComisionComponent } from './modal-nueva-comision.component';

describe('ModalNuevaComisionComponent', () => {
  let component: ModalNuevaComisionComponent;
  let fixture: ComponentFixture<ModalNuevaComisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaComisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
