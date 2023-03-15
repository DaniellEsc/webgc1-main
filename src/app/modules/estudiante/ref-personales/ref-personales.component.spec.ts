import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefPersonalesComponent } from './ref-personales.component';

describe('RefPersonalesComponent', () => {
  let component: RefPersonalesComponent;
  let fixture: ComponentFixture<RefPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
