import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefLaboralComponent } from './pref-laboral.component';

describe('PrefLaboralComponent', () => {
  let component: PrefLaboralComponent;
  let fixture: ComponentFixture<PrefLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
