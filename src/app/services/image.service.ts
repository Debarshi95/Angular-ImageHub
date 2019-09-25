import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  baseUrl: string = "http://localhost:8000/api";
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getImages(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/images`, { responseType: "blob" });
  }

  uploadImage(fd): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload`, fd, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tokenService.getToken()}`,
        "X-Requested-With": "XMLHttpRequest"
      })
    });
  }
}
