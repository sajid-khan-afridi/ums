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
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
const sObj1 = new Student("Ali", "18", "1");
const sObj2 = new Student("Basit", "18", "2");
const iObj1 = new Instructor("Faisal", "22", 100000);
const iObj2 = new Instructor("Hamzah", "22", 100000);
const cObj1 = new Course("course1", "Metaverse");
cObj1.addStudent(sObj1);
cObj1.addStudent(sObj2);
console.log(cObj1.student);
console.log(sObj1.courses);
const cObj2 = new Course("course2", "Block Chain");
