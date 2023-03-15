import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapacitacionesComponent } from './list-capacitaciones.component';

describe('ListCapacitacionesComponent', () => {
  let component: ListCapacitacionesComponent;
  let fixture: ComponentFixture<ListCapacitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapacitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
