// Start: Problem-05: Exam Result Report Generator ?

function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return{finalScore: 0, pass: 0, fail: 0}}

  let totalMarks = 0;
  let passed = 0;
  let failed = 0;

  for (let mark of marks) {
    totalMarks += mark;

    if (mark >= 40) {
      passed++;
    } else {
      failed++;
    }
  }

  let average = totalMarks / marks.length;
  let finalScore = Math.round(average);

  let reportCard = { finalScore: finalScore, pass: passed, fail: failed };
  return reportCard;
}