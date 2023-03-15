import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfAplicadasComponent } from './of-aplicadas.component';

describe('OfAplicadasComponent', () => {
  let component: OfAplicadasComponent;
  let fixture: ComponentFixture<OfAplicadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfAplicadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
