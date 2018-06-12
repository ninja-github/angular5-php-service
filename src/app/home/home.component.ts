import { Component } from '@angular/core';
import { CloudService } from '../service/cloud.service';
import { ITask } from '../models/task';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Home';  
  public modelTaskName: string;
  public tasks: ITask[];

  constructor(private cloudService: CloudService){    
    this.modelTaskName = '';
    this.tasks = [];
  }

  public sendMessage(){
    
  }

  public getTasks(){
    this.cloudService.getTasks().subscribe(response => {
        this.tasks = response;
        //console.log(this.tasks);
    });
  }    


  onSubmit() {   
    this.cloudService.addTask(this.modelTaskName).subscribe(response => {
        //console.log(response);
        this.getTasks();
      });
    }

}
