/// ***SOLVED*** ///


function findPrimeFactors(number){
	var highestPrime = 0;
	for(var i=0; i<number; i++){
		if(number%i===0){
			highestPrime = isPrime(i) ? i:highestPrime;
			}
		}
	return highestPrime;
};

function isPrime(number){
	for(var i=2; i<number; i++){
		if(number%i===0 && number != i){
			return false;
		}
	}
	return true;
}

findPrimeFactors(600,851,475,143);