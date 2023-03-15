import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerfilEmpresarialComponent } from './list-perfil-empresarial.component';

describe('ListPerfilEmpresarialComponent', () => {
  let component: ListPerfilEmpresarialComponent;
  let fixture: ComponentFixture<ListPerfilEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPerfilEmpresarialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPerfilEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
