import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageUploadClassifierComponent } from "./image-upload-classifier.component";

describe("ImageClassifierComponent", () => {
  let component: ImageUploadClassifierComponent;
  let fixture: ComponentFixture<ImageUploadClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadClassifierComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
