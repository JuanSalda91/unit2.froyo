//Prompt for visitor to enter flavors separeated with commas
let userInput = prompt("Enter a list of froyo flavors, separated by commas:");

//Convert the input string into an array
let flavorsArray = userInput.split(',');

//Store counts 
let flavorCount = {};

//Loop for each item in the array
for (let i = 0; i < flavorsArray.length; i++) {
    let flavor = flavorsArray[i].trim();
    if (flavorCount[flavor]){
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
}

console.log("Froyo Order Counts:");
console.table(flavorCount);