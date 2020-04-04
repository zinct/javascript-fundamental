// Jenis operator :
// A. Binary
// 	aritmatika
// 	Assigment
// 	Comparison
// 	logika
// 	string
// B. Ternary
// 	kondisional
// C. Unary
// 	typeof

// -------------------

// Binary :
// operand1 operator operand2

// Ternary
console.log(4 + 2)
console.log(4 - 2)
console.log(4 * 2)
console.log(4 / 2)
console.log(3 % 2) // Modulus - Sisa dari
console.log(4 + 2 - 4 * 2)

// Assigment / Penugasan
var x = 0
console.log(x = 10)
console.log(x += 1)
console.log(x -= 1)
console.log(x *= 2)
console.log(x /= 2)
console.log(x %= 2)

// Comparison / Perbandingan return nilai true/false
console.log(10 == 10) // sama dengan
console.log(10 !== 10) // tidak sama dengan
console.log(10 === '10') // strict sama dengan
console.log(10 > 10) // lebih besar dari
console.log(10 < 10) // lebih kecil dari
console.log(10 >= 10) // lebih kecil dari
console.log(10 <= 10) // lebih kecil dari

// Logika
var y = true
console.log(y || false) // OR
console.log(y && false) // AND
console.log(!y) // NOT

// String
console.log(10 + 10)
console.log(10 + '10')
console.log(10 + 10 + '10')
console.log('10' + 10 + 10)

// Unary
// Operandnya hanya 1

// typeof
var type = typeof('hello world')
console.log(type)

// Ternary
// Operandnya punya 3
var ternary = ((2 % 2) == 1) ? 'ganjil' : 'genap'
console.log(ternary)
