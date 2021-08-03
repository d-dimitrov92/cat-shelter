import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      // rePass: ['', [Validators.required, sameValueAsFactory(
      //   () => this.form?.get('password'), this.killSubscription
      // )]]
    });
  }

  register(): void {
    if (this.form.invalid) { return; }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // validateRePass(control: FormControl) {
  //   const { root } = control;
  //   const pass = root.get('password');
  //   const rePass = root.get('rePass');

  //   if (!pass || !rePass) {
  //     return null;
  //   }

  //   const passValue = pass.value;
  //   const rePassValue = rePass.value;

  //   const result = passValue === rePassValue ? null : { passDontMatch: true }
  //   return result;
  // }
}
