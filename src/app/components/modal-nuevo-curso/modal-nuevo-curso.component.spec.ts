import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoCursoComponent } from './modal-nuevo-curso.component';

describe('ModalNuevoCursoComponent', () => {
  let component: ModalNuevoCursoComponent;
  let fixture: ComponentFixture<ModalNuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
