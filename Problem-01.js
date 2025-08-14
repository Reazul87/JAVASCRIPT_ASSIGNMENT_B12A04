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