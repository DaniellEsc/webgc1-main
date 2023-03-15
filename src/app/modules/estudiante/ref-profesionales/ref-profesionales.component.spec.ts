import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefProfesionalesComponent } from './ref-profesionales.component';

describe('RefProfesionalesComponent', () => {
  let component: RefProfesionalesComponent;
  let fixture: ComponentFixture<RefProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefProfesionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
