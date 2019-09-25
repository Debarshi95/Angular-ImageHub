import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  public image: any;
  public readonly imageType: string = "data:image/jpg;base64,";
  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getImages();
  }
  createImage(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.image = reader.result;
      },
      false
    );
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImages() {
    this.imageService.getImages().subscribe(
      data => {
        this.createImage(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
