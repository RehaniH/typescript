//acts as a TS object type, but also can be implemented through a class
interface Human{
    firstName:string;
    age:number;

    greet:() => void;
}

let me:Human;
me = {
    firstName: 'Himasha',
    age:24,
    greet(){
        console.log('Hello !!!')
    }

}

class Instructer implements Human{
    firstName: string;
    age: number;

    constructor(firstName: string, age: number){
        this.firstName = firstName;
        this.age = age;
    }
    
    greet(){
        console.log('Hello !!!');
    }
    readTime(){
        console.log('Its evening time');
    }
}

