import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFirstName'
})
export class UniqueFirstNamePipe implements PipeTransform {

  transform(sortedData: any[]  ){

    let allStudentsFirstNames = []

    if (sortedData == null) {
      return sortedData;
    }

    var updatedFirstNames = []

    for (let student of sortedData){
      allStudentsFirstNames.push(student.firstname)
    }

    for (let student of sortedData) {

      if (allStudentsFirstNames.filter((s) => (s == student.firstname)).length > 1) {
        student.firstname = student.firstname + " " + student.lastname.charAt(0) + "."
      }
      updatedFirstNames.push(student)
    }

    return updatedFirstNames
  }
}