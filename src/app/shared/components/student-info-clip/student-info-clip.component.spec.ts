import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoClipComponent } from './student-info-clip.component';

describe('StudentInfoClipComponent', () => {
  let component: StudentInfoClipComponent;
  let fixture: ComponentFixture<StudentInfoClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoClipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
