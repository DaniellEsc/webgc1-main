import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPerfilEmpresarialComponent } from './form-perfil-empresarial.component';

describe('FormPerfilEmpresarialComponent', () => {
  let component: FormPerfilEmpresarialComponent;
  let fixture: ComponentFixture<FormPerfilEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPerfilEmpresarialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPerfilEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
