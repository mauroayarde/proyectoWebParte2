import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionEliminacionComponent } from './validacion-eliminacion.component';

describe('ValidacionEliminacionComponent', () => {
  let component: ValidacionEliminacionComponent;
  let fixture: ComponentFixture<ValidacionEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionEliminacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
