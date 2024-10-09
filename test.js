// given an array, the task is to cyclically rotate the array clockwise by one time.

let arr= [1,2,3,4,5]
let end=arr.length-1;

let lastelement=arr[end]


for(let i=end; i>0; i--){

       arr[i]=arr[i-1] 

}
arr[0]=lastelement

console.log(arr);


// String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".
let checkvalue=(str)=>{
    let new1=str.includes("Arslan")
    return new1
}

let rv=checkvalue("I am Arslan Saifi")
console.log(rv);


let arr1=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(arr1);


let str="A"
let a=str.charCodeAt(0)
console.log(a);




//Ob0jects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.


let arslandetails={
    name:'arslan',
    age:19,
    class:12,
    learn:'js',
}

// console.log(arslandetails);

arslandetails.add="delhi"

console.log(arslandetails);


// Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?

function sum(num1,num2) {

    sum=num1+num2
    return sum
}

let rv2=sum(5,10)
console.log(rv2);

// Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.


function Arslanroutine(morning,afternoon,evening,night) {
    this.subha=morning
    this.dupahar=afternoon
    this.shaam=evening
    this.raat=night
}

function Alham(name,education,phone,other) {
    this.naam=name
    this.study=education
    this.mobile=phone
    this.next=other
    
}


let rv3=new Arslanroutine("excercise","lunch","study","usemobile")

let rv4=new Alham("alham","b-tech","iphone",rv3)

console.log(rv4);

// console.log(rv3);


// Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).

// function Fibonacci(n) {

//     let prenum=0
//     let nextnum=1
//     i=1
//     while (n>=i) {

//         let newnum=prenum+nextnum 
//         prenum=nextnum
//         nextnum=newnum
//         console.log(newnum);
//         i++
//     }
    
// }

// Fibonacci(5)


// Grade Calculation: Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.

function gradeclaculation(marks,score) {

if (marks<=score && marks>90) {
    console.log("A");
}else if(marks<=score && marks>80){
    console.log("B");
    
}else if(marks<=score && marks>60){
    console.log("C");
}else{
    console.log("bekaar");
    
}
    
}

gradeclaculation(95,100) 

//Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

function oddnumber(n) {
    let i=1
while (i<=n) {

    if (!(i%2==0)) {
        console.log(i);
        
    }
    i++
}
}

oddnumber(50)


//Array Methods: What will the following code output?

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2)
console.log(doubled);

//output  [ 2, 4, 6, 8, 10 ]


//You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:

function lowercaseanduppercase(message) {

    let ascii=message.charCodeAt(0)
    
    if (ascii>=97  && ascii<=122) {
        return String.fromCharCode(ascii-32)
        
    }
    
    if (ascii>=65  && ascii<=90) {
        return String.fromCharCode(ascii+32)
        
    }
 
}

let rv5=lowercaseanduppercase("A")
console.log(rv5);


