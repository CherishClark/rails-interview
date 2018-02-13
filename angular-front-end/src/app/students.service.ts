import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class StudentsService {
  private studentsUrl = 'http://localhost:3000/students'

  constructor(
    private http: Http
    ) { }

  getStudents() {
    return this.http.get(this.studentsUrl).map((response: Response) => response.json())
  }

}
