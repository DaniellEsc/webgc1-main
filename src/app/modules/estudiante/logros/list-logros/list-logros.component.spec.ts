import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogrosComponent } from './list-logros.component';

describe('ListLogrosComponent', () => {
  let component: ListLogrosComponent;
  let fixture: ComponentFixture<ListLogrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLogrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
