import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImageUploadClassifierComponent } from "./containers/image-upload-classifier/image-upload-classifier.component";

const routes: Routes = [
  { path: "upload", component: ImageUploadClassifierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageClassifierRoutingModule {}
