var x = 1.1;

function formula1 (x) {
	var formRes = -70*X(x,5) + 17.55*X(x,3) + 17.55*X(x,2) + 17.55*x + 17.55;
	return formRes;
}

function formula2 (x) {
	var formRes = (-350)*X(x, 4) + 52.65*X(x, 2) + 35.1*x + 17.55;
	return formRes;
}


function X(x, pow) {
	return Math.pow(x, pow);
}

var x2 = x - formula1(x) / formula2(x);
console.log("x2  =", x2);

var x3 = x2 - formula1(x2) / formula2(x2);
console.log("x3  =", x3);


var x4 = x3 - formula1(x3) / formula2(x3);
console.log("x4  =", x4);

var x5 = x4 - formula1(x4) / formula2(x4);
console.log("x4  =", x5);


