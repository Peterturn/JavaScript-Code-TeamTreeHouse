// function calculate_gpa
  // pass in student_grades
  function calculate_gpa(student_grades) {
    // set grade_total to 0
    let grade_total = 0;
    // for each grade in student_grades
    let num_of_grades = student_grades.length;
    for (let i = 0; i<num_of_grades; i++) {
      let grade = student_grades[i];
        // if grade is not a 1, 2, 3, or 4
      if (grade < 1 || grade > 4) {
        // print "invalid grade" with grade
        console.log("invalid grade: " + grade);
        // exit function with "can't complete calculation" message
        return "Can't complete calculation";
      } else {
        // else add grade to grade_total
        grade_total += student_grades[i];
      }

    }
     // set gpa to grade_total / number of grades
    const gpa = grade_total / num_of_grades;
     // return gpa
    return gpa;
  // end function
  }

  // set reggie_grades to 4, 4, 3, 4
  let reggie_grades = [4,4,3,4];
  // print the results of calling calculate_gpa with reggie_grades
  console.log(calculate_gpa(reggie_grades));

  // set dave_grades to 1, 2, 3, 2
  let dave_grades = [1,2,3,2]
  // print the results of calling calculate_gpa with dave_grades
  console.log(calculate_gpa(dave_grades));
