import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFirstName'
})
export class UniqueFirstNamePipe implements PipeTransform {

  transform(sortedData: any[]  ){

    let allStudentsFirstNames = []

    for (let student of sortedData){
      allStudentsFirstNames.push(student.firstname)
    }
    for (let student of sortedData) {
     
     if (allStudentsFirstNames.filter(firstname => student.firstname).length > 1)
       return allStudentsFirstNames.filter(student)
     // student.firstname + " " + student.lastname.charAt(0) + "."
     else
       return student.firstname
    }
  }
}