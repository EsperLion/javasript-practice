let items = [
    {
        name: 'German',
        age: 22
    },
    {
        name: 'Oleg',
        age: 23
    },
    {
        name: 'Max',
        age: 42
    }
];

const template = `
    <ul>
        ${repeat(items, `<li</li>`)}      
    </ul>
`;

function repeat (arr, template) {
    var result = ``;
    for(let i = 0; i < arr.lenght; i++) {
        result += template;
    }
    return template;
}