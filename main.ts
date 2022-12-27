class Person{
    name:string;
    age:string;
    constructor(name:string,age:string){
        this.name=name;
        this.age=age;

    }
    getName(){
        return this.name
    }
}
class Student extends Person{
    rollNumber:string;
    courses:string[]=[];
    constructor(name:string,age:string,rollNumber:string){
        super(name,age);
        this.rollNumber=rollNumber;
    }
    registerForCourses(courses:string){
        this.courses.push(courses)
    }
}

class Instructor extends Person{
    salary:number;
    courses:string[]=[];
    constructor(name:string,age:string,salary:number){
        super(name,age);
        this.salary=salary;
    }
    assignCourse(course:string){
        this.courses.push(course);
    }
}
const sObj1=new Student("Ali","22","1");
sObj1.registerForCourses("Metaverse");
sObj1.registerForCourses("Block Chain");
console.log(sObj1);