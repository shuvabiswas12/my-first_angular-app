import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form = new FormGroup({
    // username: new FormControl('', Validators.required),
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(6),
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  get account() {
    return this.form.get('account');
  }

  get username() {
    return this.account?.get('username');
  }

  get password() {
    return this.account?.get('password');
  }

  formSubmit() {
    console.log(this.form);

    if (this.form?.['status'] === 'INVALID') {
      this.form.setErrors({
        invalidLogin: 'Password and username are invalid.',
      });
    }
  }
}
