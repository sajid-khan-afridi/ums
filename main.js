"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(courses) {
        this.courses.push(courses);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const sObj1 = new Student("Ali", "22", "1");
sObj1.registerForCourses("Metaverse");
sObj1.registerForCourses("Block Chain");
console.log(sObj1);
const iObj1 = new Instructor("Hamzah", "22", 100000);
iObj1.assignCourse("Metaverse");
console.log(iObj1);
