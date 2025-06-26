// TASK ZS:

import e from 'express';

// Shunday function yozing, bu function parametrdagi array ichida
// bir marotaba takrorlangan element'ni qaytarsin

// MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;

function singleNumber(input: number[]) {
	return input.filter((ele, i, arr) => {
		return input.indexOf(ele) === input.lastIndexOf(ele);
	});
}

console.log(singleNumber([4, 2, 1, 2, 1]));

// TASK ZR:

// import e from 'express';

// Shunday function yozing, bu function,
// berilgan parametr string tarkibidagi raqam va sonlarni
// sanab object sifatida qaytarsin.

// MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};

// function countNumberAndLetters(input: string) {
// 	const symbols = [
// 		'!',
// 		'@',
// 		'#',
// 		'$',
// 		'%',
// 		'^',
// 		'&',
// 		'*',
// 		'(',
// 		')',
// 		'-',
// 		'_',
// 		'=',
// 		'+',
// 		'[',
// 		']',
// 		'{',
// 		'}',
// 		'\\',
// 		'|',
// 		';',
// 		':',
// 		"'",
// 		'"',
// 		',',
// 		'.',
// 		'<',
// 		'>',
// 		'/',
// 		'?',
// 		'`',
// 		'~',
// 		'¥',
// 	];

// 	const numbers = input
// 		.split('')
// 		.map((ele) => Number(ele))
// 		.filter((ele) => Number(ele));

// 	let letters = [];
// 	const symbolStrings = input
// 		.split('')
// 		.filter((str) => isNaN(Number(str)))
// 		.forEach((ele) => (symbols.includes(ele) ? letters : letters.push(ele)));

// 	const resultObj = { number: numbers.length, letter: letters.length };

// 	return resultObj;
// }

// console.log(countNumberAndLetters('stridcdng152%\¥'));
// TASK ZQ:

// Shunday function yozing, bu function berilgan array parametr
// ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
// array'da yagonadan qaytarsin qaytarsin.

// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];

// function findDuplicates(input: number[]) {
// 	const result = input.filter((ele, i) => input.indexOf(ele) !== i);

// 	return [...new Set(result)];
// }
// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4, 4, 4, 4]));
// console.log('ZO');
// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
// 	return arr1.every((val) => arr2.includes(val));
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3], [5, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(input: string) {
// 	let open = [];
// 	let close = [];
// 	input.split('').forEach((ele) => {
// 		if (ele === '(') open.push(ele);
// 		else if (ele === ')') close.push(ele);
// 	});

// 	const result = open.length === close.length;
// 	return result;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];

// function rotateArray(array: number[], index: number) {
// 	const tilIndex = array.slice(0, index + 1);
// 	const fromIndex = array.slice(index + 1);
// 	return fromIndex.concat(tilIndex);
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(input: string) {
// 	return input
// 		.split(' ')
// 		.map((ele) => ele[0].toLowerCase() + ele.slice(1))
// 		.join(' ')
// 		.replaceAll(' ', '-');
// }
// console.log(stringToKebab('I love Kebab'));

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

// function reverseInteger(input: number) {
// 	const string = Number([...String(input)].reverse().join(''));
// 	return string;
// }
// console.log(reverseInteger(123456789));

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();
// function printNumbers() {
// 	let count = 1;
// 	console.log(count++);
// 	const logEverySec = setInterval(() => {
// 		console.log(count++);
// 	}, 1000);

// 	setTimeout(() => {
// 		clearInterval(logEverySec);
// 	}, 5000);
// }
// printNumbers();
