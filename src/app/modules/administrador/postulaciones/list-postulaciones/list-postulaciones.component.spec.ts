import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostulacionesComponent } from './list-postulaciones.component';

describe('ListPostulacionesComponent', () => {
  let component: ListPostulacionesComponent;
  let fixture: ComponentFixture<ListPostulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostulacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
