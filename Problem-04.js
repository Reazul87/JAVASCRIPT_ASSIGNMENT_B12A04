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