import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  constructor(private studentsService: StudentsService) { }

  students = []

  ngOnInit() {
    this.studentsService.getStudents().
    subscribe(students => this.students = students)
  }

}
