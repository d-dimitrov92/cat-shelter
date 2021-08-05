import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;
  options: Object;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'kLnJOFSBaTMzpQSdw77drGZ8k6WUWAMVzYQxyaD9',
        'X-Parse-REST-API-Key': 'pqL2caEE2JnftImUN7oMUvprHFskzIiNAM0OZhkg',
        'X-Parse-Revocable-Session': '1',
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/login`, data, this.options).pipe(
      tap((user) => this.user = user)
    );
  }

  register(data: { username: string, email: string, password: string }) {
    return this.http.post<IUser>(`${apiURL}/users`, data, this.options).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo(id: string) {
    return this.http.get<IUser>(`${apiURL}/users/${id}`, this.options).pipe(
      tap((user) => this.user = user)
    );
  }

  logout() {
    return this.http.get(`${apiURL}/logout`, this.options);
  }
}
