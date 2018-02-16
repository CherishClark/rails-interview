import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentsService } from '../students.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import {Sort} from '@angular/material';
import { MatSortModule, MatTableModule } from '@angular/material';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = []
  sortedData;

  dataSource = new StudentDataSource(this.studentsService);

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().
    subscribe(students => {this.students = students; this.sortedData = this.students.slice();});
  }

  sortData(sort: Sort) {
    const data = this.students.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'firstname': return compare(a.firstname.toLowerCase(), b.firstname.toLowerCase(), isAsc);
        case 'favoritefood': return compare(a.favoritefood.toLowerCase(), b.favoritefood.toLowerCase(), isAsc);
        case 'favoritemovie': return compare(a.favoritemovie.toLowerCase(), b.favoritemovie.toLowerCase(), isAsc);
        case 'favoritecolor': return compare(a.favoritecolor.toLowerCase(), b.favoritecolor.toLowerCase(), isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export class StudentDataSource extends DataSource<any> {
  constructor(private studentService: StudentsService) {
    super();
  }

  connect(): Observable<Student[]> {
    return this.studentService.getStudents()
  }

  disconnect() {}
}