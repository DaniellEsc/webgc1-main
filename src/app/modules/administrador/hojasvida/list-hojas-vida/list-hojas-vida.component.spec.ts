import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHojasVidaComponent } from './list-hojas-vida.component';

describe('ListHojasVidaComponent', () => {
  let component: ListHojasVidaComponent;
  let fixture: ComponentFixture<ListHojasVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHojasVidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHojasVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
