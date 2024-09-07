/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...


let indexOfJ = -1;

for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "j") {
        indexOfJ = i;
        break;  // Stop the loop once the character is found
    }
}

console.log(indexOfJ);




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
const indexes = [2, 11, 11, 10]; //Indexs corresponding to word COOL
let newstring = "";

for(let i=0; i<indexes.length; i ++){
    newstring += string2[indexes[i]] /*For each index in the array, the loop accesses the 
    corresponding character in string2 using string2[indexes[i]]*/
    
    /* string2 using bracket notation, we store the desired character positions in the indexes array. 
    The for loop goes through each element in the indexes array.*/
}
console.log(newstring);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const str3 = "ABCDEFGHJKLO";

// Your code here...

const newString = str3[2] + str3[11] + str3[11] + str3[10];

console.log(newString);





/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...

const result = string3.repeat(4) + "Batman!";

console.log(result);

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const st3 = "Na";

// Your code here...

console.log(`${st3.repeat(4)} Batman!`);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...

const favoritefruit = fruit.slice(13, 18); //Starting and Ending with index of "mango"

console.log(favoritefruit)

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
//// Create an array to store the headlines
const headlines = [funnyHeadline1, funnyHeadline2];

// Loop through the headlines and check if they contain the word 'oxygen'
for (let i = 0; i < headlines.length; i++) {
    if (headlines[i].includes("oxygen")) {
        console.log(`Headline ${i + 1}: The string includes the word 'oxygen'`);
    } else {
        console.log(`Headline ${i + 1}: The string does not include the word 'oxygen'`);
    }
}
// Check the second headline
// Your code here ...

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline3 = "Breathing oxygen linked to staying alive";
const funnyHeadline4 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
// Check if funnyHeadline1 includes the word 'oxygen'
if (funnyHeadline1.includes("oxygen")) {
    console.log("Headline 1: The string includes the word 'oxygen'");
} else {
    console.log("Headline 1: The string does not include the word 'oxygen'");
}


// Check the second headline
// Your code here ...

// Check if funnyHeadline2 includes the word 'oxygen'
if (funnyHeadline2.includes("oxygen")) {
    console.log("Headline 2: The string includes the word 'oxygen'");
} else {
    console.log("Headline 2: The string does not include the word 'oxygen'");
}



/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...

// b) Print the last character in the string
console.log("The last character of the string is:", string4[string4.length - 1]);



// b) Print the last character in the string
// Your code here ...
// b) Print the last character in the string
console.log("The last character of the string is:", string4[string4.length - 1]);
