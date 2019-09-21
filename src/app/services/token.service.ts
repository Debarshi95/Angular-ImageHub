import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  checkToken(): boolean {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
