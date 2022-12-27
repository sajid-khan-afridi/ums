class Person {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}
class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];
  constructor(name: string, age: string, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForCourses(course: Course) {
    this.courses.push(course);
  }
}

class Instructor extends Person {
  salary: number;
  courses: Course[] = [];
  constructor(name: string, age: string, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assignCourse(course: Course) {
    this.courses.push(course);
  }
}

class Course {
  id: string;
  name: string;
  student: Student[] = [];
  instructor!: Instructor;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  addStudent(student: Student) {
    this.student.push(student);
    student.registerForCourses(this); //passing full object of the course
  }
  setInstructor(instructor: Instructor) {
    this.instructor = instructor;
    instructor.assignCourse(this); //Due to this we know the instructor course
  } //the current course is pass to the instructor via this
}

const sObj1 = new Student("Ali", "18", "1");
const sObj2 = new Student("Basit", "18", "2");

const iObj1 = new Instructor("Faisal", "22", 100000);
const iObj2 = new Instructor("Hamzah", "22", 100000);

const cObj1 = new Course("course1", "Metaverse");

cObj1.addStudent(sObj1);
cObj1.addStudent(sObj2);

cObj1.setInstructor(iObj1);

// console.log(cObj1);
// console.log(cObj1.instructor);

const cObj2 = new Course("course2", "Block Chain");
