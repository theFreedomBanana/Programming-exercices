'use strict';

/*
START Sample Inputs
*/
const sampleProducts = [{
  id: 'p1',
  name: 'iphone x',
  brandId: 'br1',
  supplierId: 'sp1',
}, {
  id: 'p2',
  name: 'iphone xs',
  brandId: 'br1',
  supplierId: 'sp2',
}, {
  id: 'p3',
  name: 'galaxy note 8',
  brandId: 'br2',
  supplierId: 'sp1',
}]; // 10K products (P)

const sampleBrands = [{
  id: 'br1',
  name: 'apple',
}, {
  id: 'br2',
  name: 'samsung',
}]; // 1K brands (B)

const sampleSuppliers = [{
  id: 'sp1',
  name: 'x logistics',
}, {
  id: 'sp2',
  name: 'y logistics',
}]; // 1K suppliers (S)
/*
END Sample Inputs
*/

/*
PROBLEM DESCRIPTION
assume that we need to export a csv that contains product name brand name and supplier name
csv export function needs array of objects in the format of the result array given as an example below

you are given products, brands, and suppliers arrays
you need to merge them to have a result array with exact same element count with products array
only difference is to augment brandName and supplierName fields to product object

data explanation:
ids are unique object ids, the example input is not the real format
products belong to brands or suppliers so there are 1-to-many relationship from product to brands,and from products to suppliers
any brandId or supplierId you see on the product object has a match in brands and suppliers collections accordingly.

time complexity is the key here
*/
// O(?)
const mergeArrays = (products, brands, suppliers) => {
	let result = products.map((product) => ({
		...product,
		brandName: brands.find((brand) => brand.id === product.brandId).name,
		supplierName: suppliers.find((supplier) => supplier.id === product.supplierId).name,
	}));

  return result;
};

// Function has a complexity of 10K*(1K+1K)

const mergeArrays = (products, brands, suppliers) => {
	const brandPerId = brands.reduce(
		(reduction, brand) => {
			reduction[brand.id] = brand;
			return reduction;
		},
		{},
	);
	const supplierPerId = suppliers.reduce(
		(reduction, supplier) => {
			reduction[supplier.id] = supplier;
			return reduction;
		},
		{},
	);

	const result = products.map((product) => ({
		...product,
		brandName: brandPerId[product.brandId].name,
		supplierName: supplierPerId[product.supplierId].name,
	}));

	return result;
};

// Function has a complexity of 10K+1K+1K


/*
Sample output
*/
const sampleResult = [
  {
    id: 'p1',
    name: 'iphone x',
    brandId: 'br1',
    supplierId: 'sp1',
    brandName: 'apple',
    supplierName: 'x logistics',
  },
  {
    id: 'p2',
    name: 'iphone xs',
    brandId: 'br1',
    supplierId: 'sp2',
    brandName: 'apple',
    supplierName: 'y logistics',
  },
  {
    id: 'p3',
    name: 'galaxy note 8',
    brandId: 'br2',
    supplierId: 'sp1',
    brandName: 'samsung',
    supplierName: 'x logistics',
  },
]; // 10K products

console.table(sampleResult);

Date.now().getTime
console.table(mergeArrays(sampleProducts, sampleBrands, sampleSuppliers));
/*
┌─────────┬──────┬─────────────────┬─────────┬────────────┬───────────┬───────────────┐
│ (index) │  id  │      name       │ brandId │ supplierId │ brandName │ supplierName  │
├─────────┼──────┼─────────────────┼─────────┼────────────┼───────────┼───────────────┤
│    0    │ 'p1' │   'iphone x'    │  'br1'  │   'sp1'    │  'apple'  │ 'x logistics' │
│    1    │ 'p2' │   'iphone xs'   │  'br1'  │   'sp2'    │  'apple'  │ 'y logistics' │
│    2    │ 'p3' │ 'galaxy note 8' │  'br2'  │   'sp1'    │ 'samsung' │ 'x logistics' │
└─────────┴──────┴─────────────────┴─────────┴────────────┴───────────┴───────────────┘
*/



