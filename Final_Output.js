// Start: Problem-01 : Train TT's Fine Calculator ?

function totalFine(fare) {
  // You have to write your code here
  if (fare <= 0) {
    return "Invalid";
  } else if (typeof fare !== "number") {
    return "Invalid";
  }
  let fine = fare + (fare * 20) / 100 + 30;
  return fine;
}

// Start: Problem-02 : Clean & Capitalize Characters ?

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let spaceCut = str.replaceAll(" ", "");
  let capitalized = spaceCut.toUpperCase();
  return capitalized;
}

// Start: Problem-03 : FIFA Best Team Award ?

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 != "object" || typeof player2 != "object") {
    return "Invalid";
  }

  let fareTeam1 = player1.foul + player1.cardR + player1.cardY;
  let fareTeam2 = player2.foul + player2.cardR + player2.cardY;

  if (fareTeam1 < fareTeam2) {
    return player1.name;
  } else if (fareTeam1 == fareTeam2) {
    return "tie";
  }
  return player2.name;
}

// Start: Problem-04: Same Same But Different  😕?

function isSame(arr1, arr2) {
  // You have to write your code here
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }

  if (arr1.length === arr2.length) {
    let count = 0;
    for (let initial = 0; initial < arr1.length; initial++) {
      if (arr2.includes(arr1[initial])) {
        count++;
      }
    }
    if (count == arr1.length) {
      return true;
    }
  }
  return false;
}

// Start: Problem-05: Exam Result Report Generator ?

function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }

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
