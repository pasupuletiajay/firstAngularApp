import { UsernameValidators } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  login() {
    //let isValid=authService.login(this.form.value);
    //if(!isValid){}
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
