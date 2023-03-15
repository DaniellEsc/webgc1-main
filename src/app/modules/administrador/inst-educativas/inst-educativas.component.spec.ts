import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstEducativasComponent } from './inst-educativas.component';

describe('InstEducativasComponent', () => {
  let component: InstEducativasComponent;
  let fixture: ComponentFixture<InstEducativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstEducativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstEducativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
