// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

function reverseInteger(input: number) {
	const string = Number([...String(input)].reverse().join(''));
	return string;
}
console.log(reverseInteger(123456789));

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
