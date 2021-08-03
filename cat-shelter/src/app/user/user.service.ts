import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): void {

  }

  register(data: { username: string, email: string, password: string }) {
    return this.http.post<IUser>(`${apiURL}/users`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  logout(): void {

  }
}
