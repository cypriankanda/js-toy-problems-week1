const readline = require("readline-sync");

function gradeGenerator(marks) {
    if (marks > 79) return 'A';
    else if (marks >= 60) return 'B';
    else if (marks >= 50) return 'C';
    else if (marks >= 40) return 'D';
    else return 'E';
}

const marks = parseInt(readline.question("Enter student marks (0-100): "), 10);

if (marks >= 0 && marks <= 100) {
    console.log(`Grade: ${gradeGenerator(marks)}`);
} else {
    console.log("Invalid input! Please enter a number between 0 and 100.");
}
