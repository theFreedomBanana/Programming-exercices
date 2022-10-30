
/**
 * Pointers List To Object
 * Transform a given an array of users into an object where each key is an Id and each value the user
 */

const usersList = [
	{ id: 'IOY13', name: 'riri' },
	{ id: 'J576j', name: 'fifi' },
	{ id: 'dfg98', name: 'loulou' },
	{ id: 'Jg78f', name: 'donald' },
	{ id: '98ttD', name: 'mickey' },
	{ id: 'PJ8Ac', name: 'picsou' },
	{ id: '287GH', name: 'mini' },
];

// Expected result:
// {
// 	'IOY13': { id: 'IOY13', name: 'riri' },
// 	'J576j': { id: 'J576j', name: 'fifi' },
// 	'dfg98': { id: 'dfg98', name: 'loulou' },
// 	'Jg78f': { id: 'Jg78f', name: 'donald' },
// 	'98ttD': { id: '98ttD', name: 'mickey' },
// 	'PJ8Ac': { id: 'PJ8Ac', name: 'picsou' },
// 	'287GH': { id: '287GH', name: 'mini' },
// }
