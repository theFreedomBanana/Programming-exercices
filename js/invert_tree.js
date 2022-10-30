
/**
 * Invert Tree
 * for each branch of the tree move the left value to the right and vice versa.
 */

const tree = {
	left: {
		left: {
			left: {
				value: 8,
			},
			right: {
				value: 9,
			},
			value: 17,
		},
		right: {
			left: {
				value: 12,
			},
			right: {
				value: 13,
			},
			value: 25,
		},
		value: 42,
	},
	right: {
		left: {
			left: {
				value: 10,
			},
			right: {
				value: 11,
			},
			value: 21,
		},
		right: {
			left: {
				value: 14,
			},
			right: {
				value: 15,
			},
			value: 29,
		},
		value: 50,
	},
	value: 92,
};

function invertTree(tree) {
	const branch = { value: tree.value };
	if (tree.right) {
		branch.left = invertTree(tree.right);
	}
	if (tree.left) {
		branch.right = invertTree(tree.left);
	}

	return branch;
};
