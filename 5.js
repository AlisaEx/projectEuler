// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?


function findSmallestNumber(){
	var n = 0;
	while(!divisibilityCheck(n)){
		console.log(n);
		n+1;
	}
	return n;
};



function divisibilityCheck(number){
	for(var i=1; i<21; i++){
		if(number%i===0){
			console.log(number);
			return true;
		}
		else{
			return false;
		}
	}
};
findSmallestNumber();