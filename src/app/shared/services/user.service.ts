import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../Base/Env';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _HttpClient: HttpClient) {}

  getUsersPage(pageNumber: string): Observable<any> {
    return this._HttpClient.get(`${env.baseUrl}/users?page=${pageNumber}`);
  }

  getUserById(userId: string): Observable<any> {
    return this._HttpClient.get(`${env.baseUrl}/users/${userId}`);
  }
}
