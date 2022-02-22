// let name = "I am learning JavaScript ";
// let food = ["Mango", "Apple", "Orange", "Guava"];
// let person = {
//   name: "Mynul Islam",
//   age: 22,
//   profession: "Student",
// };

// for (var x in name) {
//     console.log(x);
// }
// for(var x of name)
// {
//     console.log(x);
// }
// var s=6;
// var t=9;
// if(t==9)
// {
//   s="4";
//   console.log(s);
// }

// console.log(s);
// console.log(s**t);//to the power

// function addNumbers2(...numbers)
// {
//    let total=0;
//    for(index in numbers)
//    {
//        total+=numbers[index];
//    }
// for(let i=0;i<numbers.length;i++)
// {
//     total+=numbers[i];
// }
// numbers.forEach(num=>{
//     total+=num;
//     console.log(`HELOLO THERE ,NOW TOTAL IS ${total}`);
// });

//    return total;
// }

//console.log(addNumbers2(33,444,55,677));
// document.write(addNumbers2(1,2,3,4,5,6));
// //l=prompt("Input the value:");
// //document.write(addNumbers2(l));

// let saySomething =()=>{
//     let i=1000;
//     console.log(`Assalmualikum vai....${i}`);
//     document.write("helloo")
// }
// saySomething();
// let arr=["Mynul","soad","kanon","Saikoth"];

// arr.forEach(function(value){
//         document.write(value);
//         console.log(value)
// })

// function letTogo(item){
//     return `My name is ${item}`;
// }
// let arr1=arr.map(letTogo)

// //document.write(arr1);
// console.log(arr1);

// let val;
// val=Math.E;
// val=Math.PI;

// console.log(val);

// document.write("helo there.....<br> i am in second line")
// console.log("hello there.....\n i am in second line");
// let x=~5;
// console.log(x)
// let letters =new Set();

// letters.add("a")

// console.log(letters)
// let str1 = "Hi there, I am a string!";
// console.log(str1[1]); // "i"

// str1[1] = "e";
// console.log(str1); 
// class Person{
//     constructor(fname,lname,dob){
//             this.firstNmae=fname;
//             this.lastName=lname;
//             this.birthDay=dob;
//     }
//     fullName(){
//         console.log(this.firstNmae,this.lastName);
//     }
// }

// let person1=new Person("Mynul","Islam","01/06/1999");
// let person2=new Person("Foysal","Ahmed","03/03/2001");
// let person3=new Person("Soad","Rahman","08/07/2003");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person3.fullName());
// class Person {
//   constructor(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//   }
//   greating() {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//   }
//   static greating1() {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//   }
// }

// let person1=new Person("Mynul","Islam");
// console.log(person1.greating())
// var c=10;
// let a=11;

// function fc(){
//  // console.log(a);
//   var a=10;
// }
// fc();
// console.log(a);
// console.log("I am super fast")
// setTimeout(function(){
//   console.log("Oppps!sorry .I am in Late")
// },2000)
// console.log("But I am first ...")

//  "use strict"
//  x="else";
//  let i="Something"
//  console.log(i);
//const d =new Date()
//Destructureing an array

// const month=["Jamuary","February","March","April","May"];
// const [jan,feb]=month;
// console.log(jan,feb);
// console.log(month);

// const person={

//   name:"Mynul",
//   age:"23",
//   height:"5'9\""
// }

// const {name,age}=person;

// const person={
//   name:"Mynul",
//   University:"SUST",
//   dept:"SWE"
// }
// //delete person[dept]

// console.log(person)
const fun=function(name){
  console.log("Hello there..."+name)
}
fun("Mynul");

function abc(name){
  console.log("Hello in abc function older method "+name)
}
abc("Islam")

const def=()=>{
  console.log("Hello def arrow function ")
}
def();

const ghi=()=>console.log("Arrow function in one line ");
ghi();