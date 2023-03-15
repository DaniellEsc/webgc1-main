import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfertasLaboralesComponent } from './list-ofertas-laborales.component';

describe('ListOfertasLaboralesComponent', () => {
  let component: ListOfertasLaboralesComponent;
  let fixture: ComponentFixture<ListOfertasLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfertasLaboralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfertasLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
