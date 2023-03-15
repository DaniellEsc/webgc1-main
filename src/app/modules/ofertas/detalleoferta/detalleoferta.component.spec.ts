import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleofertaComponent } from './detalleoferta.component';

describe('DetalleofertaComponent', () => {
  let component: DetalleofertaComponent;
  let fixture: ComponentFixture<DetalleofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleofertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
