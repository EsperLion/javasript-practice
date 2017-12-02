import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

interface Item {
    label: string;
    link: string;
}

export default class Menu {

    private menuItems: Item [];

    private template: string;

    constructor (items: Item [], template: string) {
        this.menuItems = items;
        this.template = template;
    }

    render (): string {
        const tpl = template(this.template,{
            imports: {
                forEach: forEach
            }
        });
        const compiled = tpl({
            items: this.menuItems
        });
        return compiled;
    }
}