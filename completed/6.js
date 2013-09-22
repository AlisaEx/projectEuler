/// ***SOLVED*** ///


// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// the difference between the sum of the squares of the first ten natural numbers
// && the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares
// of the first one hundred natural numbers and the square of the sum.

function square(number){
	return number*number;
}

function add(x,y){
	return x+y;
}

function arrayOfNatNum(max){
	var result = [];
	for(var i=0; i<max; i++){
		result.push(i+1);
	}
	return result;
}


var result = arrayOfNatNum(100);
var sum = square(result.reduce(add));
var square = result.map(square);
var addSquared = square.reduce(add);
var answer = sum - addSquared;
console.log(answer);
