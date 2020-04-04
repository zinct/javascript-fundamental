// Array pada javascript
// Array adalah variabel yang bisa menampung banyak data dengan tipe data yang berbeda


// contoh penulisan array :
var buah = ['pisang', 'apel', 'semangka']

console.log(buah)
// Array pada javascript merupakan tipe data object
console.log(typeof(buah))

// Memanipulasi Array

// Cara Manual :
var nama = ['Indra', 'Luthfiyyah', 'Regi', 'Daffa']

// Menambahkan data new Array(params...?: any)
nama[4] = 'Aceng'
console.log(nama) 

// Menghapus data array
nama[4] = undefined;
console.log(nama) 

// Menampilkan seluruh data array
for(var i = 0; i < nama.length; i++) {
	console.log('Mahasiswa Ke', (i+1), nama[i])
}

// Cara menggunakan method pada array
var nama2 = ['Indra', 'Luthfiyyah', 'Regi', 'Daffa']

// .length => mengetahui banyak data array
console.log(nama2.length)

// .join() => mengubah array menjadi string dan berurutan
console.log(nama2.join(' - ')) // Di dalam argument berfungsi untul memodifikasi pemisah

// .push() & .pop()
// .push() => menambahkan data di akhir terlebih dahulu
nama2.push('Aceng') // bisa menambahkan dua sekaligus => nama2.push('Aceng', 'Cecep')

// .pop() => menghapus data di akhir terlebih dahulu
nama2.pop()

// .unshift() & .shift()
// .unshift() => menambahkan data di awal terlebih dahulu
nama2.unshift('Aceng') // bisa menambahkan dua sekaligus => nama2.unshift('Aceng', 'Cecep')

// .shift() => menghapus data di awal terlebih dahulu
nama2.shift()
console.log(nama2.join(' - '))

// .slice() & .splice()
var arr = [1,2,3,4,5,6,7,8]

// .splice() => menyisipkan sebuah elemen ke pada array
// .splice(indexAwal, hapusBerapa (opt), Element1 (opt), Element2 (opt), ... (opt))
arr.splice(4,1,1)
console.log(arr.join(' - '))

// .slice() => mengambil sebuah array menjadi array yang baru
// .slice(indexAwal, indexAkhir)
var arr2 = arr.slice(2,5)
console.log(arr.join(' - '))
console.log(arr2.join(' - '))

console.log('--------------------------------------')
console.log('Foreach')
// .forEach() & .map()

// .forEach() => looping khusus array
var number1 = [1,2,3,4,5,6,7,8]
number1.forEach(function(e, i) {
	console.log('Element', e, 'Merupakan Index ke', i)
})

console.log('--------------------------------------')

// .map() => looping pada array dengan mengembalikan nilai array
var coba = number1.map(function(e, i) {
	return e
})

console.log('Map')
console.log(coba)
console.log('--------------------------------------')

// .sort() => mengurutkan data pada array
var number3 = [2,4,1,3,6,5,7,8,9]

console.log(number3.sort())

var number4 = [2,4,1,3,6,5,7,8,9,10,11,30]
var sort = number4.sort(function(a,b) {
	return a-b
})
console.log(sort)
console.log('--------------------------------------')

// .filter() & .find()
var number5 = [1,2,3,4,5,5,6,7,8]

// .filter() => memfilter data pada array dengan mengembalikan lebih dari satu data (array)
var filter = number5.filter(function(e) {
	// return e === 5
	return e > 5
})

console.log(filter)

// .filter() => mencari data pada array dengan mengembalikan satu data
var find = number5.find(function(e) {
	return e > 5
})

console.log(find)

// -------------------------------------------------------------------------------
// Referensi : 
// https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array
// -------------------------------------------------------------------------------


