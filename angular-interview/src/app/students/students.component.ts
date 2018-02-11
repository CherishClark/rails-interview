import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student = {
    id: 1,
    firstname: "Morty",
    lastname: "Smith",
    favoritecolor: "Green",
    favoritefood: "Pickles",
    favoritemovie: "The Fly",
  }

  constructor() { }

  ngOnInit() {
  }

}
