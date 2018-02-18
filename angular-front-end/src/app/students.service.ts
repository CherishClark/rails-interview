import { Injectable } from '@angular/core';
//import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
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

    const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {            
  headers: new HttpHeaders(headerDict), 
};

// return this.http.get(this.studentsUrl, requestOptions)

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json')
  

    // const studentsRequest = new Request(this.studentsUrl)


    return fetch(this.studentsUrl, {
      method: "get",
      headers: myHeaders,
    }).then(res => res.json()).catch(error => console.log(error));
  }
}

