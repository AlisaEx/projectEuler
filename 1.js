/// ***SOLVED*** ///


function countDown(num){
	var answer = 0;
	for (var i = 0; i < num; i++) {
		if(i%3===0 || i%5===0){
			answer += i;
		}
	}
	return answer;
}

console.log(countDown(1000));