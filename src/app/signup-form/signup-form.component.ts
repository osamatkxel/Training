import { UsernameValidator } from './username.validators';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder, ValidationErrors} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, 
                                    Validators.maxLength(10), 
                                    Validators.minLength(3),
                                    UsernameValidator.cannotContainSpace
                                    ],
                                    UsernameValidator.asyncUnique),
      password: new FormControl('', [Validators.required])
    });
  }
  get username() {
    return this.form.controls['username'];
  }

  get password() {
    return this.form.get('password')?.value;
  }

  changed(x: any) {
    console.log(x);
  }

  login() {
    // alert('hello')
    // let name = this.form.controls['username'].value;
    // let pass = this.password;
    // console.log(name+pass);
    this.form.setErrors({
      invalidLogin: true
    })
  }
  
}
