import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl("")
    });
  }

  resetPassword(user: FormGroup) {
    this.authService
      .resetPassword(user.value)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
