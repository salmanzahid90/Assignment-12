//Write a js program to find last occurrence of a character in a given string.
    function findLastOccurance(str,char){
        let lastIndex = -1;
        for(let i = 0; i < str.length;i++){
            lastIndex = i;
        }
        return lastIndex;
    };
    let str = "salman Zahid ";
    let char = "t";
    console.log(`The Last occurance of a string is ${findLastOccurance(str,char)}`);














