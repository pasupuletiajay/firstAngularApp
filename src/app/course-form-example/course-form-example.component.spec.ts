import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormExampleComponent } from './course-form-example.component';

describe('CourseFormExampleComponent', () => {
  let component: CourseFormExampleComponent;
  let fixture: ComponentFixture<CourseFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
