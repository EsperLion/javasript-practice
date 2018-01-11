#!/usr/bin/env node
// console.log('-----');
// console.log(process.argv);
// console.log('-----');
// console.log('-----');
// console.log(process.env);
// console.log('-----');
// console.log('-----');
// console.log(process.execArgv);
// console.log('-----');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function ()  {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write('data:' + chunk);
	}
});
