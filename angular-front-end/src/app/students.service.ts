import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Student } from './students/student.model'
import 'rxjs/add/operator/map';
import { MatSortModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class StudentsService {
  private studentsUrl = 'students';

  constructor(
    private http: HttpClient
    ) { }

  getStudents(): Promise<any> {
    return fetch(this.studentsUrl).then(res => res.json()).catch(error => console.log(error));
  }
}

