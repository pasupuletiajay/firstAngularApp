import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  categories = [
    { id: 1, name: 'dev' },
    { id: 2, name: 'languages' },
    { id: 3, name: 'economics' },
  ]
  submit(course: any) {
    console.log(course)
  }

}
