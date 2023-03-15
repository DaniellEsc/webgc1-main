import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstFormalComponent } from './inst-formal.component';

describe('InstFormalComponent', () => {
  let component: InstFormalComponent;
  let fixture: ComponentFixture<InstFormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstFormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
