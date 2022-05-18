class Student {
    firstName: string;
    protected lastName: string;
    public age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses
    }

    enrol(course: string) {
        this.courses.push(course);
    }

    listCourses() {
        return this.courses.slice();
    }
}

//alternative shorthand notation

class StudentAlternative {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]) {}
        
    enrol(course: string) {
        this.courses.push(course);
    }

    listCourses() {
        return this.courses.slice();
    }

}

let student = new Student('Himasha', 'Perera', 24, ['Angular', 'TypeScript']);
student.enrol('React');
student.listCourses();

let studentAlternative = new StudentAlternative('Himasha', 'Perera', 24, ['Angular', 'TypeScript']);
student.enrol('React');
student.listCourses();