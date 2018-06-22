import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  public fileToUpload: File = null;
  public uploadStatus: string = '';
  public loading: boolean = false;
  
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.uploadStatus = '';
    this.loading = false;
  }
  
  public ngOnDestroy(): void {
    this.uploadStatus = '';
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  public uploadFile() {
    this.uploadStatus = '';
    this.loading = true;

    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
        this.uploadStatus = "File Upload successfully";
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
