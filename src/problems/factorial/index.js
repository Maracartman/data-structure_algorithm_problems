const factorialI = (n) =>{
	let mult = 1;
	for(let i = 1; i <=n; i++){
		mult *= i
	}
	return mult
}

const factorialR = n => {
	if(n === 1) return n
	return n * factorialR(n-1)
}


module.exports = {
	factorialI,
	factorialR,
}
