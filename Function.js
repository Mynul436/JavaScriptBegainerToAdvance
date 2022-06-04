function addNumber(a, b) {
  var c = a + b;
  //document.write("Result = "+c)
  console.log("Result = " + c);
}
addNumber(4, 7);

(function aaD(){
  for(let i=0;i<5;i++)
  {
    console.log(i+7);
  }
})();
//aaD();
for(let i=0;i<5;i++)
{
  console.log(i)
}
function saySomething(){
  console.log("Hello world ")
}
saySomething();

let saySome=function(name){
  //console.log(`Hello World`);
  console.log(`Hello World ${name}`)
}
saySome("Akash")

let helloArrow=()=>{
  console.log("Hi there ...."+"I am Arrow Function")
}
helloArrow();

let foods=['Mango','Apple','Orange','Jack Fruit'];
foods.forEach(function(value,index){
console.log(value+" "+index);
});

function addFood(item){
  return `${item} is a food`
}

let abc=foods.map(addFood);

console.log(abc);

let person={
  fname:'Mynul',
  lname:'Islam',
  fullname:function(){
    return this.fname+" "+this.lname
  }
}

console.log(person.fullname());
console.log(person.fname);


class Person{

  constructor(fname1,lname1){
    this.Firstname=fname1;
    this.Lastname=lname1;

  }
}


let p1=new Person('Mynul','Islam');
console.log(p1.Firstname,p1.Lastname);