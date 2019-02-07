import {addToDom} from './helpers';

export class Person {
    constructor(name){
        this.name = name;
    }

    speak(text){
        addToDom(`${this.name} Says: ${text}`);
    }

    greet(){
        this.speak(`Hello, my name is ${this.name}`);
    }
}
//when extending do not necessary need constructor, only if you need to set properties/set-up then use constructor
export class SuperPerson extends Person {
    constructor(name, superpower){
        super(name);
        
        this.superpower = superpower;
    }

    saySuperpower(){
        this.speak(`My superpower is ${this.superpower}`);
    }
}