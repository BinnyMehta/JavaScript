//1. Ways to print in javascript
//console.log("Hello World")
// alert("Hi");
// document.write("This is document");

//2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");

// //3. Javascript Variables
// //variable-containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// //4. Datatypes in Javascript
//  //string data type
//  var str1 = "This is a string";
//  var str2 = 'This is a also string';

//  //no datatype
//  var no1=455;
//  var no2=56.76;

//  //objects data type
//  var marks = {
//                 ravi:34,
//                 shubham:78,
//                 biren:99.977
            
//  }

//  console.log(marks)

// //Primitive datatypes

// var arr=[1,2, "binny",4,5]
// console.log(arr)

//operations in java
// Arithmetic operators

// var a=100;
// var b=10;

// console.log("The value of a + b is: ", a+b);
// console.log("The value of a - b is: ", a-b);
// console.log("The value of a * b is: ", a*b);
// console.log("The value of a / b is: ", a/b);

// //Assignment Operators
// var c=b;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log("c is : ",c);

// //comparison operators
// console.log("Comparison Operator")
// var x=34;
// var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//logical operators
//logical and
// console.log("Logical And")
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// //logical or
// console.log("Logical OR ||");
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// //logical not
// console.log("Logical Not!")
// console.log(!false);
// console.log(!true);

//function in javascript
//DRY=Do not repeat yourselef
// function avg(a,b)
// {
//      //return (a+b)/2;
//     c=(a+b)/2;
//     return c;
// }
// c1=avg(4,6);
// c2=avg(14,16);

// console.log("c1=",c1);
// console.log("c2=",c2);

//conditional in Javascript

//var age=41;
// if(age > 8)
// { 
//  console.log('You are not a kid');
// }
//  else{

//     console.log('You are a kid')
//  }
//if...else statement
//  var age1=11;
//  if(age1 > 18)
//   console.log('You drink rasna water')
//   else
//   {
//       console.log('You can not drink rasna water')
//    }

//if-else ladder
/*var age=25;
if(age > 32)
{ 
 console.log("You are not a kid");

}

else if(age >26){
    console.log("Bache nahi rahe");
}
else if(age >22)
{
    console.log("Yes Bache nahi rahe");

}
else if(age > 18)
{
    console.log("18 Bache nahi rahe");
}
else{
    console.log("Bache rahe");
}
console.log("End of ladder")
*/

// console.log("For with if and break/continue");
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for( var i = 0; i<arr.length; i++)
// {
//     if(i==2)
//     {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element)
//  {
//      console.log(element);
//  }
// )

//let -->block level scope,good memory mangement

// const ac=0;
// //ac++;
// ac=ac+1;


// let j=0;
// console.log("Using let and while print")
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// console.log("Using Do while Loop")
// do{
//     console.log(arr[j]);
//     j++;

// }while(j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
//Array Methods

// console.log("Array lenght is= ", myArr.length);

// myArr.pop(); //remove last element
// myArr.push("binny"); //add element
// myArr.shift(); //remove first element
//console.log(myArr.unshift("Binny"))
 const newLen = myArr.unshift("Binny"); //move element to first
// console.log(newLen);//find the lenght of array

// console.log(myArr);

//string mehtods
let myLovelyString = "Binny is a good good girl Binny";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good")) //first occurance 
// console.log(myLovelyString.lastIndexOf("good")) //last occurance

// console.log(myLovelyString.slice(1,4)); //took three char from 0 index

d=myLovelyString.replace("Binny", "Vaishali");
// console.log(d,  myLovelyString);

//d = d.replace("good","beautiful"); //replace first occurance
//console.log(d,myLovelyString)

let myDat = new Date(); //create mew date
//console.log(myDat);
// console.log(myDat.getTime());
// console.log(myDat.getFullYear());
// console.log(myDat.getDay());
// console.log(myDat.getMinutes());
// console.log(myDat.getHours());


//DOM Manipulation -Dccument object model 
let elem = document.getElementById('click')
// console.log(elem);

                          //genbc
let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);
    



