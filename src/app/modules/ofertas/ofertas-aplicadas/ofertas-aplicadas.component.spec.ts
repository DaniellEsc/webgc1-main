import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAplicadasComponent } from './ofertas-aplicadas.component';

describe('OfertasAplicadasComponent', () => {
  let component: OfertasAplicadasComponent;
  let fixture: ComponentFixture<OfertasAplicadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasAplicadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
