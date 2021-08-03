import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }


  login(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;
    //this.userService.login();
    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
  }
}
