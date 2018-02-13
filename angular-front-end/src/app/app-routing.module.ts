import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes),
  HttpClientModule ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {} 