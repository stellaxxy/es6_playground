/*
function addToDom(tagName, text){
    const newTag = document.createElement(tagName);

    newTag.innerText = text;

    document.getElementById('root').appendChild(newTag);
}

export default addToDom; //give us the ability to use anywhere in the application
//anything can be stored in a variable you can export to another file
//default - default setting
*/
export default function (tagName, text){
    const newTag = document.createElement(tagName);

    newTag.innerText = text;

    document.getElementById('root').appendChild(newTag);
}

//default export doesn't need to have name, because when you import it you will name it
//can only have one default export per file