import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  apiurl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
// get users from j.son service
  getByCode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  // post users in j.son server
  procedRegister(inputData: any) {
    return this.http.post(this.apiurl, inputData);
  }
  // get userdata from sessionstorage.
  isLogedIn() {
    return sessionStorage.getItem('username') != null;
  }
  getUserPassword() {
    return sessionStorage.getItem('password') != null
      ? sessionStorage.getItem('password')?.toString()
      : '';
  }
}
