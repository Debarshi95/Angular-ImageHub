import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      password_confirmation: new FormControl("")
    });
  }
  // User login method
  registerUser(user: FormGroup) {
    console.log(user);
    this.authService.registerUser(user.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/dashboard"]);
      },
      err => {
        console.log(err);
        this.setServerErrors(err);
        console.log(this.registerForm);
      }
    );
  }

  // Method to set and remove server error response to user form
  setServerErrors(err) {
    if (err.error) {
      this.registerForm.setErrors({ serverError: err.error.message });
    } else {
      this.registerForm.setErrors({ serverError: null });
    }

    if (err.error.errors) {
      this.registerForm
        .get("firstname")
        .setErrors({ serverError: err.error.errors.firstname });
      this.registerForm
        .get("lastname")
        .setErrors({ serverError: err.error.errors.lastname });
      this.registerForm
        .get("email")
        .setErrors({ serverError: err.error.errors.email });
      this.registerForm
        .get("password")
        .setErrors({ serverError: err.error.errors.password });
      this.registerForm
        .get("password_confirmation")
        .setErrors({ serverError: err.error.errors.password_confirmation });
    } else {
      this.registerForm.get("firstname").setErrors({ serverError: null });
      this.registerForm.get("lastname").setErrors({ serverError: null });
      this.registerForm.get("email").setErrors({ serverError: null });
      this.registerForm.get("password").setErrors({ serverError: null });
      this.registerForm
        .get("password_confirmation")
        .setErrors({ serverError: null });
    }
  }
}
