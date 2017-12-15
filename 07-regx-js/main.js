'use strict';

const users = [
    {
        name: 'asdasd',
        age: 22
    },
    {
        name: 'ivan',
        age: 44
    }
];

const template = `
    <ul>
        <template>
            <li>{name} {age}</li>
        </template>
    </ul>
`;

const found = template.match(/(<template>(.|\s)*)(.*)((.|\s)*<\/template>)/g)[0];

console.log(found);

const replaced = found.replace(/<(.?)template>/g, '');

console.log(replaced);

const keys = replaced.match(/{([^{}]*)}/g);

for (let i = 0; i < keys.length; i++) keys[i] = keys[i].replace(/({|})/g,'');

console.log(keys);

let repeated = '';

for (let i = 0; i < users.length; i++) {
    let str = replaced;
    for (let j = 0; j < keys.length; j++) {
        str = str.replace('{' + keys[j] + '}', users[i][keys[j]]);
    }
    repeated += str;
}

console.log(repeated);

let compiled = template.replace(/(<template>(.|\s)*)(.*)((.|\s)*<\/template>)/g, repeated);

console.log(compiled);

document.body.innerHTML = compiled;