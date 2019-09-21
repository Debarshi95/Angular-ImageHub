import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public baseUrl: string = "http://localhost:8000/api";
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  loginUser(user): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user, {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      })
    });
  }

  registerUser(user): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user, {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      })
    });
  }

  logout() {
    this.tokenService.destroyToken();
  }
}
