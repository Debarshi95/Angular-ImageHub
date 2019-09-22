import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  public images: any;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getImages();
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.images = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImages() {
    this.imageService.getImages().subscribe(
      res => {
        console.log(res);
        this.createImageFromBlob(res);
        console.log(this.images);
      },
      err => console.log(err)
    );
  }
}
