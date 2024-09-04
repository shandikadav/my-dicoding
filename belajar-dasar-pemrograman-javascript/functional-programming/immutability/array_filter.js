const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "Ron",
    score: 70,
  },
  {
    name: "Jeff",
    score: 81,
  },
  {
    name: "Thomas",
    score: 90,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 80
);

console.log(eligibleForScholarshipStudents);
