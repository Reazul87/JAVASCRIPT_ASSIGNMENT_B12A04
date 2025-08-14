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