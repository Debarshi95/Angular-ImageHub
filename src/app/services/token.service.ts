import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  setToken(token) {
    localStorage.setItem("token", token);
  }
  checkToken(): boolean {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  destroyToken() {
    localStorage.removeItem("token");
  }
}
