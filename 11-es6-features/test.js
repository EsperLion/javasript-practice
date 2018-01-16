
// function asyncDiv (x, y) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(function () {
// 			if (x === 0) {
// 				reject('Cant divide 0!!!');
// 			} else {
// 				resolve(y / x);
// 			}
// 		},2000);
// 	});
// }
//
// async function doAction () {
// 	let result1, result2;
// 	try {
// 		result1 = await asyncDiv(0, 20);
// 	} catch (e) {
// 		console.log(e);
// 	}
// 	try {
// 		result2 = await asyncDiv(10, 20);
// 	} catch (e) {
// 		console.log(e);
// 	}
//
//
// 	console.log(`res1 = ${result1}; res2 = ${result2}`)
// }
//
// async function doAction2 () {
// 	let result1, result2;
// 	try {
// 		result1 = asyncDiv(30, 200);
// 	} catch (e) {
// 		console.log(e);
// 	}
// 	try {
// 		result2 = asyncDiv(15.5, 10);
// 	} catch (e) {
// 		console.log(e);
// 	}
//
//
// 	console.log(`res1 = ${ await result1}; res2 = ${ await result2}`)
// }
//
// doAction();
//
// doAction2();

const {Admin} = require("./admin.class");
const {Customer} = require("./customer.class");


let admin = new Admin('Ivan', 'ivaw@mail.ru', 'asdfasdf');
let customer = new Customer('Jhon', 'Jhon@mail.ru', 'Jhonasf211');

let userList = [admin, customer];

function customIterator (arr) {
	"use strict";
	let index = 0;
	return {
		next() {
			let next = arr[index++];
			if (next) {
				return {
					value: next.showInfo()
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
}

let iterator = customIterator(userList);

console.log(iterator.next());
console.log(iterator.next());

