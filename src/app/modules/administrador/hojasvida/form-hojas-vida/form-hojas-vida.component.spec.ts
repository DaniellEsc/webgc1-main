import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHojasVidaComponent } from './form-hojas-vida.component';

describe('FormHojasVidaComponent', () => {
  let component: FormHojasVidaComponent;
  let fixture: ComponentFixture<FormHojasVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHojasVidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHojasVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
