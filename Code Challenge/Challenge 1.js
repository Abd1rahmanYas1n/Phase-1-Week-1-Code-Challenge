// we start by creating a function which will display an calculate the childrens grade

function calculateStudentGrade(){

    let marks = prompt ("student marks between (0-100)")

    marks = Number (marks);

    if (isNaN(marks) || marks <0 || marks > 100 ){

        alert ("invalid! please use number between 0-100 ")
        return;
    }
}

// we then determine the students grade based on grade using if and else if 

let grade;
if (marks >= 80) {
    grade = "A"
} else if (marks >= 60){
    grade = 'B'
} else if (marks >= 50) {
    grade = 'C'
} else if (marks >= 40){
        grade = 'D'
}else {
    grade = 'E'
}

// We then give results to user 
alert (` The students got: ${grade}`);

// lastly, we need to call the function
calculateStudentGrade ();