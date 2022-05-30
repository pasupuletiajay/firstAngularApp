import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Twitter' },
    { id: 4, name: 'FB' },
  ]
  log(x: any) {
    console.log(x);
  }
  submit(x: any) {
    console.log(x);
  }

}
