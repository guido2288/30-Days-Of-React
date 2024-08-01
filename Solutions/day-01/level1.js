const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

// Declare an empty array;

const myArray = [];

// Declare an array with more than 5 number of elements

const myArray2 = ["Norway", "Austria", "Pakistan", "Spain" , "Chile", "Argentina"];

// Find the length of your array

const arrayLength = myArray2.length;

// Get the first item, the middle item and the last item of the array

const firstItem = myArray2[0];
const middleItem = myArray2[ myArray2.length / 2 ];
const lastItem = myArray2[myArray2.length - 1];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = new Array(33 , "Guido" , true , "Pedro", 9999 , false);
const mixedDataTypesLength = mixedDataTypes.length;

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = new Array("Facebook", "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon");

// Print the array using console.log()

console.log(itCompanies)

// Print the number of companies in the array

console.log( `Number of companies: ${itCompanies.length}`);

// Print the first company, middle and last company

console.log(`First company: ${itCompanies[0]}`);
console.log(`Middle company: ${itCompanies[Math.floor(itCompanies.length / 2 )]}`);
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`);

// Print out each company

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);   
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());   
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let setence = "";
for (let i = 0; i < itCompanies.length; i++) {
    i === itCompanies.length - 1 ? setence += `${itCompanies[i]} are bit IT companies` : setence += `${itCompanies[i]}, `
}

console.log(setence)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function checkCompany (company) {
    return !itCompanies.find(name => name === company) ? "Company is not found" : itCompanies.find(name => name === company)
     
}

console.log(checkCompany("Microsoft"))

// Filter out companies which have more than one 'o' without the filter method
let companiesWithTwoo = [];
for (let i = 0; i < itCompanies.length; i++) {
    const company = itCompanies[i].split("");
    let cantidad = 0
    company.forEach(element => {
        element === "o" && cantidad++        
    });
    cantidad > 1 && companiesWithTwoo.push(itCompanies[i]) 
}

// Sort the array using sort() method

const sortedArray = itCompanies.sort();
console.log(`Sorted Array: ${sortedArray}`)

// Reverse the array using reverse() method
const reverseArray = itCompanies.reverse();
console.log(`Reversed Array: ${sortedArray}`)

// Slice out the first 3 companies from the array

const sliceArray = countries.slice(0 , 3);

// Slice out the last 3 companies from the array

const sliceOutArray = countries.slice( -3);

