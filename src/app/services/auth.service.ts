import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public baseUrl: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

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
    localStorage.removeItem("token");
  }
}
