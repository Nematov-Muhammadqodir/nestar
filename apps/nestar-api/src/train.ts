// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(input: string) {
	let open = [];
	let close = [];
	input.split('').forEach((ele) => {
		if (ele === '(') open.push(ele);
		else if (ele === ')') close.push(ele);
	});

	const result = open.length === close.length;
	return result;
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
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
