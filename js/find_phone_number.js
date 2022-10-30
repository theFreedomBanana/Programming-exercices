
/**
 * Extract Phone Number
 *
 * For a given string create a function that extracts the mobile phone number.
 * Should work for french phone numbers only.
 * Should return a result in the shape of 0033xxxxxxxxx
 */

const text = 'Voici mon numéro de téléphone: +33712345678. Merci et au revoir';

// Expected result: 0033712345678

const regex = new RegExp(/(0|\+33|0033)(6|7)\d{8}/);
regex.exec(text.replaceAll(' ', '')[0].split('').splice(-9).unshift('0033').join('');
