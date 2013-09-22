// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function findPrimeSum(maxPrime){
	var current = 0;
	for(i=2; i<maxPrime; i++){
		if(isPrime(i)){
			current += i;
		}
	}
	console.log(current);
	return current;
}

function isPrime(number){
	for(var i=2; i<number; i++){
		if(number%i === 0 && number!=i){
			return false;
		}
	}
	return true;
}

findPrimeSum(10);
