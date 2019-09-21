import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }
  // User login method
  loginUser(user: FormGroup) {
    console.log(user);
    this.authService.loginUser(user.value).subscribe(
      res => console.log(res),
      err => {
        console.log(err);
        this.setServerErrors(err);
        console.log(this.loginForm);
      }
    );
  }

  // Method to set and remove server error response to user form
  setServerErrors(err) {
    if (err.error) {
      this.loginForm.setErrors({ serverError: err.error.message });
    } else {
      this.loginForm.setErrors({ serverError: null });
    }

    if (err.error.errors) {
      this.loginForm
        .get("email")
        .setErrors({ serverError: err.error.errors.email });
      this.loginForm
        .get("password")
        .setErrors({ serverError: err.error.errors.password });
    } else {
      this.loginForm.get("email").setErrors({ serverError: null });
      this.loginForm.get("password").setErrors({ serverError: null });
    }
  }
}
