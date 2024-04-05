import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/auth/AuthResponse';

import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  // criar usuario
  signupUser(requestData: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestData
    );
  }

  authUser(requestData: AuthRequest):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`,
      requestData
    )
  }
}
