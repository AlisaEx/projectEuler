// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function makeChain(number){
	var chain = [];
	var current = number;
	while (current != 1){
		chain.push(current);
		current = (current%2===0) ? (current/2):((3*current)+1);
	}
	console.log(chain);
	return current;
}



// function iterativeSequence(number){
// 	console.log(chain);
// 	var chain = [];
// 	if(number===1){ return chain; }
// 	else{
// 		if(number%2===0){
// 			console.log("even");
// 			chain.push(iterativeSequence(number/2));
// 		}
// 		else{
// 			console.log("odd");
// 			chain.push(iterativeSequence((3*number)+1));
// 		}
// 	}
// }

// console.log(iterativeSequence(13));
console.log(makeChain(13));