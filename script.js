//1) Do the below programs in anonymous function & IIFE:
//    a) Print odd numbers in an array using anonymous function:
/*
var array=[1,2,3,4,5,6,7,8,9];
let odd=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };(odd(array));
*/
  //----------------------------------------------------------

//    a) Print odd numbers in an array using IIFE:  
/*
var array=[1,2,3,4,5,6,7,8,9];
(function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  })(array);
*/
 //-----------------------------------------------------------
 //   b) Convert all the strings to title caps in a string array using anonymous function:
 
/*
 var array=["apple","orange","mango"];

var str = function(array){
    var caps=[];
for(var i=0;i<array.length;i++){
    caps.push((array[i].toUpperCase()));
}
return caps.join(", ");
}
console.log(str(array))
*/
//-------------------------------------------------------------
//   b) Convert all the strings to title caps in a string array using IIFE function:
/*
var array=["apple","orange","mango"];
(function(array){
    var temp=[];
    for(var i=0; i<array.length; i++){
        temp.push(array[i].toUpperCase());  
    } 
    console.log(temp.join(", "));
})(array);
*/
//-------------------------------------------------------------
//   c) Sum of all numbers in an array using anonymous function:
/*
var array = [1,2,3,4,5,6,7,8,9];

var sum = function (array){
    var result=0;
     for(var i=0; i<array.length; i++){
        result+=(array[i]);
     }
     return result;
};
console.log(sum(array));
*/
//-------------------------------------------------------------
//   c) Sum of all numbers in an array using IIFE function:
/*
var array=[1,2,3,4,5,6,7,8,9];

(function(array){
    var result=0;
    for(var i=0; i<array.length; i++){
        result+=array[i];
    }
    console.log(result);


})(array);
*/
//--------------------------------------------------------------

//   d) Return all the prime numbers in an array using anonymous function:
/*
var numbers = [1,2,3,4,5,6,7,8,9];
var primeNumbers = [];

var prime = function(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 0; i <numbers.length; i++) {
    if (prime(numbers[i])) {
        primeNumbers.push(numbers[i]);
    }
}

console.log("Prime numbers:", primeNumbers);
*/
//-----------------------------------------------------------------
//   d) Return all the prime numbers in an array using IIFE function:
/*
var numbers = [1,2,3,4,5,6,7,8,9];

var primeNumbers = (function(){
    var result = [];

    var prime = function(num) {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < numbers.length; i++) {
        if (prime(numbers[i])) {
            result.push(numbers[i]);
        }
    }

    console.log(result) ;
})();
*/
//------------------------------------------------------------------
//  e) Return all the palindromes in an array using anonymous function:
/*
var words = ["level", "hello", "deed", "world", "civic", "radar"];

var Palindrome = function(words) {
    var reversedword = words.split("").reverse().join("");
    return words === reversedword;
};

var palindromewords = words.filter(Palindrome);

console.log("The Palindromes are:", palindromewords);
*/
//-------------------------------------------------------------------
//   e) Return all the palindromes in an array using IIFE function:
/*
var words = ["level", "hello", "deed", "world", "civic", "radar"];

var palindromeWords = (function() {
    return words.filter(function(word) {
        var reversedWord = word.split("").reverse().join("");
        return word === reversedWord;
    });
})();

console.log("The Palindromes are:", palindromeWords);
*/
//--------------------------------------------------------------------
// f) Return median of two sorted arrays of the same size using anonymous function:
/*
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];

var findMedianSortedArrays=function (array1, array2) {
    // Merge the two arrays
    var mergedArray = [...array1, ...array2].sort((a, b) => a - b);

    // Find the median
    var length = mergedArray.length;
    var mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If the length is even, return the average of the two middle elements
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[mid];
    }
};
console.log(findMedianSortedArrays(array1, array2));
*/
//-------------------------------------------------------------------------------
// f) Return median of two sorted arrays of the same size using IIFE function:
/*
var median= (function(array1, array2) {
    // Merge the two arrays
    var mergedArray = [...array1, ...array2].sort((a, b) => a - b);

    // Find the median
    var length = mergedArray.length;
    var mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If the length is even, return the average of the two middle elements
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[mid];
    }
    
})([1, 3, 5],[2, 4, 6]);
console.log(median);
*/
//----------------------------------------------------------------------------------
//  g) Remove duplicates from an array using anonymous function:
/*
var array = [1, 2, 2, 3, 3, 4, 4, 5];

var removeDuplicates = function(array) {
    return [...new Set(array)];
};
console.log(removeDuplicates(array));
*/
//-----------------------------------------------------------------------------------
//   g) Remove duplicates from an array using IIFE function:
/* 
var array = [1, 2, 2, 3, 3, 4, 4, 5];

var uniqueArray= (function(array){
    return [...new Set(array)];
})(array);

console.log(uniqueArray);
*/
//------------------------------------------------------------------------------------

//2) Do the below programs in arrow functions.
//    a) Print odd numbers in an array using arrow functions:
/*
var array = [1,2,3,4,5,6,7,8,9];

var oddnumbers= (array)=>{
    for(var i=0; i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }   
    }   
}; oddnumbers(array);
*/ 
//--------------------------------------------------------------------------------------
//   a) Print odd numbers in an array using filter method:
/* 
var array = [1,2,3,4,5,6,7,8,9];

var oddnumbers = (arr) => {
    var oddNumbers = arr.filter((number) => number % 2 !== 0);
    console.log(oddNumbers);
};

oddnumbers(array);
*/
//--------------------------------------------------------------------------------------
//   b) Convert all the strings to title caps in a string array:
/*
var array = ["bus", "aeroplane", "helicopter", "train", "car"];
var caps = (array)=>{
    var result= array.map((element)=>element.toUpperCase());
    console.log(res);
};
caps(array);
*/
//--------------------------------------------------------------------------------------
//   c) Sum of all numbers in an array using arrow function:
/*
var array = [1,2,3,4,5,6,7,8,9];
var sum = (array)=>{
    var result = array.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
};
sum(array);
*/
//--------------------------------------------------------------------------------------
//    d) Return all the prime numbers in an array using arrow function:
/*
var array = [1,2,3,4,5,6,7,8,9];

var prime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i<number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

var primeNumbers = array.filter((number) => prime(number));

console.log(primeNumbers);
*/
//--------------------------------------------------------------------------------------
//    e) Return all the palindromes in an array using arrow function:
/*
var words = ["level", "hello", "deed", "world", "civic", "radar"];
var palindrome = (words)=>{
    var reversewords= words.split("").reverse().join("");
    return words=== reversewords;

};
console.log(words.filter(palindrome));
*/
//--------------------------------------------------------------------------------------










    


/*
var a= ["guvi geek"]
let arr= a.split(" ");

let vowels=['a','e','i','o','u','A','E','I','O','U']

let ch='';

for(let i=0; i<arr.length; i++)

{
for(let j=0;j<arr[i].length;j++){
if(vowels.includes(arr[i].charAt(j))){
ch+=arr[i].charAt(j)

}

}

ch+=" "

}

console.log(ch);
*/