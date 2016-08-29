"use strict"

const parseArgs = (args) => {
	let [count,sides] = args;

	return {
		count: count,
		sides: sides
	}
}



module.exports = parseArgs
