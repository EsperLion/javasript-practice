const parser = require('himalaya');

const json = parser.parse(`<div class="super-class" data-key="sa8ufah">
	<h3>Hello</h3>
	<p>asdfasdfa dsfads</p>
	<custom-tag>It's a component tag</custom-tag>
</div>`);
console.log(json[0].children);