//one default export per file
//named exports - have to have a name
export function add(x, y){
    return x + y;
}

export function subtract(x, y){
    return x - y;
}

export const myArray = ['my', 'array'];

export default function(){
    console.log("I am the default calculate export");
}