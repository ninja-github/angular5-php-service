import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FileUploadComponent } from './file-upload/file-upload.component';

export const routes: Routes = [

  { //Default application path
    path: '',
    component: HomeComponent
  },       
  {
    path: 'home',
    component: HomeComponent
  },           
  {
    path: 'file-upload',
    component: FileUploadComponent
  }    
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
