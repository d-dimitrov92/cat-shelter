import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICat } from '../shared/interfaces';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class CatsService {
  options: object;

  constructor(private http: HttpClient) {
    this.options = {}
  }

  loadCats() {
    return this.http.get<ICat[]>(`${API_URL}/cats`);
  }

  saveCat(data: any) {
    return this.http.post<ICat>(`${API_URL}/cats`, data, { withCredentials: true });
  }
}