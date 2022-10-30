
const deepComparison = (a, b) => {
	if (a instanceof Array || b instanceof Array) {
		if (a instanceof Array && b instanceof Array) {

			return a.every((x, index) => {
				if (typeof x === 'object' || typeof b[index] === 'object') {
					if (typeof x === 'object' && typeof b[index] === 'object') {

						return deepComparison(x, b[index]);
					} else {

						return false;
					}
				} else {

					return x === b[index];
				}
			})
		} else {

			return false;
		}
	} else if (a instanceof Object || b instanceof Object) {
		if (a instanceof Object && b instanceof Object) {
			if (Object.keys(a).length !== Object.keys(b).length) {

				return false;
			} else {
				Object.values(a).every((x, index) => {
					if (typeof x === 'object' || typeof b[index] === 'object') {
						if (typeof x === 'object' && typeof b[index] === 'object') {

							return deepComparison(x, b[index]);
						} else {

							return false;
						}
					} else {

						return x === b[index];
					}
				})
			}
		} else if (a instanceof Date || b instanceof Date) {
			if (a instanceof Date && b instanceof Date) {

				return a.getTime() === b.getTime();
			} else {

				return false;
			}

		} else {

			return false;
		}
	} else {

		return a === b;
	}
};
