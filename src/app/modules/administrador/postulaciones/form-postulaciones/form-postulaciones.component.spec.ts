import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostulacionesComponent } from './form-postulaciones.component';

describe('FormPostulacionesComponent', () => {
  let component: FormPostulacionesComponent;
  let fixture: ComponentFixture<FormPostulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostulacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
