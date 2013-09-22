/// ***SOLVED*** \\\

var result = [];
function fibonacciArray(array, limit){
	if(array.length === 0){
		array[0] = 1;
		array[1] = 2;
	}
	for(var i=0; i<limit; i++){
		array.push(array[i] + array[i+1]);
	}
};

function isEven(number){
	return number%2===0 ? true:false;
}
function add(x,y){
	return x+y;
}

fibonacciArray(result, 30);
var even = result.filter(isEven);
var result = even.reduce(add)
console.log(result);