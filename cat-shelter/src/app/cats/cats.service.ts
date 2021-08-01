import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICat } from '../shared';

@Injectable()
export class CatsService {
  options: object;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'kLnJOFSBaTMzpQSdw77drGZ8k6WUWAMVzYQxyaD9',
        'X-Parse-REST-API-Key': 'pqL2caEE2JnftImUN7oMUvprHFskzIiNAM0OZhkg'
      })
    }
  }

  loadCats() {
    return this.http.get<ICat[]>(`https://parseapi.back4app.com/classes/Cat`, this.options);
  }
}