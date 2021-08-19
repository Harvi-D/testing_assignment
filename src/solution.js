/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let above = [];
  let below = [];
  for (let i = 0; i < students.length; i++){
    (students[i].score > score) ? above.push(students[i]) : below.push(students[i]);
  }
  return [below, above] ;
}






module.exports = partitionStudentsByScore;
