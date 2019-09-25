import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  successResponse: any;
  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private router: Router
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
    this.authService.changePassword(user.value).subscribe(
      res => {
        console.log(res);
        this.successResponse = res.message;
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 3000);
      },
      err => {
        console.log(err);
        this.setServerErrors(err);
      }
    );
  }

  // Method to set and remove server error response to user form
  setServerErrors(err) {
    if (err.error) {
      this.changePasswordForm.setErrors({ serverError: err.error.message });
    } else {
      this.changePasswordForm.setErrors({ serverError: null });
    }

    if (err.error.errors) {
      this.changePasswordForm
        .get("email")
        .setErrors({ serverError: err.error.errors.email });
      this.changePasswordForm
        .get("password")
        .setErrors({ serverError: err.error.errors.password });
      this.changePasswordForm
        .get("password_confirmation")
        .setErrors({ serverError: err.error.errors.password_confirmation });
      this.changePasswordForm
        .get("resetToken")
        .setErrors({ serverError: err.error.errors.resetToken });
    } else {
      this.changePasswordForm.get("email").setErrors({ serverError: null });
      this.changePasswordForm.get("password").setErrors({ serverError: null });
      this.changePasswordForm
        .get("password_confirmation")
        .setErrors({ serverError: null });
      this.changePasswordForm
        .get("resetToken")
        .setErrors({ serverError: null });
    }
  }
}
