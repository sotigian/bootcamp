let myArray = [1,2,3,4,5];
// comment
// define getArrayAndMultiplyByNumber(array, number)
// for each element of the array do element * number
// store the result of the above back to the same place in the array
// return this array to the programme
function getArrayAndMultiplyByNumber(array, number) {
    let resultArray = []; // create an empty array
    for(i of array) {
        resultArray.push(i * number); // someArray.push() puts / adds a new element inside the someArray
    }
    // console.log(resultArray);
    return(resultArray);
}

let result = getArrayAndMultiplyByNumber(myArray, 2);
// console.log(myArray);
// console.log(result);

// define powerOf2OfNumber(number)
function powerOf2OfNumber(number) {
    return(number * number);
}
let k = powerOf2OfNumber(5);
// console.log(k);

// console.log(powerOf2OfNumber(10));

// function returnMyWholeName(firstName, lastName)
// firstName lastName, e.g. George Pasparakis <---- returnMyWholeName("George", "Pasparakis")

function returnMyWholeName(firstName, lastName, isCapital) {
    if(isCapital) {
        let upper = `${firstName} ${lastName}`.toUpperCase();
        return(upper); // change it to make the name to capital
    } else {
        let titleFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        let titleLast  = lastName.charAt(0).toUpperCase()  + lastName.slice(1).toLowerCase(); 
        let titleCase = `${titleFirst} ${titleLast}`;
        return(titleCase);
    }
}

// console.log(returnMyWholeName("george", "pasparakis", true)) // GEORGE PASPARAKIS
console.log(returnMyWholeName("gEOrGE", "pASParakis", "George")) // George Pasparakis


// use the following array to convert the values within to title case using a function
// that you will create
let testArray = ["Peoplecert", "education", "People", "cert"];
// let resultArray = ["PeopleCert", "Education", "People", "Cert"]

// DO TRY THIS AT HOME: if("George") console.log("Can't be TRUE!!!!")
// DO TRY ALSO THIS AT HOME: console.log("George" == true)
