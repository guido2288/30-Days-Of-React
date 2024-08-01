// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  

// - Compare the value of (min - average) and (max - average), use abs() method

const students = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age 
const sortedStudents = students.sort((a,b) => a -b);
const minAge = sortedStudents[0]
const maxAge = sortedStudents[sortedStudents.length -1];

// - Find the median age(one middle item or two middle items divided by two) 

const median = sortedStudents[Math.floor(sortedStudents.length / 2)];

// - Find the average age(all items divided by number of items) 
const average = students.reduce( (number, acum) => acum + number , 0 ) / students.length;

// - Find the range of the ages(max minus min) 
const range = maxAge - minAge;
