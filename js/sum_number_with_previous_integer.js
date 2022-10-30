
/**
 * Sum Number With Previous Integers
 * Create a function that sums a given number with every integers below down to zero.
 */
const sumNumberWithPreviousInteger = (num) => {
	let result = num;

	if (num > 0) {

		return result += sumNumberWithPreviousInteger(result - 1);
	} else {

		return 0;
	}
}
