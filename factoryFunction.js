//constructor
function student(name, age, cgpa) {
  this.age = age;
  this.name = name;
  this.cgpa = cgpa;
  this.display = function () {
    console.log(this.name);
    console.log(this.age);

    console.log(this.cgpa);
  };
}

let student1 = new student("Mynul", 22, 3.18);
student1.display();
Math.floor(3.4)

let a=parseInt(prompt("Enter a number"))
console.log(a)
