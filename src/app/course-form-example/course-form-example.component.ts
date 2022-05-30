import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form-example',
  templateUrl: './course-form-example.component.html',
  styleUrls: ['./course-form-example.component.css']
})
export class CourseFormExampleComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
    //console.log(this.form);
  }

  get f() {
    console.log(this.form.value.topics);
    return this.form;
  }

  removeTopic(topic: any) {
    //(this.form.value.topics as object)

  }


}
