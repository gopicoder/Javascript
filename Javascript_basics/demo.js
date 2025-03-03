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
