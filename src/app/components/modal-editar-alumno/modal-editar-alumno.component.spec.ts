import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAlumnoComponent } from './modal-editar-alumno.component';

describe('ModalEditarAlumnoComponent', () => {
  let component: ModalEditarAlumnoComponent;
  let fixture: ComponentFixture<ModalEditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
