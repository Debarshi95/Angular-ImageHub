import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public tokenService: TokenService) {}

  ngOnInit() {}
}
