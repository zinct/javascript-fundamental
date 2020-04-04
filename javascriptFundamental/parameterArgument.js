// parameter dan argument

// parameter
// Jika argument lebih banyak dari pada parameter maka sisa nilainya akan dimasukan ke
// array arguments => arguments[]

// argument
// jika parameter lebih banyak dari pada argument maka sisa nilainya akan di abaikan

// arguments
// array yang menampung sisa argument

function tambah() {

	var hasil = 0
	for (i = 0; i < arguments.length; i++) {

		if (typeof(arguments[i]) == 'string') {
			return 'Wrong input Format'
		}

		hasil += arguments[i]
	}

	return hasil

}

var coba = tambah(2, 5, 7)

console.log(coba)