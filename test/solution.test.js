// Write your tests here!
const expect = require("chai").expect;
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudnetsByScore", () => {
    it("should return two arrays inside an array based on input score", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const expected = [
            [{ name: "Morgan Sutton", score: 7.4 }],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];
          const actual = partitionStudentsByScore(students, 8);
          expect(actual).to.eql(expected);
    })
})