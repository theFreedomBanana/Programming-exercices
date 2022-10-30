
/** Find the rabbit.
 * Every guess the rabbit moves to one adjacent hole
 * Examples:
 *
 * - [-] - R - -
 * 0  1  2 3 4 5
 *
 * x [-] R - - -
 * 0  1  2 3 4 5
 *
 * x R [-] - - -
 * 0 1  2  3 4 5
 *
 * R [-] - - - -  | - [-] R - - -
 * 0  1  2 3 4 5  | 0  1  2 3 4 5
 *
 * Let assume the rabbit starts in the middle.
 *
 * - - R - - -
 * 0 1 2 3 4 5
 *
 * Lets assume the rabbit starts on an odd index.
 * Then I know that at guess+1 it will be on an event index, and so on...
 * - [-] - R - -
 * 0  1  2 3 4 5
 *
 * - - [-] - R -
 * 0 1  2  3 4 5
 *
 * - - - [-] - R
 * 0 1 2  3  4 5
 *
 * But what if I was wrong... and when I guess position 4, where it should be cornered,
 * it's actually at an odd position. Let's say P1.
 * - R - - [-] -
 * 0 1 2 3  4  5
 *
 * R - - - [-] -
 * 0 1 2 3  4  5
 *
 * - R - [-] - -
 * 0 1 2  3  4 5
 *
 * R - [-] - - -
 * 0 1  2  3 4 5
 *
 */
const findTheRabbit = ({ initialGuess, initialPosition, numberOfHoles }) => {
	let guess = initialGuess;
	let currentPosition = initialPosition;

	const hop = (position) => {

		return position === 0
			? 1
			: position === numberOfHoles - 1
				? numberOfHoles - 2
				: Math.floor(Math.random() * 100) % 2
					? position + 1
					: position - 1;
	};

	while (guess !== currentPosition) {
		currentPosition = hop(currentPosition);
		if (guess === numberOfHoles) {
			guess = 0 + numberOfHoles % 2;
		} else {
			guess++;
		}
	}

	return `Congrats!!! Your guess was ${guess} and rabbit position is ${currentPosition}`;
};

const initialGuess = 0;
const numberOfHoles = 100;
const initialPosition = Math.floor(Math.random() * numberOfHoles);
findTheRabbit({ initialGuess, initialPosition, numberOfHoles });
