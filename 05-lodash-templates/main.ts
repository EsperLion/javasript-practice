// import Test from './test';
//
// const test = new Test('German', 22);
//
// test.showInfo();
import Menu from './components/menu';

import {menuTpl} from './components/menu.template';

let menu = new Menu([
    {
        label: 'Home',
        link: '#home'
    },
    {
        label: 'blog',
        link: '#blog'
    }
], menuTpl);

document.getElementById('menu').innerHTML = menu.render();