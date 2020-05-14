import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_URL = environment.user_url;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.USER_URL);
  }

  getUser(id: number) {
    return this.http.get(this.USER_URL + "/" + id);
  }
}
