import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/students/js', pathMatch: 'full' },
  { path: 'students/js', component: StudentsComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes),
  HttpClientModule ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {} 