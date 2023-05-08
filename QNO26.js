//Write a js program to replace last occurrence of a character with another in a string.
let str = "Salman Zahid ";
let searchChar = "s";
let replaceChar = "z";
let index = str.lastIndexOf(searchChar);
if(index !== -1){
    str = str.slice(0,index)+replaceChar+str.slice(index+1);
};
console.log(`Replace last occurance in the string is ${str}`);














