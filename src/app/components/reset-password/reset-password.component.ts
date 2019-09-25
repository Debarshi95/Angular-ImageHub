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
  successResponse: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl("")
    });
  }

  resetPassword(user: FormGroup) {
    this.authService.resetPassword(user.value).subscribe(
      res => {
        console.log(res);
        this.successResponse = res.message;
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
      this.resetPasswordForm.setErrors({ serverError: err.error.message });
    } else {
      this.resetPasswordForm.setErrors({ serverError: null });
    }

    if (err.error.errors) {
      this.resetPasswordForm
        .get("email")
        .setErrors({ serverError: err.error.errors.email });
    } else {
      this.resetPasswordForm.get("email").setErrors({ serverError: null });
    }
  }
}
