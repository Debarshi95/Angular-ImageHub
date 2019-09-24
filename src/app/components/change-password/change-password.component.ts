import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      password_confirmation: new FormControl(),
      resetToken: new FormControl("")
    });
    this.getToken();
  }

  getToken() {
    this.changePasswordForm.patchValue({
      resetToken: this.activateRoute.snapshot.queryParamMap.get("token")
    });
    console.log(this.changePasswordForm);
  }

  changePassword(user: FormGroup) {
    this.authService
      .changePassword(user.value)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
