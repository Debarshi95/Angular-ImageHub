import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  public images = [];
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe(
      res => {
        this.images = res.images;
        // console.log(this.images[0].url);
      },
      error => {
        console.log(error);
      }
    );
  }
}
