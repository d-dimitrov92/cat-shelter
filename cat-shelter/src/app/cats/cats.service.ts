import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICat } from '../shared/interfaces';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class CatsService {

  constructor(private http: HttpClient) { }

  loadCats() {
    return this.http.get<any>(`${API_URL}/cats`);
  }

  saveCat(data: any) {
    return this.http.post<ICat>(`${API_URL}/cats`, data, { withCredentials: false });
  }

  loadCat(id: string) {
    return this.http.get<ICat>(`${API_URL}/cats/${id}`)
  }
}