import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class StudentsService {
  private studentsUrl = 'students';

  constructor(
    private http: Http
    ) { }

  getStudents() {
    return this.http.get(this.studentsUrl).map(res=> res.json())
  }
}
