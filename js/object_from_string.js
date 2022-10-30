
/**
 * Create a function that updates an object to a given position.
 * Position is in the shape of 'attr1.attr2.attr3'.
 */

const object = {
	foo: {
		faa: { fee: 'azerty' },
		fi: 'poiuy',
	},
	bar: { baz: 'wxcvbn' },
	tam: {
		tom: { tim: "qwerty" },
	},
};

function updateObject(object, position, value) {

	return position.split('.').reduceRight(
		(reduction, segment, index, elements) => {
			if (index === elements.length - 1) {
				reduction = { [segment]: value };
			} else if (index === 0) {
				reduction = { ...object, [segment]: reduction };
			} else {
				let portion = object;
				elements.slice(0, index + 1).forEach((element) => { portion = portion[element] });
				reduction = { ...portion, [segment]: reduction };
			}

			return reduction;
		},
		{},
	);
}
