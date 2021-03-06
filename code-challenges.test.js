// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// a describe method that lists the name of the function OR naming of the particular test.
describe(noPurpleNoChartreuse, () => {

    it("takes in a array and returns a array with no purple or chartreuse", () => {
      expect(noPurpleNoChartreuse(colors1)).toEqual(["yellow", "blue", "pink", "green"])
      expect(noPurpleNoChartreuse(colors2)).toEqual(expect.arrayContaining(expected))
    })
  })

// b) Create the function that makes the test pass.

// filter(function noPurpleNoChartreuse(element){/*"purple", "chartreuse"*/})

// create a function that takes in a array of strings
// create a empty array variable 
// use a for loop to iterate through the array and push all values that are not purple or chartreuse in the new array
// return new array

function noPurpleNoChartreuse(l) {
    let newArr = [];
    for(let i = 0;i<l.length;i++){
      if(typeof l[i] !== 'purple', 'chartreuse') newArr.push(l[i]);
    }
    return newArr
  }

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe(minMax, () => {

    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
      expect(minMax(nums1)).toEqual([-8, 90])
      expect(minMax(nums2)).toEqual([5, 109])
    })
  })

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// describe(minMaxArray, () => {

//     it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
//       expect(minMaxArray(nums1)).toEqual([-8, 90])
//       expect(minMaxArray(nums2)).toEqual([5, 109])
//     })
//   })

// create a function that takes in a array of integers
// create a const that defines the smallest integer using the math.min method
// create a const that defines the biggest integer using the math.max
// return both values


// b) Create the function that makes the test pass.

function minMaxArray(nums){
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  return [min, max]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe(oneNoDups, () => {

    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
      expect(oneNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
      
    })
  })


// b) Create the function that makes the test pass.

// create a function that takes in arrays
// sent a const that uses the Set method to iterate and keep only the new values
// use .flat to return one array
// return the one array 

function oneNoDups(...arrs){
  const noDuplicates = [...new Set(arrs.flat())]
  return noDuplicates
}



// describe(noDoublesArray, () => {

//     it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//       expect(noDoublesArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    
//     })
//   })
