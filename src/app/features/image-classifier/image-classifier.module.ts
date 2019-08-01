import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageUploadClassifierComponent } from "./containers/image-upload-classifier/image-upload-classifier.component";
import { ImageClassifierRoutingModule } from "./image-classifier-routing.module";

@NgModule({
  declarations: [ImageUploadClassifierComponent],
  imports: [CommonModule, ImageClassifierRoutingModule]
})
export class ImageClassifierModule {}
