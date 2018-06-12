  import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { HttpClient , HttpParams, HttpHeaders } from '@angular/common/http';
import { ITask } from '../models/task';

import * as jwt from "angular2-jwt-simple";

@Injectable()
export class CloudService {
    private url: string;

    constructor(private http: HttpClient)  {
      this.url = environment.apiUrl;
    }

    public getTasks(){        
      return this.http.get<ITask[]>(`${this.url}/tasks`);
    } 

    public addTask(taskName: string){   
      const body = new HttpParams().set('task', taskName);
      const headers = { 
            headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Bearer ${environment.token}`)
      };

      return this.http.post(`${this.url}/task`, body.toString(), headers);
    }     
    
}