import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormperfilComponent } from './formperfil.component';

describe('FormperfilComponent', () => {
  let component: FormperfilComponent;
  let fixture: ComponentFixture<FormperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
