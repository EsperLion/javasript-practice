import {User} from './lib';
import mainTpl from './main.hbs';

let user = new User('German', 22);

user.showInfo();

let users = [
    new User('German', 22),
    new User('Alex', 17),
    new User('Gik', 42)
];

let compiledTemplate = mainTpl({
    users: users
});

document.getElementById('root').innerHTML = compiledTemplate;