import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  baseUrl: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  sendImage(fd): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload`, fd);
  }
}
