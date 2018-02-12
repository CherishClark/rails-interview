import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class StudentsService {
  private url = 'students/js'

  constructor(private http: Http) { }

  getStudents() {
    return this.http.get(this.url).map(res=> res.json())
  }

}
