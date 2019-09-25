import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    public tokenService: TokenService,
    public authService: AuthService
  ) {}

  ngOnInit() {}
}
