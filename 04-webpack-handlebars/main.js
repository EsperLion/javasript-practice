import {User} from './lib';

import mainTpl from './main.hbs';

// let user = new User('German', 22);
//
// user.showInfo();

// console.log(partial());

let users = [
    new User('German', 22),
    new User('Alex', 17),
    new User('Gik', 42)
];

var context = {
    users: users,
    partial: {
        title: 'This is partial!',
        content: 'This is partial! This is partial! This is partial! This is partial! This is partial! This is partial!'
    }
};


// Handlebars.registerPartial('card', partial(context.partial));

let compiledTemplate = mainTpl(context);

document.getElementById('root').innerHTML = compiledTemplate;
