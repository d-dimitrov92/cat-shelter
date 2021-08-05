import { Component } from '@angular/core';
import { IUser } from './shared/interfaces';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-shelter';

  id = this.userService.user?.objectId || '';

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(
    private userService: UserService
  ) { 
    this.userService.getProfileInfo(this.id).subscribe({
      error: ()=> {
        this.userService.user = null;
      }
    })
  }
}
