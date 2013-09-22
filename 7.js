// By listing the first six prime numbers:
// 	2, 3, 5, 7, 11, and 13, 
// 	we can see that the 6th prime is 13.

// What is the 10,001st prime number?


function findPrime(limit){
	var primes = [];
	var count = 2;
	while(primes.length < limit){
		if(isPrime(count)){
			primes.push(count);
		}
		count++;
	}
	return primes[limit-1];
};

function isPrime(number){
	for(var i=2; i<number; i++){
		if(number%i===0 && i!=number){
			return false;
		}
	}
	return true;
};

console.log(findPrime(6));
console.log(findPrime(10001));