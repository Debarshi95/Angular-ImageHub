import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.css"]
})
export class UploadImageComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.uploadForm = new FormGroup({
      caption: new FormControl(""),
      image: new FormControl("")
    });
  }

  handleSelectedImage(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.uploadForm.get("image").setValue(file);
    }
  }

  uploadImage() {
    const fd = new FormData();
    fd.append("caption", this.uploadForm.get("caption").value);
    fd.append("image", this.uploadForm.get("image").value);
    console.log(this.uploadForm);
    this.imageService
      .sendImage(fd)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
