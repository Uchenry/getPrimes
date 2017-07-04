'use strict'
module.exports = {

    
    getPrimes: (number) => {

    	let i, j;

    	let primes = [];

      	if (number <= 0){
      		return 'Enter a number greater than zero';
      	}

      	else if (number === null) {
			return 'Enter a number';
		}

      	else if (number === 1){

      		return 'Enter number greater than one';
      	}

      	else if (typeof(number) !== 'number'){

      		return undefined;
      	}

      	else{

      		for (i = 2; i<=number; i++){

      			for (j = 2; j<=i; j++){

      				if (i % j === 0){

      					break;
      				}
      			}

      			if (i == j){

      				primes.push(i);
      			}
      		}
      	}
      	return primes;
    }
}


