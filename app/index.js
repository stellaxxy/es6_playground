import { Person, SuperPerson } from "./person";

const max = new Person('Max');
const superLisa = new SuperPerson('Lisa', 'running really fast');

max.greet();

superLisa.greet();

superLisa.saySuperpower();