import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { HttpClient , HttpParams, HttpHeaders } from '@angular/common/http';
import { ITask } from '../models/task';
import { Observable} from 'rxjs/Rx';


@Injectable()
export class FileUploadService {
    private url: string;

    constructor(private http: HttpClient)  {
      this.url = environment.apiUrl;
    }    

    public postFile(fileToUpload: File){      
      const formData: FormData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      /* In Angular 5, including the header Content-Type can invalidate your request */
      const headers = { 
            headers: new HttpHeaders().append('Accept', 'application/json')
      };

      return this.http.post(`${this.url}/file`, formData, headers);
    }   

    public handleError(error: any): boolean{
      console.log(error);
      return true;
    }
    
}