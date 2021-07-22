import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaAlumnoComponent } from './va-alumno.component';

describe('VaAlumnoComponent', () => {
  let component: VaAlumnoComponent;
  let fixture: ComponentFixture<VaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
