// Write a function to swap two variables without using a third variable 

function swap(a,b){
    console.log("before swap a=", a, "b=", b)
    a = a + b;//5
    b = a - b;//2
    a = a - b;//3
    console.log("after swap a=", a, "b=", b)
}
swap(24,566)

 // Find the largest number among three numbers"

 var a = 14400;
 var b = 3;
 var c = 900;
console.log(Math.max(a,b,c));

//Implement capitalizeFirstLetter() function 
function Capatalize(){
    var charData = "gopi"
    var resultString = charData.charAt(0).toUpperCase()  + charData.slice(1,charData.length);
    console.log(resultString);
}
Capatalize();

 // Reverse a string without using .reverse()

 var word = "rama";
 var reversedWord ="";
  for(i = word.length - 1;i>=0;i--){
    reversedWord = reversedWord + word[i];
  }
console.log(reversedWord)


// Remove duplicates from an array 

var simpleArray = [1,4,4,6,7,8,9,9,88];

for(i=0;i<simpleArray.length;i++){
    for(j=i+1;j<simpleArray.length;j++){
        if(simpleArray[i] === simpleArray[j]){
            console.log(simpleArray[i])
        }
    }
}


// Find the second largest number in an array"
const number = [10,20,4,30,35]
console.log(Math.max(...number))