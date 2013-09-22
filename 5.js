// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?

function findSmallestNumber(n,offset){
	if(!divisibilityCheck(n,offset)){
		return findSmallestNumber(n+1,offset);
	}
	else{
		console.log(n);
		return n;
	}
};



function divisibilityCheck(number, checkTo){
	for(var i = 1; i < checkTo+1; i++){
		if(number%i != 0){
			return false;
		}
	}
	return true;
};
findSmallestNumber(21,20);
// console.log(divisibilityCheck(2520, 10));