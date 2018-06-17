import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit, OnDestroy {
  public fileToUpload: File = null;
  public uploadStatus: string = '';
  
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.uploadStatus = '';
  }
  
  public ngOnDestroy(): void {
    this.uploadStatus = '';
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  public uploadFile() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
        this.uploadStatus = "File Upload successfully";
      }, error => {
        console.log(error);
      });
  }

}
