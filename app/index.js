import addToDom from './add_to_dom';
//give me default export
//can write any name, call it anything i want ; ex:  import fluffyBunnies from './add_to_dom';
import calcDefault, { add, myArray } from './calculate'; //import named export - use the definition name

console.log('My Array:', myArray);

calcDefault();

addToDom('h1', `2 + 8 = ${add(2, 8)}`);
