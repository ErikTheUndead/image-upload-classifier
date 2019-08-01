import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "image-classifier",
    loadChildren: () =>
      import("src/app/features/image-classifier/image-classifier.module").then(
        m => m.ImageClassifierModule
      )
  }
  // { path: "", redirectTo: "/image-classifier/upload", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
