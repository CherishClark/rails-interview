module StudentHelper

  def unique_firstname(student)
    allStudentFirstNames = []

    Student.all.each do |student|
      allStudentFirstNames << student.firstname
    end   

    if allStudentFirstNames.count(student.firstname) > 1
      return student.firstname + " " + student.lastname[0]+ "."
    else
      return student.firstname
    end
  end
  
end