
/**
 * Is Period Covered
 * Create a function that, for a given period (startingAt & endingAt) check if it is fully covered by the
 * periods included in an array of periods
 */

const periods = [
	{ endingAt: new Date(2020, 4, 30), startingAt: new Date(2020, 0, 1) },
	{ endingAt: new Date(2020, 9, 11), startingAt: new Date(2020, 8, 12) },
	{ endingAt: new Date(2021, 2, 31), startingAt: new Date(2020, 9, 1) },
	{ endingAt: new Date(2021, 12, 15), startingAt: new Date(2021, 2, 25) },
	{ endingAt: new Date(2022, 4, 4), startingAt: new Date(2022, 1, 5) },
	{ endingAt: new Date(2022, 7, 31), startingAt: new Date(2022, 7, 1) },
];

const periodToCheck = { endingAt: new Date(2021, 11, 17), startingAt: new Date(2021, 2, 15) };

const isPeriodCovered = (periodToCheck, periods) => {
	const coveredPeriod = { endingAt: undefined, startingAt: undefined };
	periods.sort((periodA, periodB) => {

		return periodA.startingAt < periodB.starting
			? periodA.startingAt != periodB.startingAt
				? -1
				: periodA.endingAt < periodB.endingAt
					? -1
					: 1
			: 1;
	}).forEach((period, index, sortedPeriods) => {
		if (period.endingAt < periodToCheck.startingAt || period.startingAt > periodToCheck.endingAt) {

			return;
		}

		if (coveredPeriod.startingAt === undefined) {
			coveredPeriod.startingAt = period.startingAt;
		}
		if (coveredPeriod.endingAt === undefined) {
			coveredPeriod.endingAt = period.endingAt;
		} else if (period.startingAt <= coveredPeriod.endingAt && period.endingAt > coveredPeriod.endingAt) {
			coveredPeriod.endingAt = period.endingAt;
		}
	});

	return (coveredPeriod.startingAt && coveredPeriod.startingAt <= periodToCheck.startingAt)
		&& (coveredPeriod.endingAt && coveredPeriod.endingAt >= periodToCheck.endingAt);
}
