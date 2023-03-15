import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiperfilocupacionlComponent } from './miperfilocupacionl.component';

describe('MiperfilocupacionlComponent', () => {
  let component: MiperfilocupacionlComponent;
  let fixture: ComponentFixture<MiperfilocupacionlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiperfilocupacionlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiperfilocupacionlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
