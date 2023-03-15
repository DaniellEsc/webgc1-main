import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormscontactoComponent } from './formscontacto.component';

describe('FormscontactoComponent', () => {
  let component: FormscontactoComponent;
  let fixture: ComponentFixture<FormscontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormscontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormscontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
