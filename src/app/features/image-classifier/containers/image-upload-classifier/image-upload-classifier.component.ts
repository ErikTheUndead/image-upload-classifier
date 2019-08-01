import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as mobilenet from "@tensorflow-models/mobilenet";

export interface Prediction {
  className: string;
  probability: number;
}

@Component({
  selector: "app-image-upload-classifier",
  templateUrl: "./image-upload-classifier.component.html",
  styleUrls: ["./image-upload-classifier.component.scss"]
})
export class ImageUploadClassifierComponent implements OnInit {
  constructor() {}

  imageSrc: string;
  @ViewChild("img", { static: false }) imageEl: ElementRef;

  predictions: Prediction[];

  model: any;
  loading = true;

  async ngOnInit() {
    console.log("loading mobilenet model...");
    this.model = await mobilenet.load();
    console.log("Successfully loaded model!");
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }
}
