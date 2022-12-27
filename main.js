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
    registerForCourses(course) {
        this.courses.push(course);
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
class Course {
    constructor(id, name) {
        this.student = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.student.push(student);
        student.registerForCourses(this); //passing full object of the course
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this); //Due to this we know the instructor course
    } //the current course is pass to the instructor via this
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const sObj1 = new Student("Ali", "18", "1");
const sObj2 = new Student("Basit", "18", "2");
const iObj1 = new Instructor("Faisal", "22", 100000);
const iObj2 = new Instructor("Hamzah", "22", 100000);
const cObj1 = new Course("course1", "Metaverse");
const cObj2 = new Course("course2", "Block Chain");
cObj1.addStudent(sObj1);
cObj1.addStudent(sObj2);
cObj1.setInstructor(iObj1);
const dObj1 = new Department("Computer Science");
// adding department in course
dObj1.addCourse(cObj1);
dObj1.addCourse(cObj2);
//here the rest parameter and add multiple courses
// then you will recieve an array and the concatenate with another array or spread operator is used.
console.log(dObj1);
// console.log(cObj1);
// console.log(cObj1.instructor);
