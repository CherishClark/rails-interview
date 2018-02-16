import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Student } from './students/student.model'
import 'rxjs/add/operator/map';
import { MatSortModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@Injectable()
export class StudentsService {
  private studentsUrl = 'students';

  constructor(
    private http: HttpClient
    ) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
}
